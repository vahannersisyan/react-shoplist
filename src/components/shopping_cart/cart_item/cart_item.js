import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { cartItemsDefaultProps, cartItemProps } from './prop-types';

import ShopContext from '../../../context/shop_context';
import Quantity from './quantity';

const CartItem = ({
  id,
  title,
  description,
  price,
  quantity,
}) => {
  const { removeFromCart } = useContext(ShopContext);
  const { t } = useTranslation();

  return (
    <div className="cart-item">
      <Row className="no-gutters">
        <Col xs="6" className="no-gutters">
          <p className="cart-item-title">{title}</p>
        </Col>
        <Col xs="2" className="no-gutters">
          <span className="cart-item-price">{`${t('euroSign')}${price}`}</span>
        </Col>
        <Col xs="4" className="no-gutters text-right">
          <Quantity quantity={quantity} itemId={id} />
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col xs="6" className="no-gutters">
          <p className="cart-item-description font-weight-lighter">{description}</p>
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col className="no-gutters">
          <button
            className="button float-left remove-button"
            type="button"
            onClick={() => removeFromCart(id)}
          >
            {t('remove')}
          </button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

CartItem.defaultProps = { ...cartItemsDefaultProps };
CartItem.propTypes = { ...cartItemProps };

export default CartItem;
