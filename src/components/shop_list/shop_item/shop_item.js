import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';

import shopItemProps from './prop-types';
import ShopContext from '../../../context/shop_context';

import './styles.css';

const ShopItem = ({
  id,
  title,
  description,
  price,
}) => {
  const { t } = useTranslation();
  const { addToCart } = useContext(ShopContext);
  const priceValue = price % 1 === 0 ? price : parseFloat(price).toFixed(2);

  return (
    <Container className="shop-item">
      <p className="item-title font-weight-light"><b>{title}</b></p>
      <p className="font-weight-lighter item-description">{description}</p>
      <Row>
        <Col>
          <button
            className="button item-button"
            type="button"
            onClick={() => addToCart(id)}
          >
            {t('addToCart')}
          </button>
        </Col>
        <Col>
          <p className="item-price float-right font-weight-light">
            {`${t('euroSign')} ${priceValue}`}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

ShopItem.propTypes = { ...shopItemProps };

export default ShopItem;
