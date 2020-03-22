import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Switch,Route} from 'react-router-dom'
import Productlist from './productlist'
import Cart from './Cart/cart';
import Navbar from './navbar'
import Details from './details'
import Default from './default'
import Model from './model';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
   

    render() {
        return (
            <React.Fragment>
            <Navbar></Navbar>
            <Switch>
     <Route exact path="/" component={Productlist}></Route>
       <Route  path='/details' component={Details}></Route>
       <Route  path='/cart' component={Cart}></Route>
       <Route  component={Default}></Route>
       </Switch>
       <Model/>
        </React.Fragment>
        )
    }
}

export default App