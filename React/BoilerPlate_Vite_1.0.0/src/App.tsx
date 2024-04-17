function App() {
  const welcomeText: JSX.Element = (
    <div>
      <strong>How to create VoilerPlate</strong>
    </div>
  );
  return (
    <>
      <h1>{welcomeText}</h1>
      <p>npm install -g vite</p>
      <p>npm create vite</p>
    </>
  );
}

export default App;
