import React, { Component } from 'react';
import './App.css';
import './Header';
import classNames from 'classnames';
import Header from "./Header";
import ClientsForm from './ClientsForm'
import 'flexboxgrid2';


class App extends Component {
    render(){
        return(
            <div className="container">
                <Header/>
                <ClientsForm/>
            </div>
        );
    }
}

export default App;
