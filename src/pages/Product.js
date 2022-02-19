import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Searchbar from '../components/Searchbar';
const Product = () => {
  return (
    <>
        <Navigation/>
        <Searchbar/>
        <div className="container" style={{height: 1000}}>
            <div className="products">
                <h1>Product Page</h1>
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
            </div>
        </div>
        <Footer/>

    </>
  )
}

export default Product;