import { connect } from 'react-redux';
import { ApplicationState } from './../../redux/types';

import Landing from './Landing';

const mapState = (state: ApplicationState) => state;

export default connect(mapState)(Landing);
