import { Route, Routes } from 'react-router';
import './App.css';
import Categories from './pages/Categories';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/products" element={<Products/>} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
