import React, { Component } from 'react';
import Showcart from './ShowCart';
import {connect} from 'react-redux';
import {redirectCart} from '../Action/CartActions';
import {withRouter} from 'react-router-dom';



class Cart extends Component {
constructor(){
  super()
    this.state={
        showcart:false,
        products:[],
        productsCount:0
    }

    this.showcartproducts=this.showcartproducts.bind(this);
    this.hideProductContainer=this.hideProductContainer.bind(this);
    
}

showcartproducts=(e)=>{
  console.log("isdie the showcart" ,this)
   this.props.history.push('/showcart');
    //this.setState({showcart:true});
}

hideProductContainer=()=>{
  console.log("Hidding the ProductContainer",this)
  this.props.redirectCart(false);
}

 render() {
  let show;
    let showcartState=this.state.showcart;
   
   if(showcartState){
    show=<Showcart/>
   }else{
    show=
    <div class="cart">
       <button onClick={()=>{this.showcartproducts();this.hideProductContainer()}}>{this.props.productsCount}</button>
    </div>
   }
    return (
      <React.Fragment>
        {show}
        </React.Fragment>
    )
  }
}


const mapStateToProps=(state)=>{
  console.log("cart component is rerendered after the adding product",this)
  return {
    products:state.items,
    productsCount:state.items.length
  }
}


const mapDispatchToProps =(dispatch) =>{
  return {
    redirectCart: (name)=>{dispatch(redirectCart(name))}, 
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Cart));
