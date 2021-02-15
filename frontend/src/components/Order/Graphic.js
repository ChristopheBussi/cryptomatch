import React from 'react';
import PropTypes from 'prop-types';

import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Graphic = ({ pairName }) => (
  <div>
    <TradingViewWidget
      width={600}
      height={400}
      symbol={`BINANCE:${pairName}`}
      interval="30"
      timezone="Europe/Paris"
      theme={Themes.Light}
      locale="fr"
      toolbar_bg="#f1f3f6"
      enable_publishing={false}
      allow_symbol_change={false}
      style="1"
    />
  </div>
);

Graphic.prototype = {
  pairName: PropTypes.string.isRequired,
};

export default Graphic;
