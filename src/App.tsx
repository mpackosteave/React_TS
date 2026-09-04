import { createContext, useState } from "react";
import "./App.css";
import Compteur from "./Components/Compteur";
import Stopwatch from "./Components/Stopwatch";

interface ThemeContextType {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const themeContext = createContext<ThemeContextType>({ theme:false , setTheme:() => { }})

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <>
      <themeContext.Provider value={{ theme, setTheme }}>
        <Stopwatch />
      <Compteur />
      </themeContext.Provider>
    </>
  );
}

export default App;
