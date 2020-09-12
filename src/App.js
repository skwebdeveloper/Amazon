import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";
import Footer from "./Footer"
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Order from "./Order"
import "./App.css";


const promise = loadStripe("pk_test_51HPvaNF4eHbqkT3tZilYFUJyJXm0BUOyGyRaU2CSVw0G3JVrKg2rxJbbwP4lsLJfaeZdkjOIqvuuBuBH5gfHP89g00sDgE7aF9")

function App() {
const [{}, dispatch] = useStateValue();
useEffect(() =>{
// Only once load when user load in 

auth.onAuthStateChanged(authUser =>{
  if(authUser){
dispatch({
  type: "SET_USER",
  user: authUser
})
  }else{
dispatch({
  type : "SET_USER",
  user: null
})
  }
})
}, [])




  return (
    <React.Fragment>
      <Router>
        <div className="app">

          <Switch>
          <Route path="/order">
          <Order />
            </Route>
          <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
            </Route>
          <Route path="/login">
          <Login />
            </Route>
            <Route path="/checkout">
            
          <Header />
              <Checkout />
              <Footer /> 
            </Route>
            <Route path="/">
            
          <Header />
              <Home />
           <Footer /> 
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
