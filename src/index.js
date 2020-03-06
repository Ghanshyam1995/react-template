import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Header from './components/header';
import Banner from './components/banner';
import ContactUs from './components/contactus';

class StartUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { location } = this.props;
        return (
            <div>
                <Header />
                {location.pathname == '/' && <Banner />}
                <Route exact path="/" component={App} />
                <Route path="/contactus" component={ContactUs}/>
            </div>
        )
    }
}


const Main = withRouter((props) => {
    return (
        <div>
            <StartUp {...props} />
        </div>
    );
})

ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
