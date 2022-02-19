import React from 'react'

const Product_grid = () => {
    return (
        <>
            <div className="grid-side">
                <img src="img/dummy-image.png" alt="dummy-image" />
                <div className="grid-title">
                    <h2>Product Title</h2>
                    <span>lorem</span>
                </div>
                <div className="grid-desc">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi sequi praesentium dolorem sed ut tempore reiciendis similique. Minus, molestiae!</span>
                </div>
                <div className="mrp">
                    <span>MRP </span>
                    <span className='span'>&#8377; 1000</span>
                    <span className='span-off'> 20% off</span>
                </div>
                <span className='gridprice'>&#8377; 800</span>
                <button className='btn-addcart'>ADD TO CART</button>
            </div>
        </>
    )
}

export default Product_grid;