import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const BuyerProductCard = (props) => {
  const { price, description, seller_name } = props

  return (
    <Card
      style={{ width: 200 }}
      cover={<img src="http://cdn.shopify.com/s/files/1/1423/1710/products/4521329338293_large.jpg?v=1631766595" />}
      actions={[
        <p>
          {description}
        </p>
      ]}
    >
      <Meta
        title={`$${price}`}
        description={`Seller: ${seller_name}`}
      />
    </Card>
  )
}

export default BuyerProductCard;