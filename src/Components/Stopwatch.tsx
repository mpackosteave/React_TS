import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { themeContext } from "../App";

function Stopwatch() {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  const timeRef = useRef<number | null>(null);
  const { theme, setTheme } = useContext<{theme: boolean,setTheme: React.Dispatch<React.SetStateAction<boolean>>}>( themeContext );

  useEffect(() => {
    if (!running) return;

    timeRef.current = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);

    return () => {
      if (timeRef.current !== null) {
        clearInterval(timeRef.current);
        timeRef.current = null;
      }
    };
  }, [running]);

  const toggleChrono = (): void => {
    setRunning((running) => !running);
  };

  const resetChrono = () => {
    toggleChrono();
    setTime(0);
  };

  const formatedTime = useMemo((): string => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const centiemeseconds = Math.floor((time / 10) % 100);

    const format = (value: number): string => value.toString().padStart(2, "0");

    return `${format(minutes)}:${format(seconds)}:${format(centiemeseconds)}`;
  }, [time]);

  return (
    <div className={`flex flex-col items-center justify-center p-6 shadow-md max-w-sm mx-auto border border-gray-100 ${theme ? 'bg-gray-700' : 'bg-amber-300' }`}>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Chronomètre</h2>

      {/* Affichage du temps en monospace */}
      <div className="text-4xl font-mono font-bold text-gray-900 bg-gray-100 px-6 py-4 rounded-lg mb-6 tracking-wider">
        {formatedTime}
      </div>

      {/* Zone des boutons d'action */}
      <div className="flex gap-4">
        {/* Bouton dynamique Start / Pause */}
        <button
          type="button"
          onClick={toggleChrono}
          className={`px-5 py-2.5 rounded-lg font-semibold text-white transition-colors duration-200 ${running ? "bg-orange-500 hover:bg-orange-600" : "bg-green-500 hover:bg-green-600"}`}
        >
          {running ? "Pause" : "Start"}
        </button>

        {/* Bouton Réinitialiser */}
        <button
          type="button"
          onClick={resetChrono}
          className="px-5 py-2.5 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200"
        >
          Réinitialiser
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
