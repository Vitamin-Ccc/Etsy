import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Products = (props) => {
  const [sellerProducts, setSellerProducts] = useState([]);

  useEffect(()=>{
    getSellerProducts()
  },[])

  const getSellerProducts = async ()=>{
    try {
      let res = await axios.get('/api/products')
      console.log(res)
      setSellerProducts(res.data)
    } catch (error){
      alert('error occurred getSellerProducts')
    }
  };

  return (
    <div>
      <h1>Products Page</h1>
    </div>
  );
};

export default Products;