import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import ShopContext from '../../../context/shop_context';

const ShoppingCartFooter = () => {
  const { t } = useTranslation();

  const [value, setValue] = useState(t('proceedToCheckout'));
  const {
    vatPercent,
    totalPrice,
    vatPrice,
    totalToBePaid,
  } = useContext(ShopContext);

  return (
    <>
      <Row className="mb-3 no-gutters">
        <Col xs={9} className="text-right">
          <span className="font-weight-light price-before-vat-label">
            <i>
              {t('priceBefore')}
              <span className="dotted" data-toggle="tooltip" data-placement="top" title={t('vat_description')}>{`${t('VAT')}:`}</span>
            </i>
          </span>
        </Col>
        <Col xs={3} className="text-right">
          <span className="font-weight-bold price-before-vat">{`${t('euroSign')}${totalPrice}`}</span>
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col xs={9} className="text-right">
          <span className="font-weight-light vat-price-label">
            <i>
              <span className="dotted" data-toggle="tooltip" data-placement="top" title={t('vat_description')}>{`${t('VAT')}`}</span>
              <span>
                {` ${t('atSign')} `}
                <b className="font-weight-bold">{vatPercent}</b>
                {`${t('percentSing')}:`}
              </span>
            </i>
          </span>
        </Col>
        <Col xs={3} className="text-right">
          <span className="font-weight-bold vat-price">{`${t('euroSign')}${vatPrice}`}</span>
        </Col>
      </Row>
      <hr className="full-width" />
      <Row className="no-gutters">
        <Col xs={9} className="text-right">
          <span className="font-weight-light total-price-label">
            <i>{`${t('totalToBePaid')}:`}</i>
          </span>
        </Col>
        <Col xs={3} className="text-right">
          <span className="main-color font-weight-normal h5 total-price">
            {`${t('euroSign')}${totalToBePaid}`}
          </span>
        </Col>
      </Row>
      <hr className="dotted" />
      <div className="flex-end">
        <button
          className="background-button font-weight-light proceed-button"
          type="button"
          onClick={() => setValue(t('sendingYourOrder'))}
        >
          {value}
        </button>
      </div>
    </>
  );
};

export default ShoppingCartFooter;
