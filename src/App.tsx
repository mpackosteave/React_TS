import { createContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetails";
import Faq from "./pages/faq";
import Shop from "./pages/Shop";
// import Compteur from "./Components/Compteur";
// import Stopwatch from "./Components/Stopwatch";
// import Costom from "./Components/useCostomeHooks";

interface ThemeContextType {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const themeContext = createContext<ThemeContextType>({
  theme: false,
  setTheme: () => {},
});

function App() {
  // const [theme, setTheme] = useState<boolean>(true);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="Cart" element={<Cart />}></Route>
          <Route path="Product" element={<ProductDetail />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="faq" element={<Faq />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  {
    /* <themeContext.Provider value={{ theme, setTheme }}>
    <Stopwatch />
  <Compteur />
  </themeContext.Provider>
  <Costom/> */
  }
}

export default App;
