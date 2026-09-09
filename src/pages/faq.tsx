import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const FAQ_DATA = [
  {
    category: 'Commandes & Livraison',
    items: [
      { q: 'Quels sont les délais de livraison ?', a: 'Toutes les commandes sont préparées sous 24h ouvrées. La livraison standard prend entre 2 et 4 jours ouvrés en Europe.' },
      { q: 'Comment suivre l’acheminement de mon colis ?', a: 'Dès le départ de votre commande, un numéro de suivi unique vous est transmis par e-mail afin de suivre votre colis en temps réel.' },
      { q: 'Puis-je modifier ou annuler ma commande ?', a: 'Vous disposez d’une heure après la validation de la commande pour demander une modification ou une annulation auprès de notre support.' }
    ]
  },
  {
    category: 'Retours & Remboursements',
    items: [
      { q: 'Quelle est votre politique de retour ?', a: 'Vous disposez de 30 jours à compter de la réception de vos articles pour demander un retour gratuit. Les produits doivent être non utilisés et dans leur emballage d’origine.' },
      { q: 'Sous quel délai s’effectue le remboursement ?', a: 'Le remboursement est crédité sur le moyen de paiement utilisé lors de l’achat sous 5 à 7 jours ouvrés après réception du colis retour.' }
    ]
  },
  {
    category: 'Garanties & Support',
    items: [
      { q: 'Quelle est la durée de garantie des produits ?', a: 'Tous nos objets électroniques et accessoires sont couverts par une garantie constructeur de 2 ans.' }
    ]
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(toggleAccordion);
    
  };

  let globalCounter = 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* NAVBAR */}
      <Navbar/>

      {/* CONTENU FAQ */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-light text-slate-900">Foire Aux Questions</h1>
          <p className="text-sm text-slate-500 mt-2">Trouvez rapidement les réponses à vos interrogations.</p>
        </div>

        <div className="space-y-12">
          {FAQ_DATA.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-600 border-b border-slate-200 pb-2">
                {group.category}
              </h2>
              <div className="divide-y divide-slate-200 border-b border-slate-200">
                {group.items.map((item) => {
                  const currentIndex = globalCounter++;
                  const isOpen = openIndex === currentIndex;

                  return (
                    <div key={currentIndex} className="py-4">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(currentIndex)}
                        className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                      >
                        <span className="text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {item.q}
                        </span>
                        <svg
                          className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <p className="text-xs text-slate-600 leading-relaxed mt-2 pr-8 pt-1">
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <Footer/>
    
    </div>
  );
}