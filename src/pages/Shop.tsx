import { useState } from 'react';
import Navbar from '../Components/Navbar';

const PRODUCTS = [
  { id: 1, name: 'Casque Studio Minimalist', category: 'Audio', price: 249, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Appareil Optique 35mm', category: 'High-Tech', price: 599, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&auto=format&fit=crop' },
  { id: 3, name: 'Carnet de Notes Cuir', category: 'Papeterie', price: 45, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Lampe de Bureau Architecte', category: 'Maison', price: 129, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop' },
  { id: 5, name: 'Enceinte Portative Béton', category: 'Audio', price: 180, image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop' },
  { id: 6, name: 'Montre Céramique Noir', category: 'Accessoires', price: 310, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop' },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Tous', 'Audio', 'High-Tech', 'Papeterie', 'Maison', 'Accessoires'];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* NAVBAR */}
      <Navbar/>

      {/* EN-TÊTE BOUTIQUE */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-slate-200 gap-6">
          <div>
            <h1 className="text-3xl font-light text-slate-900">Collection Permanente</h1>
            <p className="text-sm text-slate-500 mt-2">Des objets fonctionnels conçus pour durer.</p>
          </div>
          
          {/* BARRE DE RECHERCHE */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-slate-900"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* FILTRES PAR CATÉGORIE */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRILLE PRODUITS */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="group bg-white border border-slate-200 p-4 transition-all hover:border-slate-400">
                <div className="aspect-square bg-slate-100 overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{product.category}</span>
                <h2 className="text-sm font-medium text-slate-900 mt-1">{product.name}</h2>
                <div className="flex items-center justify-between mt-4 border-t border-slate-100 pt-3">
                  <span className="text-xs font-semibold text-slate-900">{product.price} €</span>
                  <button type="button" className="text-xs text-indigo-600 hover:text-slate-900 font-medium transition-colors">
                    Voir détails
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200">
            <p className="text-slate-500 text-sm">Aucun produit ne correspond à votre recherche.</p>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 AURA Inc. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-slate-900 transition-colors">CGV</a>
          </div>
        </div>
      </footer>
    </div>
  );
}