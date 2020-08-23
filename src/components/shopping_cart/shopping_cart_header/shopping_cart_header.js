import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

const ShoppingCartHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="cart-header">
      <h2 className="main-color font-weight-lighter mt-0">{t('boatShoppingCart')}</h2>
      <Row className="no-gutters">
        <Col xs="6" className="no-gutters">
          <span className="h4 font-weight-lighter main-color">{t('product')}</span>
        </Col>
        <Col xs="2" className="no-gutters">
          <span className="h4 font-weight-lighter main-color">{t('price')}</span>
        </Col>
        <Col xs="4" className="no-gutters text-right">
          <span className="h4 font-weight-lighter main-color">{t('quantity')}</span>
        </Col>
      </Row>
      <hr className="dotted" />
    </div>
  );
};

export default ShoppingCartHeader;
