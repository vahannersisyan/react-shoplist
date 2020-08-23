import React from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import breadCrumbPropTypes from './prop-types';

import './styles.css';

const BreadcrumbBar = ({ items }) => {
  const { t } = useTranslation();
  return (
    <>
      {
        items.length > 0 && (
          <Breadcrumb bsPrefix="shopBreadCrumb">
            {
              items.map(({ label, isActive }) => (
                <Breadcrumb.Item
                  active={isActive}
                  key={label}
                  href="#"
                >
                  {t(label)}
                </Breadcrumb.Item>
              ))
            }
          </Breadcrumb>
        )
      }
    </>
  );
};

BreadcrumbBar.propTypes = { ...breadCrumbPropTypes };

export default BreadcrumbBar;
