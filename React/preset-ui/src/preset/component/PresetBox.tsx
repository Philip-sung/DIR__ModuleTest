import { Box, Stack, Typography } from "@mui/material";

export const PresetBox = (props: {
  index: number;
  presetName: string;
  onClick: () => void;
}) => {
  return (
    <Stack
      sx={{
        display: "flex",
        width: "196px",
        minHeight: "42px",
        padding: "10px 6px",
        flexDirection: "row",
        boxSizing: "border-box",
      }}
      onClick={() => {
        props.onClick();
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "16px" }}>
        <Typography variant="Subtitle_Semibold10">
          {props.index.toString()}
        </Typography>
      </Box>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "180px",
        }}
      >
        <Typography variant="Body14">{props.presetName}</Typography>
      </Stack>
    </Stack>
  );
};
