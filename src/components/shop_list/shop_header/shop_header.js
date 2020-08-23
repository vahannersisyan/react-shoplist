import React from 'react';
import { useTranslation } from 'react-i18next';

const ShopHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="main-color font-weight-lighter">{t('shopTitle')}</h2>
      <p className="description lead font-weight-lighter">{t('shopDescription')}</p>
      <p className="secondary lead font-weight-normal">
        {t('pleaseNote')}
        <span className="dotted" data-toggle="tooltip" data-placement="top" title={t('vat_description')}>{`${t('VAT')}!`}</span>
      </p>
    </>
  );
};

export default ShopHeader;
