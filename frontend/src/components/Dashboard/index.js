import React, { Component } from 'react';
import './dashboard.scss';
import Crypto from './Crypto';
import Order from './Order';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { manageLoad, username } = this.props;
    manageLoad(username);
  }

  render() {
    const {
      loading,
      hisCryptos,
      hisOrders
    } = this.props;
    console.log(hisCryptos);
    console.log(hisOrders);
    return (
      <div className="dashboard" >
        { loading && <div>Dashboard en chargement</div>}
        {!loading && (
          <>
            <div className="hisCrypto__header">
              <div className="hisCrypto__logo">Nom</div>
              <div className="hisCrypto__quantity">quantité</div>
              <div className="hisCrypto__averageprice">PrixMoyen</div>
            </div>
            <div className="dashboard__table">
              {
                hisCryptos.map((crypto) => (
                  <Crypto
                    key={crypto.cryptoName}
                    {...crypto}
                  />
                ))
              }
            </div>
            <div className="dashboard__table">
              {
                hisOrders.map((order) => (
                  <Order
                    key={order.createdAt}
                    {...order}
                  />
                ))
              }
            </div>
          </>
        )
        }

      </div>
    );
  }
}
export default Dashboard
