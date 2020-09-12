import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt="Amazon Banker"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
  
      <div>
      <h5>Hye, {user?.email}</h5>
        <h5 className="checkout__title">Your Basket</h5>
              {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>  
          </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
