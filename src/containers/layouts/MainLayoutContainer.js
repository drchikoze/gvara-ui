import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import * as PostActions from '../actions/post.js';

import MainLayout from '../../components/layouts/MainLayout.js';

function mapStateToProps(state) {
    return {

    };
}

export default withRouter(connect(mapStateToProps, {})(MainLayout));
