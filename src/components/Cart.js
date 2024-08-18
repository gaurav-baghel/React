import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import {clearCart} from "../utils/cartSlice"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }
  
  return (
    <div className="w-6/12 m-auto text-center ">
      <h1 className="font-bold p-2 m-2 text-2xl">Cart</h1>

      <div className="justify-between flex m-2 p-2 rounded-md shadow-md">
        <span className="font-bold justify-center p-2 shadow-sm rounded-md">Items ({cartItems.length})</span>
        <button className="font-bold text-red-500 bg-white rounded-md shadow-md p-2 hover:bg-red-400" onClick={handleClearCart}>Clear cart 🗑️</button>
      </div>

      {cartItems.length === 0 && <div className="p-4 my-8 text-gray-500"><h1 className="font-bold text-2xl ">Your cart is empty</h1><h4>You can go to home page to view more restaurants</h4></div>}

      <div className="m-4 p-4">
        <ItemList items={cartItems}/>
      </div>
    </div>
  );
};

export default Cart;
