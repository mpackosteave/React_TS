import { Moon, ShoppingCart, Sun } from "lucide-react";
import { useTheme } from "../hooks/ThemeHook";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Boutique", path: "/shop" },
    { name: "A Propos", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];
  const { theme, handleThemeToggle } = useTheme();
  const [count, setCount] = useState(3);
  return (
    <header
      className={`sticky top-0 z-50 bg-whit/80 backdrop-blur-md border-b border-slate-200 ${theme ? "bg-black/90" : " text-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}

        <Link
          className="text-xl font-bold tracking-widest uppercase text-slate-900 "
          to="/"
        >
          AURA<span className="text-indigo-600">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide text-slate-600">
          {navLinks.map((link) => (
            <NavLink
            key={link.path}
            to={link.path}
              className={({isActive}) =>
                isActive ? "text-slate-900 font-semibold border-b-2 border-indigo-600 pb-1" : "hover:text-slate-900 transition-colors" 
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-5">
          {/* Bouton Thème (Inactif) */}
          <button
            type="button"
            onClick={handleThemeToggle}
            className="p-2.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all border border-slate-200"
          >
            {theme ? <Sun /> : <Moon />}
          </button>

          {/* Bouton Panier avec Badge Absolu */}
          <Link
            to="/cart"
            className="relative p-2.5 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all border border-slate-200"
          >
            <ShoppingCart />
            <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
              {count}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
