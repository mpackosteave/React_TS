import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function ProductDetail() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* NAVBAR */}
      <Navbar />
      {/* DÉTAIL PRODUIT */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Galerie Images en Dur */}
          <div className="space-y-4">
            <div className="aspect-square bg-slate-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
                alt="Produit Vue 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-slate-100 border border-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop"
                  alt="Vignette 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-slate-100 border border-transparent hover:border-slate-400 transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=300&auto=format&fit=crop"
                  alt="Vignette 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-slate-100 border border-transparent hover:border-slate-400 transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=300&auto=format&fit=crop"
                  alt="Vignette 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Fiche Produit */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Audio / Accessoires
              </span>
              <h1 className="text-3xl font-light text-slate-900 mt-1">
                Casque Studio Minimalist
              </h1>
              <p className="text-2xl font-semibold text-slate-900 mt-4">
                249 €
              </p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Conçu pour les puristes du son. Structure en aluminium brossé,
              coussinets en cuir synthétique respirant et réduction active de
              bruit ambiant.
            </p>

            {/* Variantes en dur */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  Couleur
                </label>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-600 ring-2 ring-slate-200"
                  ></button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-slate-300 border-2 border-transparent hover:border-slate-400"
                  ></button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-amber-100 border-2 border-transparent hover:border-slate-400"
                  ></button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex space-x-4 pt-4 border-t border-slate-200">
              <button
                type="button"
                className="flex-1 py-4 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-indigo-600 transition-colors flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
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
                <span>Ajouter au panier</span>
              </button>
            </div>

            {/* Accordéon Informations */}
            <div className="border-t border-slate-200 pt-6 space-y-4 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="font-semibold text-slate-900 uppercase tracking-wider">
                  Livraison & Retours
                </span>
                <span className="text-slate-500">Expédié sous 24h</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="font-semibold text-slate-900 uppercase tracking-wider">
                  Garantie
                </span>
                <span className="text-slate-500">2 ans constructeur</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
