import Navbar from "../Components/Navbar";

export default function About() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
            {/* NAVBAR */}
           <Navbar/>

            {/* CONTENU ABOUT */}
            <main className="max-w-5xl mx-auto px-6 py-20">
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full">Notre Philosophie</span>
                <h1 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight mt-6 mb-8">
                    Concevoir des objets intemporels pour un quotidien épuré.
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 leading-relaxed text-sm">
                    <p>
                        Fondée en 2024, AURA est née d'un constat simple : la profusion d'objets superflus étouffe notre espace de vie. Nous croyons en la puissance du minimalisme fonctionnel, où chaque produit est façonné avec une précision chirurgicale.
                    </p>
                    <p>
                        Nos ateliers sélectionnent exclusivement des matières premières durables et recyclables. Aucun logo ostentatoire, aucune finition inutile. Seule compte l'harmonie entre la forme, la matière et la fonction.
                    </p>
                </div>

                {/* IMAGE BANNIÈRE */}
                <div className="my-16 aspect-[21/9] bg-slate-100 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" alt="Atelier AURA" className="w-full h-full object-cover" />
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-12 text-center">
                    <div>
                        <p className="text-3xl font-light text-slate-900">100%</p>
                        <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Matériaux Durables</p>
                    </div>
                    <div>
                        <p className="text-3xl font-light text-slate-900">24/7</p>
                        <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Support Dédié</p>
                    </div>
                    <div>
                        <p className="text-3xl font-light text-slate-900">15+</p>
                        <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Pays Desserte</p>
                    </div>
                    <div>
                        <p className="text-3xl font-light text-slate-900">0</p>
                        <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Empreinte Plastique</p>
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