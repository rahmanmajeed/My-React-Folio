import { useState } from "react";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import Container from "./components/container/Container";

function App() {

  return (
    <>
      <div className="grid gap-3 lg:gap-0 min-h-screen min-w-full transition[height] duration-1000 ease-in-out">
        <div className="hidden md:block md:col-span-1 lg:col-span-2 bg-[#242424]">
          <Sidebar />
        </div>

        <div className="md:col-start-2 md:col-end-13 lg:col-start-3 mlg:col-end-13 col-span-full">
          <Container />
        </div>
      </div>
    </>
  );
}

export default App;
