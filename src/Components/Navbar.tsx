import { createContext, useState } from "react";

interface ThemeContextType {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const themeContext = createContext<ThemeContextType>({
  theme: false,
  setTheme: () => {},
});

function Navbar() {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold tracking-widest uppercase text-slate-900"
          >
            AURA<span className="text-indigo-600">.</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide text-slate-600">
            <a
              href="/"
              className="text-slate-900 font-semibold border-b-2 border-indigo-600 pb-1"
            >
              Accueil
            </a>
            <a href="/shop" className="hover:text-slate-900 transition-colors">
              Boutique
            </a>
            <a href="/about" className="hover:text-slate-900 transition-colors">
              A Propos
            </a>
            <a
              href="/contact"
              className="hover:text-slate-900 transition-colors"
            >
              Contact
            </a>
            <a href="/faq" className="hover:text-slate-900 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-5">
            {/* Bouton Thème (Inactif) */}
            <button
              type="button"
              className="p-2.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all border border-slate-200"
              title="Changer le thème"
            >
              <svg
                className="w-4 h4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>

            {/* Bouton Panier avec Badge Absolu */}
            <button
              type="button"
              className="relative p-2.5 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all border border-slate-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                3
              </span>
            </button>
          </div>
        </div>
      </header>
    </themeContext.Provider>
  );
}

export default Navbar;
