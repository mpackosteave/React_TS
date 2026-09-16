import { clsx } from "clsx";
import { useState } from "react";

const ColorGame = () => {
  const [color, setColors] = useState<string>("red");
  const colors = ["blue", "green", "yellow", "violet", "pink"];
  const [mood,setMood] = useState<boolean>(true)

  return (
    <div className={clsx("flex flex-col items-center justify-center min-h-screen bg-red-500" , mood ? "bg-slate-100" : "bg-slate-700")}>
      <h1 className="text-3xl font-bold mb-5">Color game</h1>

      <div>
        <div className={`w-full h-20 bg-${color}-500 mb-5`}></div>

        <div>
          {colors.map((c) => (
            <span
              key={c}
              className={`w-12 h-12 bg-${c}-500 inline-block cursor-pointer`}
              onClick={() => setColors(c)}
            ></span>
          ))}
        </div>

        <button onClick={() => setMood(!mood)} className={`rounded-2xl cursor-pointer ${mood ? "bg-slate-500": "bg-slate-100"}`}>{mood ? "white" : "Dark"}</button>

      </div>
    </div>
  );
};

export default ColorGame;
