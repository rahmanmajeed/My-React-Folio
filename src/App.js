import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <h1>First render from React. {counter}</h1>
      <h1 className="text-3x underline bg-lime-700 shadow-lg">Hello world!</h1>
      <img src='./assets/giftbox.png' alt="image"/>
    </>
  );
}

export default App;
