import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore';

import Routes from './routes';

import '../scss/stylesheets/application.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
