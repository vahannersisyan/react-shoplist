import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import ShopContext from '../../context/shop_context';

import ShopItem from './shop_item';
import ShopHeader from './shop_header';

const ShopList = () => {
  const { shopItems } = useContext(ShopContext);

  return (
    <div className="shop-list">
      <ShopHeader />
      <Row>
        {
          shopItems.map(({
            id,
            title,
            description,
            price,
          }) => (
            <Col lg="6" md="6" sm="12" key={id}>
              <ShopItem
                id={id}
                title={title}
                description={description}
                price={price}
              />
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default ShopList;
