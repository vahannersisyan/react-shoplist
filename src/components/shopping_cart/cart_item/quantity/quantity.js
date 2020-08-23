import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import quantityPropTypes from './prop-types';
import ShopContext from '../../../../context/shop_context';

import './styles.css';

const Quantity = ({ itemId, quantity }) => {
  const [count, setCount] = useState(quantity);
  const { updateQuantity } = useContext(ShopContext);
  const { t } = useTranslation();

  const setQuantity = (upadatedQuantity) => {
    if (upadatedQuantity >= 1) {
      updateQuantity({ itemId, quantity: upadatedQuantity });
    }
  };

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  const validateInput = (e) => /^\d*$/.test(e.target.value);

  // const handleOnChange = (e) {

  // };

  return (
    <div className="quantity">
      <input
        className="mr-1"
        type="number"
        min="1"
        value={count}
        onChange={(e) => setQuantity(Number(e.target.value))}
        onKeyPress={(e) => validateInput(e)}
      />
      <button
        className="background-button action-button mr-1"
        name="minus-button"
        type="button"
        onClick={() => setQuantity(count - 1)}
      >
        {t('minusSign')}
      </button>
      <button
        className="background-button"
        name="plus-button"
        type="button"
        onClick={() => setQuantity(count + 1)}
      >
        {t('plusSign')}
      </button>
    </div>
  );
};

Quantity.propTypes = { ...quantityPropTypes };

export default Quantity;
