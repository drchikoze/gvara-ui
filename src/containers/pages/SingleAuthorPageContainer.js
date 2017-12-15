import { connect } from 'react-redux';

import * as PostActions from '../../actions/post.js';

import SingleAuthorPage from '../../pages/SingleAuthorPage.js';

function mapStateToProps(state) {
    console.log('test');
    return {

    };
}

export default connect(mapStateToProps, { ...PostActions })(SingleAuthorPage);
