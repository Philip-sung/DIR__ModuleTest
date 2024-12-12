import { theme as ITheme } from "@imago-cloud/design-system";
import { ThemeProvider } from "@imago-cloud/design-system";
import { PresetDialog } from "./preset/PresetDialogWithDnD";

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
