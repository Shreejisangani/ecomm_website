import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Searchbar from '../components/Searchbar';
const Product = () => {
    return (
        <>
            <Navigation />
            <Searchbar />
            <div className="container" >
                <div className="products">
                    <h1>Book</h1>
                    <div className="product-search">
                        <input type="text" placeholder='Search...' />
                        <button className='btn-apro'>Add Product</button>
                    </div>
                    <div className="product-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Data Source</th>
                                    <th>Query</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12</td>
                                    <td>IBSM Followup </td>
                                    <td>Data Source 1</td>
                                    <td>Teste</td>
                                    <td className='td-btn'><Link to='/edit' className='ed-link'><button className='btn-ed btn-editP'>Edit</button></Link><button className='btn-ed'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>IBSM Followup </td>
                                    <td>Data Source 2</td>
                                    <td>Teste</td>
                                    <td className='td-btn'><Link to='/edit' className='ed-link'><button className='btn-ed btn-editP'>Edit</button></Link><button className='btn-ed'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>IBSM Followup </td>
                                    <td>Data Source 2</td>
                                    <td>Teste</td>
                                    <td className='td-btn'><Link to='/edit' className='ed-link'><button className='btn-ed btn-editP'>Edit</button></Link><button className='btn-ed'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>IBSM Followup </td>
                                    <td>Data Source 1</td>
                                    <td>Teste</td>
                                    <td className='td-btn'><Link to='/edit' className='ed-link'><button className='btn-ed btn-editP'>Edit</button></Link><button className='btn-ed'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>IBSM Followup </td>
                                    <td>Data Source 1</td>
                                    <td>Teste</td>
                                    <td className='td-btn'><Link to='/edit' className='ed-link'><button className='btn-ed btn-editP'>Edit</button></Link><button className='btn-ed'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>24</td>
                                    <td>IBSM Followup </td>
                                    <td>Data Source 1</td>
                                    <td>Teste</td>
                                    <td className='td-btn'><Link to='/edit' className='ed-link'><button className='btn-ed btn-editP'>Edit</button></Link><button className='btn-ed'>Delete</button></td>
                                </tr>
                                <tr>
                                    <td>25</td>
                                    <td>IBSM Followup </td>
                                    <td>Data Source 2</td>
                                    <td>Teste</td>
                                    <td className='td-btn'><Link to='/edit' className='ed-link'><button className='btn-ed btn-editP'>Edit</button></Link><button className='btn-ed'>Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row-grouping">
                        <label>Rows Per Page:  </label>
                        <select>
                            <option value="5"> 5</option>
                            <option value="10"> 10</option>
                            <option value="50"> 50</option>
                            <option value="100"> 100</option>
                        </select>
                        <p>
                            <span>1</span>
                            - 
                            <span>7  </span>
                            of
                            <span>  7</span>
                        </p>
                        <ul class="next-prev-list">
                            <li class="disable"><a href="#">Previous<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg></a></li>
                            <li><a href="#">Next<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Product;