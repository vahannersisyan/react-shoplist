import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import ShopContext from '../../../../context/shop_context';
import Quantity from './quantity';
import i18n from '../../../../spec_support/i18n';

describe('Quantity', () => {
  let component;
  const updateQuantity = jest.fn();
  const itemId = 1;
  const quantity = 5;

  const subject = () => mount(
    <I18nextProvider i18n={i18n}>
      <ShopContext.Provider value={{ updateQuantity }}>
        <Quantity {...{ itemId, quantity }} />
      </ShopContext.Provider>
    </I18nextProvider>,
  );

  beforeEach(() => {
    component = subject();
  });

  describe('on render', () => {
    describe('should have correct elements', () => {
      it('should render div element with quantity className', () => {
        expect(component.find('div.quantity')).toHaveLength(1);
      });

      it('should render input element', () => {
        expect(component.find('input')).toHaveLength(1);
      });

      it('should render plus button', () => {
        expect(component.find({ name: 'plus-button' })).toHaveLength(1);
      });

      it('should render minus button', () => {
        expect(component.find({ name: 'minus-button' })).toHaveLength(1);
      });
    });
  });

  describe('when clicking plus button', () => {
    it('should call updateQuantity function with correct value', () => {
      const plusButton = component.find({ name: 'plus-button' });

      plusButton.simulate('click');

      expect(updateQuantity).toHaveBeenCalledWith({
        itemId,
        quantity: quantity + 1,
      });
    });
  });

  describe('when clicking minus button', () => {
    it('should call updateQuantity function with correct value', () => {
      const minusButton = component.find({ name: 'minus-button' });

      minusButton.simulate('click');

      expect(updateQuantity).toHaveBeenCalledWith({
        itemId,
        quantity: quantity - 1,
      });
    });
  });

  describe('when changing input value', () => {
    let quantityInput;
    let inputValue;

    beforeEach(() => {
      quantityInput = component.find('input');
    });

    describe('when trying to input strings', () => {
      it('should not set new value', () => {
        inputValue = 'Enter';
        act(() => {
          quantityInput.simulate('keypress', { key: inputValue });
        });

        expect(quantityInput.props().value).not.toEqual(inputValue);
      });
    });

    describe('when trying to input numbers', () => {
      it('should call updateQuantity function with correct value', () => {
        inputValue = 1;
        act(() => {
          quantityInput.props().onChange({ target: { value: inputValue } });
          quantityInput.simulate('change');
        });

        expect(updateQuantity).toHaveBeenCalledWith({
          itemId,
          quantity: inputValue,
        });
      });
    });
  });
});
