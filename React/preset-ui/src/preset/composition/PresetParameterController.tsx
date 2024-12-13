import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { Preset } from "../@type";
import { ComponentFormatter } from "./ComponentFormatter";
import { IconButton, NumberCounter } from "@imago-cloud/design-system";

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
    const commonParameterKey = (
      <Typography
        variant="Subtitle_Semibold12"
        sx={{ width: "170px", height: "20px" }}
        key={propertyKey}
      >
        {propertyKey}
      </Typography>
    );
    commonParameterKeyList.push(commonParameterKey);
  }

  for (const propertyKey of Object.keys(commonValue) as Array<
    keyof typeof commonValue
  >) {
    const commonParameterSetter = (
      <CommonParameterController
        key={propertyKey}
        propertyKey={propertyKey}
        value={commonValue}
        setter={props.commonParameterState.SET}
      />
    );
    commonParemeterSetterList.push(commonParameterSetter);
  }

  for (const propertyKey of Object.keys(crownValue) as Array<
    keyof typeof crownValue
  >) {
    const restorationTypeSpecificParameterKey = (
      <Typography
        variant="Subtitle_Semibold12"
        sx={{ width: "170px", height: "20px" }}
        key={propertyKey}
      >
        {propertyKey}
      </Typography>
    );
    parameterKeyList.push(restorationTypeSpecificParameterKey);
  }

  for (const propertyKey of Object.keys(crownValue) as Array<
    keyof typeof crownValue
  >) {
    const crownParameterSetter = (
      <RestorationTypeSpecificParameterController
        key={propertyKey}
        propertyKey={propertyKey}
        value={crownValue}
        setter={props.crownParameterState.SET}
      />
    );
    crownParemeterSetterList.push(crownParameterSetter);
  }

  for (const propertyKey of Object.keys(inOnlayValue) as Array<
    keyof typeof inOnlayValue
  >) {
    const inOnlayParameterSetter = (
      <RestorationTypeSpecificParameterController
        key={propertyKey}
        propertyKey={propertyKey}
        value={inOnlayValue}
        setter={props.inOnlayParameterState.SET}
      />
    );
    inOnlayParemeterSetterList.push(inOnlayParameterSetter);
  }

  for (const propertyKey of Object.keys(implantValue) as Array<
    keyof typeof implantValue
  >) {
    const implantParameterSetter = (
      <RestorationTypeSpecificParameterController
        key={propertyKey}
        propertyKey={propertyKey}
        value={implantValue}
        setter={props.implantParameterState.SET}
      />
    );
    implantParemeterSetterList.push(implantParameterSetter);
  }

  return (
    <Stack
      sx={{
        width: "528px",
        height: "504px",
        boxSizing: "border-box",
        padding: "20px 20px 20px 16px",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          height: "28px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="H14">{props.presetState.GET().name}</Typography>
        <Stack sx={{ display: "flex", flexDirection: "row", gap: "4px" }}>
          <Button variant="text">
            <Typography variant="Button_Semibold12">Set as default</Typography>
          </Button>
          <IconButton variant="outlined" size="28">
            T
          </IconButton>
        </Stack>
      </Stack>

      <Stack
        sx={{ display: "flex", flexDirection: "row", marginBottom: "20px" }}
      >
        <ComponentFormatter componentList={commonParameterKeyList} gap="10px" />
        <ComponentFormatter
          componentList={commonParemeterSetterList}
          gap="10px"
        />
      </Stack>
      <Stack sx={{ display: "flex", flexDirection: "row", gap: "6px" }}>
        <ComponentFormatter
          title={""}
          componentList={parameterKeyList}
          gap="8px"
        />
        <ComponentFormatter
          title="Crown"
          componentList={crownParemeterSetterList}
          gap="8px"
        />
        <ComponentFormatter
          title={"In-onlay"}
          componentList={inOnlayParemeterSetterList}
          gap="8px"
        />
        <ComponentFormatter
          title={"Implant"}
          componentList={implantParemeterSetterList}
          gap="8px"
        />
      </Stack>
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
  const input = props.value[props.propertyKey as keyof Preset.CommonParameter];
  if (typeof input === "number") {
    element = (
      <NumberCounter
        size="26"
        sx={{ width: "100px", height: "26px" }}
        item={{ min: 0, max: 1, step: 0.01, unit: "mm" }}
        value={input}
        onChange={(val) => {
          props.setter({ ...props.value, [props.propertyKey]: val });
        }}
      />
    );
  } else if (typeof input === "string") {
    element = <Box>{input}</Box>;
  } else if (typeof input === "undefined") {
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
  const input =
    props.value[
      props.propertyKey as keyof Preset.RestorationTypeSpecificParameter
    ];
  if (typeof input === "number") {
    element = (
      <NumberCounter
        variant="filled"
        size="26"
        sx={{ width: "100px", height: "26px" }}
        item={{ min: 0, max: 1, step: 0.01, unit: "mm" }}
        value={input}
        onChange={(val) => {
          props.setter({ ...props.value, [props.propertyKey]: val });
        }}
      />
    );
  } else if (typeof input === "string") {
    element = (
      <Select
        id="demo-simple-select"
        value={input.toUpperCase()}
        onChange={(event: SelectChangeEvent) => {
          props.setter({
            ...props.value,
            [props.propertyKey]: event.target.value,
          });
        }}
        sx={{
          height: "26px",
          fontSize: "12px",
          width: "100px",
        }}
      >
        {props.propertyKey === "outputMethod"
          ? Object.keys(Preset.FabricationMethodType).map((item, index) => (
              <MenuItem key={index} value={item.toUpperCase()}>
                <Typography variant="Body12">{item.toUpperCase()}</Typography>
              </MenuItem>
            ))
          : Object.keys(Preset.MaterialType).map((item, index) => (
              <MenuItem key={index} value={item.toUpperCase()}>
                <Typography variant="Body12">{item.toUpperCase()}</Typography>
              </MenuItem>
            ))}
      </Select>
    );
  } else if (typeof input === "undefined") {
    element = <Box>-</Box>;
  }

  return element;
};
