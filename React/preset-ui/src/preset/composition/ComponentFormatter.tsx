import { Box, Stack, Typography } from "@mui/material";

export const ComponentFormatter = (props: {
  title?: string;
  componentList: JSX.Element[];
  gap?: string;
}) => {
  return (
    <Stack sx={{ display: "flex", flexDirection: "column", gap: props.gap }}>
      {props.title !== undefined ? (
        <Box
          sx={{
            width: "100px",
            height: "18px",
            marginBottom: "-4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="Subtitle_Semibold12">{props.title}</Typography>
        </Box>
      ) : (
        <></>
      )}
      {props.componentList.map((component, index) => {
        const marginBottom = component.key === "material" ? "20px" : "px";
        return (
          <Box
            key={index}
            sx={{
              marginBottom: marginBottom,
              minWidth: "100px",
              minHeight: "26px",
            }}
          >
            {component}
          </Box>
        );
      })}
    </Stack>
  );
};
