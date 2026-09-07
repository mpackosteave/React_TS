import Navbar from "../Components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* NAVBAR */}
      <Navbar/>

      {/* FORMULAIRE & INFOS CONTACT */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-light text-slate-900">Entrer en Contact</h1>
              <p className="text-slate-500 text-sm mt-2">Une question sur une commande ou un produit ? Écrivez-nous.</p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Nom Complet</label>
                <input type="text" placeholder="Jean Dupont" className="w-full px-4 py-3 bg-white border border-slate-300 text-sm focus:outline-none focus:border-slate-900" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Adresse E-mail</label>
                <input type="email" placeholder="jean.dupont@example.com" className="w-full px-4 py-3 bg-white border border-slate-300 text-sm focus:outline-none focus:border-slate-900" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Message</label>
                <textarea rows="5" placeholder="Votre message..." className="w-full px-4 py-3 bg-white border border-slate-300 text-sm focus:outline-none focus:border-slate-900 resize-none"></textarea>
              </div>
              <button type="button" className="px-8 py-3.5 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-indigo-600 transition-colors">
                Envoyer le Message
              </button>
            </form>
          </div>

          <div className="bg-white p-10 border border-slate-200 flex flex-col justify-between space-y-8">
            <div>
              <h2 className="text-lg font-medium text-slate-900 mb-6">Informations Majeures</h2>
              <div className="space-y-6 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Siège Social</p>
                  <p className="mt-1">42 Avenue des Champs-Élysées</p>
                  <p>75008 Paris, France</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Support Client</p>
                  <p className="mt-1">contact@aura-studio.com</p>
                  <p>+33 1 42 68 00 00</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-xs uppercase tracking-wider">Horaires d'ouverture</p>
                  <p className="mt-1">Lundi - Vendredi : 09:00 - 18:00</p>
                  <p>Samedi - Dimanche : Fermé</p>
                </div>
              </div>
            </div>
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