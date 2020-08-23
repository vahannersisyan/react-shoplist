import React from 'react';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import ShopContext from '../../context/shop_context';
import ShopList from './shop_list';
import shopItems from '../../context/reducer/shop_items';
import i18n from '../../spec_support/i18n';

describe('Shop List', () => {
  const shopContextValue = {
    shopItems: [],
  };

  const subject = (contextValue = shopContextValue) => mount(
    <I18nextProvider i18n={i18n}>
      <ShopContext.Provider value={contextValue}>
        <ShopList />
      </ShopContext.Provider>
    </I18nextProvider>,
  );

  it('should render div element with shop-list className', () => {
    const component = subject();

    expect(component.find('div.shop-list')).toHaveLength(1);
  });

  describe('when there is not shop items in context', () => {
    it('should not render any ShopItem component', () => {
      const component = subject();

      expect(component.find('ShopItem')).toHaveLength(0);
    });
  });

  describe('when there are shop items in context', () => {
    it('should render as many ShopItem components, as there are in context', () => {
      const component = subject({ shopItems });

      expect(component.find('ShopItem')).toHaveLength(4);
    });
  });
});
