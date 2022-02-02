import { Select, Row, Col } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
const { Option } = Select;

const Categories = () => {
  const [categories, setCategories] = useState(null)
  const [category, setCategory] = useState(null)
  const [categoryProducts, setCategoryProducts] = useState(null)

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    try {
      let res = await axios.get('/api/categories')
      setCategories(res.data)
    } catch (err) {
      alert('error in getCategories')
    }
  }

  const onChange = async (value) => {
    console.log(`selected ${value}`);
    try {
      setCategory(value)
      let res = await axios.get(`/api/categories/${value}`)
      console.log(res.data.category)
      setCategoryProducts(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const onSearch = (val) => {
    console.log('search:', val);
  }

  const renderSelect = () => {
    if (!categories) {
      return (
        <Select style={{ width: 120 }} loading />
      )
    }
    else {
      return (
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a category"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {categories.map(c => <Option key={c} value={c}>{c}</Option>)}
        </Select>
      )
    }
  }

  const renderCategory = () => {
    console.log("categoryProducts", categoryProducts)
    if (!categoryProducts) {
      return <p>Select a category</p>
    }
    return (
      <div>
        <Row>
          {categoryProducts.map(cp => {
            return (
              <Col sm={12} md={8} lg={4}>
                <ProductCard {...cp} />
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }


  return (
    <div>
      <h1>Categories Page</h1>
      {renderSelect()}
      {renderCategory()}
    </div>
  )
}

export default Categories;