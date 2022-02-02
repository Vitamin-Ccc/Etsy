import { Col, Row, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BuyerProductCard from "../components/BuyerProductCard";

const { Option } = Select;

const Home = () => {
  const [sellers, setSellers] = useState(null);
  const [buyers, setBuyers] = useState(null);
  const [buyerProducts, setBuyerProducts] = useState(null);

  useEffect(() => {
    getSellers();
  }, []);

  const getSellers = async () => {
    let res = await axios.get('/api/sellers')
    setSellers(res.data)
  }

  const onChange = async (value) => {
    let res = await axios.get(`/api/sellers/${value}`)
    setBuyers(res.data)
  }

  const onBuyerChange = async (value) => {
    let res = await axios.get(`/api/buyers/${value}`)
    setBuyerProducts(res.data)
  }

  const renderSellerSelect = () => {
    if(!sellers) return <Select loading />
    return(
      <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a Seller"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {sellers.map(s => <Option key={s.id} value={s.id}>{s.name}</Option>)}
        </Select>
    )
  }

  const renderBuyerSelect = () => {
    if(!sellers) return <Select />
    if(!buyers) return <Select style={{ width: 200 }}/>
    return(
      <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a Buyer"
          optionFilterProp="children"
          onChange={onBuyerChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {buyers.map(b => <Option key={b.id} value={b.id}>{b.name}</Option>)}
        </Select>
    )
  }

  const renderBuyerProducts = () => {
    if (!buyerProducts) {
      return <p>No buyer products</p>
    }
    return (
      <div>
        <Row>
          {buyerProducts.map(bp => {
            return (
              <Col sm={12} md={8} lg={4}>
                <BuyerProductCard {...bp} />
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }

  return (
    <>
      <h1>Find Products</h1>
      <h3>Seller</h3>
      {renderSellerSelect()}
      <h3>Buyer</h3>
      {renderBuyerSelect()}
      <h3>Buyer Products</h3>
      {renderBuyerProducts()}
    </>
  )
}

export default Home;