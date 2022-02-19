import React, { useState } from 'react'
const Cart_item = () => {

     const [count, setCount] = useState(1);
    return (
        <>
            <div className="cart-wraper">

                <img src="img/dummy-image.png" alt="dummy-image"  />

                <div className="wraper-text">
                    <div className="first-text">
                        <span>Campus Sutra</span>
                        <span>500</span>
                    </div>
                    <div className="second-text">
                        <span>cart item name</span>
                        <div>
                            <span className='span1'>1000</span>
                            <span className='span2'>50%off</span>
                        </div>
                    </div>
                    <div className="btn-part">
                        <div>
                            <button className='btn-pm'  onClick={() => {setCount (count+ 1)}} >+</button>
                            <span>{count} </span>
                            <button className='btn-pm' onClick={() => {setCount (count - 1)}} disabled={count === 1}>--</button>
                        </div>
                        <span className='span3'>Remove</span>
                    </div>
                </div>
            </div></>
    )
}

export default Cart_item;