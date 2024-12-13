import { Box, Button, Stack, Typography } from "@mui/material";
import { Preset } from "../@type";
import { DragDirection, DragDropList } from "../../DragDropList/DragDropList";
import { PresetBox } from "../component/PresetBox";
import { IconButton, Ricon } from "@imago-cloud/design-system";

export const PresetListSelector = (props: {
  presetListState: Preset.PresetListState;
  selectedPresetState: Preset.SelectedPresetState;
}) => {
  return (
    <Stack
      sx={{
        width: "212px",
        minWidth: "212px",
        boxSizing: "border-box",
        padding: "20px 8px",
        borderRight: "1px solid #ccc",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Stack
          sx={{
            marginBottom: "8px",
            height: "28px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="H14">Preset list</Typography>
          <IconButton variant="outlined" size={"28"}>
            {/* <Ricon
              icon="ri-align-justify"
              svgProps={{
                width: "18px",
                height: "18px",
              }}
            /> */}
            +
          </IconButton>
        </Stack>
      </Box>
      <Stack sx={{ display: "flex", flexDirection: "column" }}>
        <DragDropList
          dragHandler={true}
          dragDirection={DragDirection.VERTICAL}
          onChangeOrder={(indexList) => {
            const originalOrderPresetList = props.presetListState.GET();
            console.log(originalOrderPresetList);
            console.log(indexList);
            const newOrderPresetList = reorderList(
              originalOrderPresetList,
              indexList
            );
            console.log(newOrderPresetList);
          }}
        >
          {props.presetListState.GET().map((preset, index) => (
            <PresetBox
              key={index}
              index={index}
              presetName={preset.name}
              onClick={() => {
                props.selectedPresetState.SET(preset.name);
              }}
            />
          ))}
        </DragDropList>
      </Stack>
    </Stack>
  );
};

export const reorderList = <T,>(items: T[], indexList: number[]): T[] => {
  if (items.length !== indexList.length) {
    throw new Error("items and indexList must have the same length");
  }

  const reorderedList: T[] = Array(items.length);

  indexList.forEach((newIndex, currentIndex) => {
    reorderedList[newIndex] = items[currentIndex];
  });

  return reorderedList;
};
