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
            width: "1120px !important",
            maxWidth: "1800px",
            height: "626px",
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
        <DialogueContent>
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
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

// ** Composition Level 2 ** //
export const PresetListSelector = (props: {
  presetListState: {
    GET: () => Preset.Preset[];
    SET: (presetList: Preset.Preset[]) => void;
  };
  selectedPresetState: { GET: () => string; SET: (presetName: string) => void };
}) => {
  return (
    <Stack sx={{}}>
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
      </Stack>
    </Stack>
  );
};

export const PresetParameterController = (props: {
  presetState: {
    GET: () => Preset.Preset;
    SET: (preset: Preset.Preset) => void;
  };
  commonParameterState: {
    GET: () => Preset.CommonParameter;
    SET: (param: Preset.CommonParameter) => void;
  };
  crownParameterState: {
    GET: () => Preset.RestorationTypeSpecificParameter;
    SET: (param: Preset.RestorationTypeSpecificParameter) => void;
  };
  inOnlayParameterState: {
    GET: () => Preset.RestorationTypeSpecificParameter;
    SET: (param: Preset.RestorationTypeSpecificParameter) => void;
  };
  implantParameterState: {
    GET: () => Preset.RestorationTypeSpecificParameter;
    SET: (param: Preset.RestorationTypeSpecificParameter) => void;
  };
}) => {
  const commonKey = props.commonParameterState.GET();
  const commonValue = props.commonParameterState.GET();

  const RestorationTypeSpecificParameter = Object.keys(
    props.crownParameterState.GET()
  );
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
    const aa = <Typography key={propertyKey}>{propertyKey}</Typography>;
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
    const aa = <Typography key={propertyKey}>{propertyKey}</Typography>;
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
  console.log(commonKey);
  console.log(commonValue);

  console.log(RestorationTypeSpecificParameter);
  console.log(crownValue);
  console.log(inOnlayValue);
  console.log(implantValue);

  return (
    <Box>
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
        <Box sx={{ border: "1px solid #eee", width: "170px", height: "40px" }}>
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
              border: "1px solid #eee",
              width: "170px",
              height: "40px",
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
        item={{ min: 0, max: 1, step: 0.01, unit: "mm" }}
        value={valuee}
        onChange={(val) => {
          console.log();
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
          height: "40px",
          fontSize: "16px",
          p: "0px 10px",
          width: "120px",
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
