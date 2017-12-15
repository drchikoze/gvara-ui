import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePageContainer from './containers/pages/HomePageContainer';
import AuthorsPageContainer from './containers/pages/AuthorsPageContainer';
import SingleAuthorPageContainer from './containers/pages/SingleAuthorPageContainer';

import MainLayout from './containers/layouts/MainLayoutContainer';

class Routes extends Component {
    render() {
        return (
            <Router>
                <MainLayout>
                    <Switch>
                        <Route exact path='/' component={HomePageContainer} />
                        <Route exact path='/authors' component={AuthorsPageContainer} />
                        <Route exact path='/authors/:authorId' component={SingleAuthorPageContainer} />
                    </Switch>
                </MainLayout>
            </Router>
        );
    }
}

export default Routes;
