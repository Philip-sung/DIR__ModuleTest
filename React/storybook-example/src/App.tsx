import { theme as ITheme } from "@imago-cloud/design-system";
import { ThemeProvider } from "@imago-cloud/design-system";
import { PresetDialog } from "./preset/PresetDialog";

function App() {
  return (
    <>
      <ThemeProvider theme={ITheme}>
        <PresetDialog />
      </ThemeProvider>
    </>
  );
}

export default App;
