import React from 'react';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import ShopContext from '../../../context/shop_context';
import ShoppingCartFooter from './shopping_cart_footer';
import i18n from '../../../spec_support/i18n';

describe('Shopping cart footer', () => {
  let component;
  const vatPercent = 20;
  const totalPrice = 10;
  const vatPrice = 2;
  const totalToBePaid = 8;

  const subject = () => mount(
    <I18nextProvider i18n={i18n}>
      <ShopContext.Provider value={{
        vatPercent,
        totalToBePaid,
        totalPrice,
        vatPrice,
      }}
      >
        <ShoppingCartFooter />
      </ShopContext.Provider>
    </I18nextProvider>,
  );

  beforeEach(() => {
    component = subject();
  });

  describe('on redner', () => {
    describe('should have correct elements', () => {
      it('should have span tag with className price-before-vat-label', () => {
        expect(component.find('span.price-before-vat-label')).toHaveLength(1);
      });

      it('should have span tag with className price-before-vat', () => {
        expect(component.find('span.price-before-vat')).toHaveLength(1);
      });

      it('should have span tag with className vat-price-label', () => {
        expect(component.find('span.vat-price')).toHaveLength(1);
      });

      it('should have span tag with className vat-price', () => {
        expect(component.find('span.vat-price')).toHaveLength(1);
      });

      it('should have hr tag with full-width className', () => {
        expect(component.find('hr.full-width')).toHaveLength(1);
      });

      it('should have span tag with className total-price-label', () => {
        expect(component.find('span.total-price-label')).toHaveLength(1);
      });

      it('should have span tag with className total-price', () => {
        expect(component.find('span.total-price')).toHaveLength(1);
      });

      it('should have hr tag with dotted className', () => {
        expect(component.find('hr.dotted')).toHaveLength(1);
      });

      it('should have button tag with proceed-button className', () => {
        expect(component.find('button.proceed-button')).toHaveLength(1);
      });
    });

    describe('should check element values', () => {
      it('should have correct value for price-before-vat-label element', () => {
        expect(component.find('span.price-before-vat-label').text()).toEqual('priceBeforeVAT:');
      });

      it('should have correct value for price-before-vat element', () => {
        expect(component.find('span.price-before-vat').text()).toEqual(`euroSign${totalPrice}`);
      });

      it('should have correct value for vat-price-label element', () => {
        expect(component.find('span.vat-price-label').text()).toEqual('VAT atSign 20percentSing:');
      });

      it('should have correct value for vat-price element', () => {
        expect(component.find('span.vat-price').text()).toEqual('euroSign2');
      });

      it('should have correct value for total-price-label element', () => {
        expect(component.find('span.total-price-label').text()).toEqual('totalToBePaid:');
      });

      it('should have correct value for total-price element', () => {
        expect(component.find('span.total-price').text()).toEqual('euroSign8');
      });

      it('should have correct value for proceed-button element', () => {
        expect(component.find('button.proceed-button').text()).toEqual('proceedToCheckout');
      });
    });
  });

  describe('when clicking proceed button', () => {
    it('should change its value to sendingYourOrder', () => {
      const proceedButton = component.find('button.proceed-button');
      proceedButton.simulate('click');

      expect(proceedButton.text()).toEqual('sendingYourOrder');
    });
  });
});
