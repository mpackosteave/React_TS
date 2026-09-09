import { useTheme } from "../hooks/ThemeHook";

function Footer() {

    const theme = useTheme();

  return (
    <footer className={`border-t ${theme ? "" : "bg-slate-900 text-slate-500"}`}>
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2026 AURA Inc. Tous droits réservés.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-900 transition-colors">
            Mentions Légales
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            Politique de Confidentialité
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            CGV
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
