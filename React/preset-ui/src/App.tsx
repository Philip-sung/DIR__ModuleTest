import { theme as ITheme } from "@imago-cloud/design-system";
import { ThemeProvider } from "@imago-cloud/design-system";
import { DragDirection, DragDropList } from "./DragDropList/DragDropList";
import { ListMockingData } from "./DragDropList/ListMockingData";
import { PresetDialog } from "./preset/PresetDialog";

function App() {
  return (
    <>
      <ThemeProvider theme={ITheme}>
        <DragDropList
          onChangeOrder={(indexList) => {
            console.log(indexList);
          }}
          dragHandler={true}
          dragDirection={DragDirection.VERTICAL}
        >
          {ListMockingData}
        </DragDropList>
        <PresetDialog />
      </ThemeProvider>
    </>
  );
}

export default App;
