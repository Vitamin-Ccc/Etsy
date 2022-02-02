import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
    </>
  );
}

export default App;
