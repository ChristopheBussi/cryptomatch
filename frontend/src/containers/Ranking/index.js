import { connect } from 'react-redux';

import Ranking from 'src/components/Ranking';

import { fetchUsersRanking } from 'src/actions/Ranking';

const mapStateToProps = (state) => ({
  loading: state.ranking.loading,
  users: state.ranking.users,
});

const mapDispatchToProps = (dispatch) => ({
  manageLoad: () => {
    dispatch(fetchUsersRanking());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
