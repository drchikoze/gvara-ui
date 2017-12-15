import { connect } from 'react-redux';

import * as PostActions from '../../actions/post.js';

import AuthorsPage from '../../pages/AuthorsPage.js';

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, { ...PostActions })(AuthorsPage);
