import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navigation from './components/Navigation';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Edit from './pages/Edit';
// import Searchbar from './components/Searchbar';

function App() {
  return (
    <>
      <Router>
          {/* <Navigation/> */}
          {/* <Searchbar/> */}
          <Routes>
            <Route path='/' element={<Home/>} exact ></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/register' element={<Register/>} ></Route>
            <Route path='/cart' element={<Cart/>} ></Route>
            <Route path='/edit' element={<Edit/>} ></Route>
            <Route path='/product' element={<Product/>} ></Route>

          </Routes>
      </Router>
    </>
  );
}

export default App;
