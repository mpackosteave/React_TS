import Navbar from "../Components/Navbar";

export default function Cart() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
            {/* NAVBAR */}
           <Navbar/>

            {/* CONTENU PANIER */}
            <main className="max-w-7xl mx-auto px-6 py-16">
                <h1 className="text-3xl font-light text-slate-900 mb-2">Votre Panier</h1>
                <p className="text-sm text-slate-500 mb-12">Vous avez 3 articles dans votre commande.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Liste des articles */}
                    <div className="lg:col-span-2 divide-y divide-slate-200 border-t border-b border-slate-200">

                        {/* Article 1 */}
                        <div className="py-6 flex items-center justify-between space-x-4">
                            <div className="flex items-center space-x-6">
                                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop" alt="Casque Studio" className="w-20 h-20 object-cover bg-slate-100" />
                                <div>
                                    <h3 className="text-sm font-medium text-slate-900">Casque Studio Minimalist</h3>
                                    <p className="text-xs text-slate-400 mt-1">Noir Mat / Audio</p>
                                    <p className="text-xs font-semibold text-slate-900 mt-2">249 €</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center border border-slate-300">
                                    <button type="button" className="px-3 py-1 text-xs text-slate-600 hover:bg-slate-100">-</button>
                                    <span className="px-3 py-1 text-xs font-medium text-slate-900">1</span>
                                    <button type="button" className="px-3 py-1 text-xs text-slate-600 hover:bg-slate-100">+</button>
                                </div>
                                <button type="button" className="text-slate-400 hover:text-red-600 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Article 2 */}
                        <div className="py-6 flex items-center justify-between space-x-4">
                            <div className="flex items-center space-x-6">
                                <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=300&auto=format&fit=crop" alt="Appareil Photo" className="w-20 h-20 object-cover bg-slate-100" />
                                <div>
                                    <h3 className="text-sm font-medium text-slate-900">Appareil Optique 35mm</h3>
                                    <p className="text-xs text-slate-400 mt-1">Argent / High-Tech</p>
                                    <p className="text-xs font-semibold text-slate-900 mt-2">599 €</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center border border-slate-300">
                                    <button type="button" className="px-3 py-1 text-xs text-slate-600 hover:bg-slate-100">-</button>
                                    <span className="px-3 py-1 text-xs font-medium text-slate-900">1</span>
                                    <button type="button" className="px-3 py-1 text-xs text-slate-600 hover:bg-slate-100">+</button>
                                </div>
                                <button type="button" className="text-slate-400 hover:text-red-600 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Article 3 */}
                        <div className="py-6 flex items-center justify-between space-x-4">
                            <div className="flex items-center space-x-6">
                                <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=300&auto=format&fit=crop" alt="Carnet Cuir" className="w-20 h-20 object-cover bg-slate-100" />
                                <div>
                                    <h3 className="text-sm font-medium text-slate-900">Carnet de Notes Cuir</h3>
                                    <p className="text-xs text-slate-400 mt-1">Brun / Papeterie</p>
                                    <p className="text-xs font-semibold text-slate-900 mt-2">45 €</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center border border-slate-300">
                                    <button type="button" className="px-3 py-1 text-xs text-slate-600 hover:bg-slate-100">-</button>
                                    <span className="px-3 py-1 text-xs font-medium text-slate-900">1</span>
                                    <button type="button" className="px-3 py-1 text-xs text-slate-600 hover:bg-slate-100">+</button>
                                </div>
                                <button type="button" className="text-slate-400 hover:text-red-600 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Récapitulatif de Commande */}
                    <div className="bg-white p-8 border border-slate-200 h-fit space-y-6">
                        <h2 className="text-base font-semibold text-slate-900 border-b border-slate-200 pb-4">Résumé de la commande</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between text-slate-500">
                                <span>Sous-total</span>
                                <span className="font-medium text-slate-900">893 €</span>
                            </div>
                            <div className="flex justify-between text-slate-500">
                                <span>Livraison</span>
                                <span className="font-medium text-slate-900">Offerte</span>
                            </div>
                            <div className="flex justify-between text-slate-500">
                                <span>Taxes estimées</span>
                                <span className="font-medium text-slate-900">178.60 €</span>
                            </div>
                        </div>
                        <div className="border-t border-slate-200 pt-4 flex justify-between items-center text-base font-semibold text-slate-900">
                            <span>Total HT</span>
                            <span>893 €</span>
                        </div>
                        <button type="button" className="w-full py-3.5 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-indigo-600 transition-colors">
                            Passer la commande
                        </button>
                    </div>
                </div>
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

