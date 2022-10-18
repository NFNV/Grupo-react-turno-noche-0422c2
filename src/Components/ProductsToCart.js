import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/shoppingReducer";
import Products from "./Products";



const ProductsToCart = () => {
    const [state, dispach] = useReducer(shoppingReducer, shoppingInitialState);
  
    const { products, cart } = state;
  
    const addToCart = (id) => {
      console.log(id);
      dispach({ type: TYPES.ADD_TO_CART, payload: id });
    };
     
    return (
      <>
        <div className="box-grid-responsive">
        {products.map((product) => (
          <Products key={products.id} data={product} addToCart={addToCart} />
        ))}
      </div>
      </>
    );
  };
  export default ProductsToCart;
  