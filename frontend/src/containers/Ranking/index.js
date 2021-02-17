import { connect } from 'react-redux';

import Ranking from 'src/components/Ranking';

const mapStateToProps = (state) => ({
  users: state.ranking.users
});

export default connect(mapStateToProps)(home);
