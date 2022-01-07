import { Route, Routes } from 'react-router';
import './App.css';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/products" element={<Products/>} />
    </Routes>
  );
}

export default App;
