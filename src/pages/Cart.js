import React from 'react'
import Cart_item from '../components/Cart_item';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Searchbar from '../components/Searchbar';

const Cart = () => {
  return (
    <div>
      <Navigation/>
      <Searchbar/>
      <div className="container">
        <div className="cart-product">
          <h1>Cart Page</h1>
          <div className="total">
            <p>My Shoping Bag (6 items)</p>
            <span>Total Price: 3000</span>
          </div>
          <Cart_item/>
          <Cart_item/>
          <Cart_item/>
          <Cart_item/>
          <Cart_item/>
          <Cart_item/>
          <div className="btn-place">
          <button className='btn-register'>Place Order</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart;