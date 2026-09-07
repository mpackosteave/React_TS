import { useCallback, useContext, useState } from "react";
import { themeContext } from "../App";

const Compteur = () => {
  const [count, setCount] = useState<number>(0);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const { theme } = useContext<{
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  }>(themeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${theme ? "bg-green-500" : "bg-blue-300"}`}
    >
      <h1>Compteur</h1>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={decrement}
      >
        -
      </button>
      <span className="text-2xl font-bold">{count}</span>
      <button
        className="bg-green-700 text-white px-4 py-2 rounded"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
  // todo: documantation sur le hooks personalisable et fais un example de project

};

export default Compteur;
