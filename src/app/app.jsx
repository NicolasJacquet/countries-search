import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCountries } from "./../redux/actions/countries-actions";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./../pages/home";
import Details from "./../pages/details";
import Layout from "./../components/layout";

const App = ({ getCountries }) => {
    useEffect(() => {
        getCountries();
    }, [getCountries]);

    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/details/:countryId' component={Details} />
                <Route path='*'>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </Layout>
    );
};

export default connect(null, { getCountries })(App);
