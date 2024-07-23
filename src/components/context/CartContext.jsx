import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  let addToCart = (product, quantity) => {
    // check if prod already exists in cart
    let checkProduct = cart.some((el) => {
      return el.id === product.id;
    });

    // if product exists, dont duplicate in cart, only modify quantity
    if (checkProduct) {
      let newArr = cart.map((el) => {
        if (el.id === product.id) {
          return { ...el, quantity: quantity };
        } else {
          return { el };
        }
      });

      setCart(newArr);
      localStorage.setItem("cart", JSON.stringify(newArr));
    } else {
      // if prod not in cart, just add new product to cart
      let newProd = { ...product, quantity: quantity };
      let newArr = [...cart, newProd];
      setCart(newArr);

      localStorage.setItem("cart", JSON.stringify(newArr));
    }
  };

  let getQuantity = (id) => {
    let desiredProd = cart.find((el) => {
      return el.id === id;
    });

    return desiredProd ? desiredProd.quantity : 1;
  };

  // delete item from cart
  let deleteById = (id) => {
    let newCart = cart.filter((el) => {
      return el.id !== id;
    });

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart))
  };

  let clearCart = () => {
    setCart([]);

    localStorage.removeItem("cart");
  };

  // Get cart total
  let getTotalPrice = () => {
    let total = cart.reduce((total, prod) => {
      return (total + prod.quantity * prod.unit_price);
    }, 0);

    return total;
  };

  const data = {
    addToCart,
    clearCart,
    cart,
    getQuantity,
    deleteById,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
