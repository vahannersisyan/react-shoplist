/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import Breadcrumb from './breadcrumb';
import breadcrumbItems from '../../constants/breadcrumb_items';
import i18n from '../../spec_support/i18n';

describe('Breadcrums', () => {
  let component;
  const subject = (props) => mount(
    <I18nextProvider i18n={i18n}>
      <Breadcrumb {...props} />
    </I18nextProvider>,
  );

  describe('when there is no items in props', () => {
    beforeEach(() => {
      component = subject({ items: [] });
    });

    it('should not render ul element', () => {
      expect(component.find('Breadcrumb')).toHaveLength(0);
    });

    it('should not render li element', () => {
      expect(component.find('BreadcrumbItem')).toHaveLength(0);
    });
  });

  describe('when there are items in props', () => {
    beforeEach(() => {
      component = subject({ items: breadcrumbItems });
    });

    it('should render ul element', () => {
      expect(component.find('Breadcrumb')).toHaveLength(1);
    });

    it('should render 2 li elements', () => {
      expect(component.find('BreadcrumbItem')).toHaveLength(2);
    });

    describe('when breadcrumb item has isActive prop', () => {
      it('should render li element with active className', () => {
        expect(component.find('li').at(1).hasClass('active')).toEqual(true);
      });
    });
  });
});
