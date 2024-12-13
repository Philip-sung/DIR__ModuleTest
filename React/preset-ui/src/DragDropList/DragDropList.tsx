import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, BoxProps } from "@mui/material";

import React, { useState } from "react";
import { EnumLike } from "../preset/@type/Preset";

export const DragDirection = {
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal",
  FREE: "free",
} as const;
type DragDirection = EnumLike<typeof DragDirection>;

export const DragDropList = (props: {
  children: React.ReactNode;
  dragDirection?: DragDirection;
  dragHandler?: boolean;
  dragHandlerSx?: BoxProps;
  onChangeOrder?: (indexList: number[]) => void;
}) => {
  const childrenLength = React.Children.count(props.children);
  const childrenIndexList = Array(childrenLength)
    .fill(0)
    .map((_, index) => index);
  const [indexList, setIndexList] = useState<number[]>(childrenIndexList);

  const sensorList = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 1000, distance: 0 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const dragDirectionConstraint = props.dragDirection
    ? getDragDirectionModifier(props.dragDirection)
    : [];

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      if (typeof active.id !== "number")
        throw new Error("DragDropList use number type index");
      const oldIndex = indexList.indexOf(active.id);
      if (typeof over.id !== "number")
        throw new Error("DragDropList use number type index");
      const newIndex = indexList.indexOf(over.id);

      const changedIndexList = arrayMove(indexList, oldIndex, newIndex);

      setIndexList(changedIndexList);
      if (props.onChangeOrder) props.onChangeOrder(changedIndexList);
    }
  };

  return (
    <DndContext
      sensors={sensorList}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[...dragDirectionConstraint]}
    >
      <SortableContext items={indexList}>
        {indexList.map((index) => (
          <SortableWrapper
            key={index}
            index={index}
            dragHandler={props.dragHandler ? true : false}
            dragHandlerSx={props.dragHandlerSx}
          >
            {React.Children.toArray(props.children)[index]}
          </SortableWrapper>
        ))}
      </SortableContext>
    </DndContext>
  );
};

const SortableWrapper = (props: {
  index: number;
  dragHandler?: boolean;
  dragHandlerSx?: BoxProps;
  children?: React.ReactNode;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.index });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...(props.dragHandler ? {} : listeners)}
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          width: "fit-content",
          height: "fit-content",
          position: "relative",
        }}
      >
        {props.children}

        {props.dragHandler ? (
          <Box
            {...listeners}
            sx={{
              position: "absolute",
              top: "50%",
              right: "6px",
              transform: "translateY(-50%)",
            }}
          >
            <DragHandlerIcon dragHandlerSx={props.dragHandlerSx} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

const DragHandlerIcon = (props: { dragHandlerSx?: BoxProps }) => {
  return (
    <Box
      sx={{
        minWidth: "16px",
        minHeight: "16px",
        width: "16px",
        height: "16px",
        display: "flex",
        justifyContent: "top",
        alignItems: "center",
        flexDirection: "column",
        cursor: "grab",
        ...props.dragHandlerSx,
      }}
    >
      <Box
        sx={{
          width: "9px",
          height: "1px",
          backgroundColor: "#6A6E74",
          top: "6.22px",
          position: "relative",
        }}
      ></Box>
      <Box
        sx={{
          width: "9px",
          height: "1px",
          backgroundColor: "#6A6E74",
          top: "8.89px",
          position: "relative",
        }}
      ></Box>
    </Box>
  );
};

const getDragDirectionModifier = (dragDirection: DragDirection) => {
  switch (dragDirection) {
    case DragDirection.FREE:
      return [];
    case DragDirection.HORIZONTAL:
      return [restrictToHorizontalAxis];
    case DragDirection.VERTICAL:
      return [restrictToVerticalAxis];
  }
};
