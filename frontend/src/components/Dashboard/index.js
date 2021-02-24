import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';
import './tabCryptos.scss';
import './tabOrder.scss';
import Crypto from './Crypto';
import Order from './Order';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { displayCryptos: '__actived', displayOrders: '' };
  }
  componentDidMount() {
    const { manageLoad, username } = this.props;
    manageLoad(username);
  }
  render() {
    const {
      loading,
      hisCryptos,
      hisOrders,
      username,
      handleClickTab,
      displayCryptos,
      displayOrders,
      displayPortfolio,
    } = this.props;
    const amountCrypto = []
    const labelCrypto = []
    hisCryptos.forEach(crypto => {
      const amount = crypto.actualQuantity * crypto.realTimePrice
      amountCrypto.push(amount);
      labelCrypto.push(crypto.pairName);
    });
    const graph = {
      chart: {
        type: 'donut',
      },
      title: {
        text: 'Valeur en USDT'
      },
      labels: labelCrypto,
      theme: {
        monochrome: {
          color: '#1b944c',
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 350
          },
        }
      },
      {
        breakpoint: 700,
        options: {
          chart: {
            width: 450
          },
        }
      },
      {
        breakpoint: 700,
        options: {
          chart: {
            width: 480
          },
        }
      },
      {
        breakpoint: 1500,
        options: {
          chart: {
            width: 500
          },
        }
      },
      {
        breakpoint: 1600,
        options: {
          chart: {
            width: 600
          },
        }
      }
    ],
    }
    return (
      <div className="dashboard" >
        <h2 className="dashboard__title">Bienvenue {username}</h2>
        { loading && <div>Dashboard en chargement</div>}
        {!loading && (
          <>
            <div className="dashboard__onglet" >
              <button
                className={`dashboard__onglet-cryptos buttonOnglet${displayCryptos}`}
                onClick={() => handleClickTab('cryptos')}
              >
                Mes Cryptos
              </button>
              <button
                className={`dashboard__onglet-portfolio buttonOnglet${displayPortfolio}`}
                onClick={() => handleClickTab('portfolio')}
              >
                Mon évolution
              </button>
              <button
                className={`dashboard__onglet-orders buttonOnglet${displayOrders}`}
                onClick={() => handleClickTab('orders')}
              >
                Mes Ordres
              </button>
            </div>
            <div className={`hisCryptos${displayCryptos} hisCryptos`}>
              <div className="hisCryptos__table">
                <div className="hisCrypto headerTableCryptos">
                  <div className="hisCrypto__logo">Nom</div>
                  <div className="hisCrypto__quantity">Quantité</div>
                  <div className="hisCrypto__buyingPrice">Prix d'achat</div>
                  <div className="hisCrypto__valuation">Valorisation</div>
                  <div className="hisCrypto__percent">Pourcentage</div>

                </div>
                {
                  hisCryptos.map((crypto) => (
                    <Crypto
                      key={crypto.pairName}
                      {...crypto}
                    />
                  ))
                }
              </div>
              <div className="hisCryptos__graph">
                <ReactApexChart
                  options={graph}
                  series={amountCrypto}
                  type="donut"
                  width="700"
                />
              </div>



            </div>
            <div className={`hisOrders${displayOrders}`}>
              <div className="hisOrders__table">
                <div className="hisOrder headerTableOrders">
                  <div className="hisOrder__createdAt">Date</div>
                  <div className="hisOrder__name">Nom</div>
                  <div className="hisOrder__type">Type</div>
                  <div className="hisOrder__quantity">Quantité</div>
                  <div className="hisOrder__quotation">Cotation</div>
                  <div className="hisOrder__amount">Montant</div>
                </div>
                {
                  hisOrders.map((order) => (
                    <Order
                      key={order.createdAt}
                      {...order}
                    />
                  ))
                }
              </div>
            </div>

          </>
        )
        }

      </div>
    );
  }
}
export default Dashboard
