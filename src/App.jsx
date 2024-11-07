import React from "react";
import Hero from "./components/hero";
import LeftBar from "./components/letft-bar";
import SidebarNav from "./components/right-bar";

const App = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[.4fr,.6fr] xl:grid-cols-[.3fr,0.7fr,.1fr] max-w-[1400px] mx-auto h-screen gap-6   px-4 py-8  bg-zinc-100 ">
      <LeftBar />
      <Hero />
      <SidebarNav />
    </div>
  );
};

export default App;
