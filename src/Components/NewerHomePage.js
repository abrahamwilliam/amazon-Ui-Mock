import React, { Component } from 'react';
import {Route,withRouter}from 'react-router-dom' ;
import {BrowserRouter as Router,Switch} from  'react-router-dom';
import ShowCart from '../Container/ShowCart';
import ShowCartProducts from '../Container/ShowCartProducts';
import Main from '../Container/Main';
import Buy from '../Components/Buy'


export default class NewerHomePage extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
              <Switch>
                
                <Route exact path="/" component ={Main} ></Route>
                <Route exact path="/buy" component ={Buy} ></Route>
               
                  <Route exact path="/Showcart" component ={ShowCart} ></Route>
                
                  <Route exact path="/ShowCartProducts" component ={ShowCartProducts} ></Route>
              </Switch>
          </Router>
        
      </React.Fragment>
    )
  }
}
