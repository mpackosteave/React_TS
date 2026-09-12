import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useCart } from "../hooks/CartContext";

function Home() {
  const { dispatch} = useCart();
  const productCards = [
    {
      id: 1,
      name: "Casque Studio Minimalist",
      category: "Accessoires / Audio",
      price: 249,
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: 2,
      name: "Appareil Optique 35mm",
      category: "High-Tech",
      price: 599,
      imageUrl:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop",
      isNew: false,
    },
    {
      id: 3,
      name: "Essence Botanique 50ml",
      category: "Soin / Beauté",
      price: 85,
      imageUrl:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800&auto=format&fit=crop",
      isNew: false,
    },
    {
      id: 4,
      name: "Carnet de Notes Cuir",
      category: "Papeterie",
      price: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-white border-b border-slate-200 overflow-hidden py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full inline-block">
              Nouvelle Collection 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 leading-tight">
              L'élégance pure dans le détail.
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-lg">
              Conception minimaliste, matériaux d'exception et finitions faites
              à la main. Découvrez notre sélection d'objets du quotidien
              réinventés.
            </p>
            <div className="pt-4 flex items-center space-x-4">
              <a
                href="#"
                className="bg-slate-900 text-white text-sm font-medium px-8 py-3.5 rounded-none hover:bg-indigo-600 transition-colors"
              >
                Découvrir la collection
              </a>
              <a
                href="#"
                className="text-slate-600 text-sm font-medium px-6 py-3.5 border border-slate-300 hover:border-slate-900 transition-colors"
              >
                En savoir plus
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-4/5 bg-slate-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
                alt="Produit vedette"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATALOGUE PRODUITS (Cartes avec Boutons d'Action) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Catalogue
            </h2>
            <p className="text-2xl font-light text-slate-900 mt-1">
              Produits Sélectionnés
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm font-medium text-slate-500">
            <button className="text-slate-900 font-semibold border-b border-slate-900 pb-0.5">
              Tous
            </button>
            <button className="hover:text-slate-900 transition-colors">
              Accessoires
            </button>
            <button className="hover:text-slate-900 transition-colors">
              Mobilier
            </button>
            <button className="hover:text-slate-900 transition-colors">
              High-Tech
            </button>
          </div>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Carte Produit 1 */}

          {productCards.map((product) => (
          
            <div key={product.id} className="group flex flex-col justify-between">
              <div>
                <div className="relative aspect-square bg-slate-100 overflow-hidden mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      type="button"
                      className="p-2 bg-white/90 text-slate-700 hover:text-slate-900 rounded-full shadow-sm hover:bg-white transition-colors"
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-sm font-medium text-slate-900">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {product.price} €
                  </p>
                </div>
              </div>
              <button
              onClick={() => dispatch({type: "add_item", payload: product})}
                type="button"
                className="w-full py-2.5 border border-slate-900 text-slate-900 text-xs font-semibold uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center space-x-2"
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
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
