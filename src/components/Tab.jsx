/** @format */

import { useState } from "react";
import Api from "../hooks/Api";

const Tab = () => {
  const [tag, setTag] = useState("Car");
  const { gif, getGIF } = Api();

  return (
    <div className="w-150 min-h-63 rounded-2xl bg-blue-500 border flex flex-col items-center justify-between gap-y-5">
      <h2 className="mt-2 font-mono  text-xl font-bold">Generate {tag} GIF</h2>
      <img src={gif} alt="Generated GIF" className="w-75 object-contain" />
      <div className=" flex flex-col items-center gap-y-3 ">
        <input
          type="text"
          value={tag}
          onChange={(event) => {
            setTag(event.target.value);
          }}
          className="border rounded-md bg-white py-2 px-26 text-center"
        />
        <button
          onClick={() => getGIF(tag)}
          className="bg-amber-300 py-2 px-40 mb-2 rounded-md text-md font-bold cursor-pointer hover:bg-amber-400 transition-all duration-300 "
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Tab;
