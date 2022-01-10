import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Table, Divider } from 'antd';

const columns = [
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
];

const Products = (props) => {
  const [sellerProducts, setSellerProducts] = useState([]);

  useEffect(() => {
    getSellerProducts()
  }, [])

  const normalizeData = (data)=>{
    let ids = data.map(t => t.seller_id)
    let uniqueIds = [... new Set(ids)]

    let normalizedData = uniqueIds.map(id =>{
      let products = data.filter(d=>d.seller_id === id)
      let filterProducts = products.map(p=>{
        return {key: p.id, description: p.description, price: "$" + p.price.toFixed(2), category: p.category}
      })
      return {
        name: products[0].name,
        email: products[0].email,
        products: filterProducts
      }
    })
    return normalizedData;
  };

  const getSellerProducts = async () => {
    try {
      let res = await axios.get('/api/products')
      console.log(res.data)
      let normalizedData = normalizeData(res.data)
      setSellerProducts(normalizedData)
    } catch (error) {
      alert('error occurred getSellerProducts')
    }
  }

  const renderSellerProducts = () => {
    return sellerProducts.map((s) => {
      return (
        <div>
          <div>
            <Card title={s.name} style={{ width: 300, marginBottom: "20px" }}>
              {s.email}
            </Card>
            <Table columns={columns} dataSource={s.products} />
          </div>
          <Divider orientation="left" />
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Products Page</h1>
      <div>
        {renderSellerProducts()}
      </div>
    </div>
  );
};

export default Products;