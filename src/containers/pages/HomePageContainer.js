import { connect } from 'react-redux';

import * as PostActions from '../../actions/post.js';

import HomePage from '../../pages/HomePage.js';

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, { ...PostActions })(HomePage);
