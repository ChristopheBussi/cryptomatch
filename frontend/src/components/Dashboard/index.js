import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';
import Crypto from './Crypto';
import Order from './Order';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { displayCryptos: '__actived', displayOrders: '' };
    this.state = {

      series: [25, 15, 44, 55, 41, 17],
      options: {
        chart: {
          width: '100%',
          type: 'donuts',
        },
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        theme: {
          monochrome: {
            enabled: true
          }
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
              labels: {
                show: true,
              },
              dataLabels: {
                offset: -5
              }
            },
          },
          title: {
            text: "Monochrome Pie"
          },
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
            }
          },
          legend: {
            show: false
          }
        },


      },
    }
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
    } = this.props;
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
                className={`dashboard__onglet-orders buttonOnglet${displayOrders}`}
                onClick={() => handleClickTab('orders')}
              >
                Mes Ordres
              </button>
            </div>
            <div className={`hisCryptos${displayCryptos}`}>
              <div className="dashboard__table">
                <div className="hisCrypto headerTable">
                  <div className="hisCrypto__logo">Nom</div>
                  <div className="hisCrypto__quantity">Quantité</div>
                  <div className="hisCrypto__averagePrice">PrixMoyen</div>
                </div>
                {
                  hisCryptos.map((crypto) => (
                    <Crypto
                      key={crypto.cryptoName}
                      {...crypto}
                    />
                  ))
                }
              </div>

              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="pie"
              />


            </div>
            <div className={`hisOrders${displayOrders}`}>
              <div className="dashboard__table">
                <div className="hisOrder headerTable">
                  <div className="hisOrder__name">Nom</div>
                  <div className="hisOrder__type">Type</div>
                  <div className="hisOrder__quantity">Quantité</div>
                  <div className="hisOrder__amount">Montant</div>
                  <div className="hisOrder__quotation">Cotation</div>
                  <div className="hisOrder__createdAt">Date</div>
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
