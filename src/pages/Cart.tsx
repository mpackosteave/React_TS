import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useCart } from "../hooks/CartContext";

export default function Cart() {
  const { cart, dispatch, subtotal,totalttc,taxRate } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENU PANIER */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-light text-slate-900 mb-2">
          Votre Panier
        </h1>
        <p className="text-sm text-slate-500 mb-12">
          Vous avez {cart.items.length} articles dans votre commande.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Liste des articles */}
          <div className="lg:col-span-2 divide-y divide-slate-200 border-t border-b border-slate-200">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="py-6 flex items-center justify-between space-x-4"
              >
                <div className="flex items-center space-x-6">
                  <img
                    src={item.imageUrl}
                    alt="Casque Studio"
                    className="w-20 h-20 object-cover bg-slate-100"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-slate-900">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {item.category}
                    </p>
                    <p className="text-xs font-semibold text-slate-900 mt-2">
                      {item.price * item.quantity} €
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center border border-slate-300">
                    <button
                      onClick={() =>
                        dispatch({
                          type: "decrement_item",
                          payload: { id: item.id },
                        })
                      }
                      type="button"
                      className="px-3 py-1 text-xs text-slate-600 hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-medium text-slate-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "increment_item",
                          payload: { id: item.id },
                        })
                      }
                      type="button"
                      className="px-3 py-1 text-xs text-slate-600 hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "remove_item",
                        payload: { id: item.id },
                      })
                    }
                    type="button"
                    className="text-slate-400 hover:text-red-600 transition-colors"
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Récapitulatif de Commande */}
          <div className="bg-white p-8 border border-slate-200 h-fit space-y-6">
            <h2 className="text-base font-semibold text-slate-900 border-b border-slate-200 pb-4">
              Résumé de la commande
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-500">
                <span>Sous-total: </span>
                <span className="font-medium text-slate-900">{subtotal} €</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Livraison</span>
                <span className="font-medium text-slate-900">Offerte</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Taxes estimées:</span>
                <span className="font-medium text-slate-900">{taxRate}%</span>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-4 flex justify-between items-center text-base font-semibold text-slate-900">
              <span>Total HT</span>
              <span>{totalttc} €</span>
            </div>
            <button
              type="button"
              className="w-full py-3.5 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-indigo-600 transition-colors"
            >
              Passer la commande
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
