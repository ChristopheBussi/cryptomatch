import React, { Component } from 'react';
import './dashboard.scss';
import Crypto from './Crypto';

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

    return (
      <div className="dashboard" >
        { loading && <div>Dashboard en chargement</div>}
        {!loading && (
          hisCryptos.map((crypto) => (
                  <Crypto
                    key={crypto.cryptoName}
                    {...crypto}
                  />
                ))
        )
        }

      </div>
    );
  }
}
export default Dashboard
