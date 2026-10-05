/** @format */

import Gif from "./components/Gif";
import Tab from "./components/Tab";
function App() {
  return (
    <div className="bg-red-400 min-h-screen min-w-screen overflow-x-hidden flex flex-col items-center pb-7 gap-y-10">
      <div className=" mt-7 py-4 rounded-2xl w-325 text-center bg-white">
        <p className="font-bold text-3xl">GIF GENERATOR</p>
      </div>
      <div className="flex-1 w-full flex flex-col items-center gap-y-10">
        <Gif />
        <Tab />
      </div>
    </div>
  );
}

export default App;
