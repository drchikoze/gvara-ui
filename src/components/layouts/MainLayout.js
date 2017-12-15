import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header.js';

// import 'react-toastify/dist/ReactToastify.min.css'

export default class MainLayoutContainer extends Component {
    render() {
        console.log('MainLayoutContainer this.props', this.props);
        return (
            <div className="site-content">
                <Header
                    location={this.props.location}
                />
                <main id="content">
                    {this.props.children}
                </main>
                {/* <div className="app-body">
                    <div>
                        {this.props.children}
                    </div>
                </div> */}
            </div>
        );
    }
}

MainLayoutContainer.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object
};
