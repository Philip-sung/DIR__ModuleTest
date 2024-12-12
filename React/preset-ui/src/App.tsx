import { theme as ITheme } from "@imago-cloud/design-system";
import { ThemeProvider } from "@imago-cloud/design-system";
import { PresetDialog } from "./preset/PresetDialogWithDnD";
import { DragDropList } from "./DragDropList/DragDropList";
import { ListMockingData } from "./DragDropList/ListMockingData";

function App() {
  return (
    <>
      <ThemeProvider theme={ITheme}>
        <DragDropList itemList={ListMockingData} />
        {/* <PresetDialog /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
