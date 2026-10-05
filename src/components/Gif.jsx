/** @format */
import Api from "../hooks/Api";
const Gif = () => {
  const { gif, getGIF } = Api();
  return (
    <div className="w-150 min-h-63 rounded-2xl bg-green-500 border flex flex-col items-center justify-between gap-y-5">
      <h2 className="mt-2 font-mono  text-xl font-bold">Generate Random GIF</h2>
      <img src={gif} alt="Generated GIF" className="w-75 object-contain" />
      <button
        onClick={() => getGIF()}
        className="bg-amber-300 py-2 px-40 mb-2 rounded-md text-md font-bold cursor-pointer hover:bg-amber-400 transition-all duration-300 "
      >
        Generate
      </button>
    </div>
  );
};

export default Gif;
