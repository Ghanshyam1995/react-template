import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Header from './components/header';
import Banner from './components/banner';
import ContactUs from './components/contactus';
import Footer from './components/footer';
import NotFound from './components/notfound';
import { Provider, connect } from "react-redux";
import store from './store';
import Signup from "./components/signup";
import Login from './components/login';
class StartUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { location } = this.props;
        return (
            <div>
                {location.pathname != '/login' && location.pathname != '/signup' && <Header />}
                {location.pathname == '/' && <Banner />}
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={App} />
                <Route path="/contactus" component={ContactUs} />
                {/* <Route path="*" component={NotFound}/> */}
                {location.pathname != '/login' && location.pathname != '/signup' && <Footer />}

            </div>
        )
    }
}

const mapPropWithStatate = state => {

}

const Main = withRouter((props) => {
    return (
        <Provider store={store}>
            <StartUp {...props} />
        </Provider>
    );
})

ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
