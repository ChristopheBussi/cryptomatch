import React from 'react';
import PropTypes from 'prop-types';

import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Graphic = ({ pairName }) => (
  <div className="widget">
    <TradingViewWidget
      width={1000}
      height={600}
      symbol={`BINANCE:${pairName}`}
      interval="D"
      timezone="Europe/Paris"
      theme={Themes.DARK}
      locale="fr"
      toolbar_bg="#f1f3f6"
      enable_publishing={false}
      allow_symbol_change={false}
      style={'1'}
    />
  </div>
);

Graphic.propTypes = {
  pairName: PropTypes.string.isRequired,
};

export default Graphic;
