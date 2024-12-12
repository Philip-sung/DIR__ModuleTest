import {
  Dialogue,
  DialogueActions,
  DialogueContent,
  DialogueTitle,
  NumberCounter,
} from "@imago-cloud/design-system";
import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { Preset } from "./@type";
import { MockedPresetList } from "./parameterMockingData";
import { useInnerDesignParameterList } from "./useInnerDesignParameterList";
import { DndContext } from "@dnd-kit/core";

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
          },
        }}
      >
        <DialogueTitle
          sx={{
            borderBottom: (t) => `1px solid ${t.palette.grey[500]}`,
          }}
        >
          <Typography variant="H18">Title</Typography>
        </DialogueTitle>
        <DialogueContent sx={{ padding: "0px" }}>
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
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
        <DialogueActions>Actions</DialogueActions>
      </Dialogue>
    </>
  );
};

export const DummySpace = () => {
  return (
    <Box sx={{ width: "220px", height: "504px", minWidth: "220px" }}>s</Box>
  );
};

export const PresetListSelector = (props: {
  presetListState: Preset.PresetListState;
  selectedPresetState: Preset.SelectedPresetState;
}) => {
  return (
    <Stack sx={{ width: "212px", minWidth: "212px" }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography>Preset list</Typography>
        <Button
          onClick={() => {
            console.log(props.presetListState.GET());
          }}
        >
          +
        </Button>
      </Box>
      <Stack sx={{ display: "flex", flexDirection: "column" }}>
        <DndContext>
          {props.presetListState.GET().map((preset, index) => (
            <Stack
              onClick={() => {
                props.selectedPresetState.SET(preset.name);
              }}
              key={`${index}${preset.name}`}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Typography>{index}</Typography>
              <Typography>{preset.name}</Typography>
              <Typography>=</Typography>
            </Stack>
          ))}
        </DndContext>
      </Stack>
    </Stack>
  );
};

export const PresetParameterController = (props: {
  presetState: Preset.PresetState;
  commonParameterState: Preset.CommonParameterState;
  crownParameterState: Preset.RestorationTypeSpecificParameterState;
  inOnlayParameterState: Preset.RestorationTypeSpecificParameterState;
  implantParameterState: Preset.RestorationTypeSpecificParameterState;
}) => {
  const commonValue = props.commonParameterState.GET();

  const crownValue = props.crownParameterState.GET();
  const inOnlayValue = props.inOnlayParameterState.GET();
  const implantValue = props.implantParameterState.GET();

  const commonParameterKeyList: JSX.Element[] = [];
  const commonParemeterSetterList: JSX.Element[] = [];

  const parameterKeyList: JSX.Element[] = [];
  const crownParemeterSetterList: JSX.Element[] = [];
  const inOnlayParemeterSetterList: JSX.Element[] = [];
  const implantParemeterSetterList: JSX.Element[] = [];

  for (const propertyKey of Object.keys(commonValue) as Array<
    keyof typeof commonValue
  >) {
    const aa = (
      <Typography sx={{ fontSize: 12 }} key={propertyKey}>
        {propertyKey}
      </Typography>
    );
    commonParameterKeyList.push(aa);
  }

  for (const propertyKey of Object.keys(commonValue) as Array<
    keyof typeof commonValue
  >) {
    const aa = (
      <CommonParameterController
        key={propertyKey}
        propertyKey={propertyKey}
        value={commonValue}
        setter={props.commonParameterState.SET}
      />
    );
    commonParemeterSetterList.push(aa);
  }

  for (const propertyKey of Object.keys(crownValue) as Array<
    keyof typeof crownValue
  >) {
    const aa = (
      <Typography sx={{ fontSize: 12 }} key={propertyKey}>
        {propertyKey}
      </Typography>
    );
    parameterKeyList.push(aa);
  }

  for (const propertyKey of Object.keys(crownValue) as Array<
    keyof typeof crownValue
  >) {
    const aa = (
      <RestorationTypeSpecificParameterController
        key={propertyKey}
        propertyKey={propertyKey}
        value={crownValue}
        setter={props.crownParameterState.SET}
      />
    );
    crownParemeterSetterList.push(aa);
  }

  for (const propertyKey of Object.keys(inOnlayValue) as Array<
    keyof typeof inOnlayValue
  >) {
    const aa = (
      <RestorationTypeSpecificParameterController
        key={propertyKey}
        propertyKey={propertyKey}
        value={inOnlayValue}
        setter={props.inOnlayParameterState.SET}
      />
    );
    inOnlayParemeterSetterList.push(aa);
  }

  for (const propertyKey of Object.keys(implantValue) as Array<
    keyof typeof implantValue
  >) {
    const aa = (
      <RestorationTypeSpecificParameterController
        key={propertyKey}
        propertyKey={propertyKey}
        value={implantValue}
        setter={props.implantParameterState.SET}
      />
    );
    implantParemeterSetterList.push(aa);
  }

  return (
    <Box sx={{ width: "528px", height: "504px" }}>
      {props.presetState.GET().name}

      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <ComponentFormatter componentList={commonParameterKeyList} />
        <ComponentFormatter componentList={commonParemeterSetterList} />
      </Stack>
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <ComponentFormatter title={""} componentList={parameterKeyList} />
        <ComponentFormatter
          title="Crown"
          componentList={crownParemeterSetterList}
        />
        <ComponentFormatter
          title={"In-onlay"}
          componentList={inOnlayParemeterSetterList}
        />
        <ComponentFormatter
          title={"Implant"}
          componentList={implantParemeterSetterList}
        />
      </Stack>
    </Box>
  );
};

export const ComponentFormatter = (props: {
  title?: string;
  componentList: JSX.Element[];
}) => {
  return (
    <Stack sx={{ display: "flex", flexDirection: "column" }}>
      {props.title !== undefined ? (
        <Box sx={{ border: "1px solid #fff", width: "120px", height: "40px" }}>
          {props.title}
        </Box>
      ) : (
        <></>
      )}
      {props.componentList.map((component) => {
        const marginBottom = component.key === "material" ? "10px" : "0px";
        return (
          <Box
            sx={{
              marginBottom: marginBottom,
              border: "1px solid #fff",
              width: "120px",
              height: "36px",
            }}
          >
            {component}
          </Box>
        );
      })}
    </Stack>
  );
};

export const CommonParameterController = (props: {
  propertyKey: string;
  value: Preset.CommonParameter;
  setter: (param: Preset.CommonParameter) => void;
  restriction?: number;
}): JSX.Element => {
  let element: JSX.Element = <></>;
  const valuee = props.value[props.propertyKey as keyof Preset.CommonParameter];
  if (typeof valuee === "number") {
    element = (
      <NumberCounter
        size="26"
        sx={{ width: "100px", height: "26px" }}
        item={{ min: 0, max: 1, step: 0.01, unit: "mm" }}
        value={valuee}
        onChange={(val) => {
          props.setter({ ...props.value, [props.propertyKey]: val });
        }}
      />
    );
  } else if (typeof valuee === "string") {
    element = <Box>{valuee}</Box>;
  } else if (typeof valuee === "undefined") {
    element = <Box>-</Box>;
  }

  return element;
};

export const RestorationTypeSpecificParameterController = (props: {
  propertyKey: string;
  value: Preset.RestorationTypeSpecificParameter;
  setter: (param: Preset.RestorationTypeSpecificParameter) => void;
  restriction?: number;
}): JSX.Element => {
  let element: JSX.Element = <></>;
  const valuee =
    props.value[
      props.propertyKey as keyof Preset.RestorationTypeSpecificParameter
    ];
  if (typeof valuee === "number") {
    element = (
      <NumberCounter
        variant="filled"
        size="26"
        sx={{ width: "100px", height: "26px" }}
        item={{ min: 0, max: 1, step: 0.01, unit: "mm" }}
        value={valuee}
        onChange={(val) => {
          props.setter({ ...props.value, [props.propertyKey]: val });
        }}
      />
    );
  } else if (typeof valuee === "string") {
    element = (
      <Select
        id="demo-simple-select"
        value={valuee}
        onChange={(event: SelectChangeEvent) => {
          props.setter({
            ...props.value,
            [props.propertyKey]: event.target.value,
          });
        }}
        sx={{
          height: "26px",
          fontSize: "12px",
          p: "0px 10px",
          width: "100px",
          mr: "20px",
        }}
      >
        {props.propertyKey === "outputMethod"
          ? Object.keys(Preset.FabricationMethodType).map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))
          : Object.keys(Preset.MaterialType).map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
      </Select>
    );
  } else if (typeof valuee === "undefined") {
    element = <Box>-</Box>;
  }

  return element;
};
