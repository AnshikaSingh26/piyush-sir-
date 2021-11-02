import React, { Component } from 'react'
import{ Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Header from './Header';
import Filter from './Filter';

export default class Router extends Component {
    render() {
        return ( < BrowserRouter >
                   <Header/>
                   <Route exact path="/" component={Home}/>
                   <Route path="/home" component={Home}/>
                   <Route path="/filter" component={Filter}/>
                   <Route path="/details" component={Details}/>
                   
            </BrowserRouter>
        )
    }
}
// import ll the comp into this file so to make connections
//imprt line 2 to make connections 
// exact when we wnat default page as home