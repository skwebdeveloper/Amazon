import React from 'react'
import "./checkoutproduct.css";
import { useStateValue } from "./StateProvider"


function CheckoutProduct(props, hideButton) {
const [{basket}, dispatch] = useStateValue();



const removeFromBasket = () =>{
    // REmove through ID
    dispatch({
 type: 'REMOVE_FROM_BASKET',
 id: props.id
    })
}

    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct__image" alt ="image" src={props.image} />
     <div className="checkoutproduct__info">
     <p className="checkoutproduct__title">{props.title}</p>
     <p className="checkoutproduct__price">
         <small>$</small>
         <strong>{props.price}</strong>
     </p>
     <div className="checkoutproduct__rating">
     <p>{props.rating}</p>
     </div>
     {!hideButton &&  (
     <button onClick={removeFromBasket}>Remove from cart</button>
     )}
     </div>
        </div>
    )
}

export default CheckoutProduct
