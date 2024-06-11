import { Toaster, toast } from "sonner";

function App() {
  return (
    <>
      <Toaster />
      <BasicToast />
      <AsyncToast />

      {/* Custom Toast */}
      {onClickButtonGenerator(
        () =>
          toast(<div>A custom toast with default styling</div>, {
            duration: 5000,
          }),
        "Custom"
      )}

      {/* Dynamic Position */}
      {onClickButtonGenerator(
        () =>
          toast("Hello World", {
            position: "top-center",
          }),
        "Dynamic Position"
      )}
    </>
  );
}

const onClickButtonGenerator = (
  func: () => void,
  buttonContent: string
): JSX.Element => <button onClick={func}>{buttonContent}</button>;

function BasicToast() {
  return (
    <div>
      <button onClick={() => toast("This is a sonner toast")}>
        BasicToast
      </button>
    </div>
  );
}

const AsyncToast = () => {
  return (
    <div>
      <button
        onClick={() => {
          toast.promise(delay, {
            loading: "Loading",
            success: (data) => {
              return `${data} milliseconds have passed`;
            },
          });
        }}
      >
        AsyncToast
      </button>
    </div>
  );
};

export function delay(): Promise<number> {
  const time = 2000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time); // 1000밀리초 = 1초
  });
}

export default App;
