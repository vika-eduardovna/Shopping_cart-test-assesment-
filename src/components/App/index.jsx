import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import products_list from '../../services/products.json';
import Layout from '../Layout';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Blog from '../../pages/Blog';
import Contact from '../../pages/Contact';
import CartPage from '../../pages/CartPage/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const App = () => {
  const [filter, setFilter] = useState('');
  const searchText = e => setFilter(e.target.value);

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState(products_list);
  const productsBySearch = products.filter(item => {
    return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  });


  const addToCart = (title, price, description) => {
    const target = orders.find(order => order.title === title);
    if (target) {
      target.count++;
      setOrders([...orders]);
    } else {
      setOrders([...orders, {
        id: Date.now(),
        title, price, description,
        count: 1
      }])
    }
  };


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout
          orders={orders}
          filter={filter}
          searchText={searchText} />}>
          <Route index element={<Home
            addToCart={addToCart}
            productsBySearch={productsBySearch} />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<CartPage orders={orders} />} />
        </Route>

      </Routes>
    </>
  );
};

export default App;