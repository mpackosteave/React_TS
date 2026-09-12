// import { createContext, useContext, useEffect, useReducer } from "react";

// type Product = {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   imageUrl: string;
// };

// type CartItem = Product & { quantity: number };

// type CartState = {
//   items: CartItem[];
// };

// type CartAction =
//   | { type: "add_item"; payload: Product }
//   | { type: "remove_item"; payload: { id: number } }
//   | { type: "increment_item"; payload: { id: number } }
//   | { type: "decrement_item"; payload: { id: number } };

// interface CartContextType {
//   cart: CartState;
//   dispatch: React.Dispatch<CartAction>;
//   subtotal: number;
//   tax: number;
//   totalht: number;
//   totalttc: number;
//   taxRate: number;
// }

// const CartContext = createContext<CartContextType>(undefined!);

// export function CartProvider({ children }: { children: React.ReactNode }) {




//   function cartReducer(cart: CartState, action: CartAction) {
//     switch (action.type) {
//       case "add_item":
//         if (cart.items.some((item) => item.id === action.payload.id)) {
//           return cart;
//         }
//         return { items: [...cart.items, { ...action.payload, quantity: 1 }] };

//       case "remove_item":
//         return {
//           items: [
//             ...cart.items.filter((item) => item.id !== action.payload.id),
//           ],
//         };
//       case "increment_item":
//         return {
//           items: cart.items.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item,
//           ),
//         };
//       case "decrement_item":
//         return {
//           items: cart.items.map((item) =>
//             item.id === action.payload.id && item.quantity > 1
//               ? { ...item, quantity: item.quantity - 1 }
//               : item,
//           ),
//         };
//       default:
//         return cart;
//     }
//   }

//   const [cart, dispatch] = useReducer(
//     cartReducer,
//     { items: [] },
//     (initialState) => {
//       const savedItems = localStorage.getItem("aura-produit");

//       if (savedItems) {
//         return JSON.parse(savedItems);
//       }

//       return initialState;
//     }
    
//   );
//     useEffect(() => {
//     localStorage.setItem("card-produit", JSON.stringify(cart));
//   }, [cart]);
//     const subtotal = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
   

//   const taxRate = 0.1925;
//   const tax = subtotal * taxRate;

//   const totalht = subtotal;
//   const totalttc = subtotal * tax;

  

//   return (
//     <CartContext.Provider value={{ cart, dispatch,subtotal,tax,totalht,totalttc,taxRate }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// }












import { createContext, useContext, useEffect, useReducer } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
};

type CartItem = Product & { quantity: number };

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "add_item"; payload: Product }
  | { type: "remove_item"; payload: { id: number } }
  | { type: "increment_item"; payload: { id: number } }
  | { type: "decrement_item"; payload: { id: number } };

interface CartContextType {
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
  subtotal: number;
  tax: number;
  totalht: number;
  totalttc: number;
  taxRate: number;
}

const CartContext = createContext<CartContextType>(undefined!);

export function CartProvider({ children }: { children: React.ReactNode }) {
  function cartReducer(cart: CartState, action: CartAction): CartState {
    switch (action.type) {
      case "add_item":
        if (cart.items.some((item) => item.id === action.payload.id)) {
          return cart;
        }

        return {
          items: [
            ...cart.items,
            {
              ...action.payload,
              quantity: 1,
            },
          ],
        };

      case "remove_item":
        return {
          items: cart.items.filter(
            (item) => item.id !== action.payload.id
          ),
        };

      case "increment_item":
        return {
          items: cart.items.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };

      case "decrement_item":
        return {
          items: cart.items.map((item) =>
            item.id === action.payload.id && item.quantity > 1
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          ),
        };

      default:
        return cart;
    }
  }

  // 🔹 Load cart from localStorage when the app starts
  const [cart, dispatch] = useReducer(
    cartReducer,
    { items: [] },
    (initialState) => {
      const savedCart = localStorage.getItem("aura-cart");

      if (savedCart) {
        return JSON.parse(savedCart);
      }

      return initialState;
    }
  );

  // 🔹 Save cart every time it changes
  useEffect(() => {
    localStorage.setItem("aura-cart", JSON.stringify(cart));
  }, [cart]);

  // 🔹 Calculate subtotal
  const subtotal = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Example tax rate
  const taxRate = 0.1925;

  const tax = subtotal * taxRate;

  const totalht = subtotal;

  const totalttc = subtotal + tax;

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        subtotal,
        tax,
        totalht,
        totalttc,
        taxRate
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
