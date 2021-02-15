import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedCart = localStorage.getItem("cart@items");

      if (storagedCart) {
        setCart(JSON.parse(storagedCart));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function setCarts(newItem) {
    setCart((prev) => {
      return [...prev, newItem];
    });
    localStorage.setItem("cart@items", JSON.stringify([...cart]));
  }

  async function clearCart() {
    localStorage.clear();
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cartItems: cart, setCarts, clearCart, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext;
