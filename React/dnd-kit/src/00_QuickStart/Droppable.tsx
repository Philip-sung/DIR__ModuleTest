import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props: { id: string; children?: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div key={props.id} id={props.id} ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
