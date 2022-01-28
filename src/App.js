import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(1);
  return (
    <>
      <h1>First render from React. {counter}</h1>
    </>
  );
}

export default App;
