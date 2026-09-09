
// import { useContext, useEffect, useState } from "react";

//   type Theme =  'light' | 'dark';

//   interface ThemeContext {
//     theme : Theme
//     toggleTheme : () => void;
//   }

// const ThemeContext = useContext<ThemeContext>(undefined!);


// export function ThemeProdvider () {

//   const [theme, setTheme] = useState<Theme>(() => {
//     const storedTheme = localStorage.getItem('theme') as Theme | null
//     if (storedTheme == 'light' || storedTheme == "dark") {
//       return storedTheme
//     }
//     const prefresDArk = window.matchMedia('(prefres-color-schema: dark)').matches;
//     return prefresDArk ? "dark" : "light"
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.dataset.theme = theme;

//     localStorage.setItem('theme', theme)
//   })

//   const toggleTheme = () =>{
//     setTheme((preTheme) => (preTheme === "light" ? "dark" : "light"))
//   }

//   return (
//     <ThemeContext.Privider value={{theme,toggleTheme}}>
//       {children}
//     </ThemeContext.Privider>
//   )
// }










import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  handleThemeToggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(false); // true for dark mode, false for light mode
  localStorage.setItem('theme', theme)

  const handleThemeToggle = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        handleThemeToggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}