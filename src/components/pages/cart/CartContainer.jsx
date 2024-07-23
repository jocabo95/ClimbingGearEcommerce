import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "./Cart";
import { ShipmentContext } from "../../context/ShipmentContext";


const CartContainer = () => {

  let { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
  const {selectedCityShipmentInfo} = useContext(ShipmentContext)
  let total = getTotalPrice();

  const data = {
    cart,
    clearCart,
    deleteById,
    total,
    selectedCityShipmentInfo
  };

  return <Cart data={data} />;
};

export default CartContainer;
