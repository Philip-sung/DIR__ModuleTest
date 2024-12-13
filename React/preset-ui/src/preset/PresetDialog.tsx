import {
  Button,
  Dialogue,
  DialogueActions,
  DialogueContent,
  DialogueTitle,
} from "@imago-cloud/design-system";
import { Box, Stack, Typography } from "@mui/material";
import { PresetListSelector } from "./composition/PresetListSelector";
import { PresetParameterController } from "./composition/PresetParameterController";
import { MockedPresetList } from "./parameterMockingData";
import { useInnerDesignParameterList } from "./useInnerDesignParameterList";

export const PresetDialog = (): JSX.Element => {
  const {
    currentPresetListState,
    selectedPresetState,
    currentPresetState,
    commonParameterState,
    crownParameterState,
    inOnlayParameterState,
    implantParameterState,
  } = useInnerDesignParameterList(MockedPresetList);

  return (
    <>
      <Dialogue
        open={true}
        PaperProps={{
          sx: {
            width: "960px !important",
            maxWidth: "1800px",
            height: "640px",
            padding: 0,
            overflow: "hidden",
          },
        }}
      >
        <DialogueTitle
          sx={{
            borderBottom: (t) => `1px solid ${t.palette.grey[500]}`,
            overflow: "hidden",
          }}
        >
          <Typography variant="H18">Title</Typography>
        </DialogueTitle>
        <DialogueContent sx={{ padding: "0px" }}>
          <Stack
            sx={{ display: "flex", flexDirection: "row", overflow: "hidden" }}
          >
            <DummySpace />
            <PresetListSelector
              presetListState={currentPresetListState}
              selectedPresetState={selectedPresetState}
            />

            <PresetParameterController
              presetState={currentPresetState}
              commonParameterState={commonParameterState}
              crownParameterState={crownParameterState}
              implantParameterState={implantParameterState}
              inOnlayParameterState={inOnlayParameterState}
            />
          </Stack>
        </DialogueContent>
        <DialogueActions>
          <Button variant="contained" size="30">
            Apply
          </Button>
        </DialogueActions>
      </Dialogue>
    </>
  );
};

export const DummySpace = () => {
  return (
    <Box
      sx={{
        width: "219px",
        height: "504px",
        minWidth: "220px",
        borderRight: "1px solid #ccc",
      }}
    ></Box>
  );
};
