import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addToCart,removeItem} from '../Action/CartActions'
import ShowCartProducts from './ShowCartProducts';
import Cart from './Cart';

class Showcart extends Component {
 
    constructor(){
      super()
        this.state={
            products:[],
            productsCount:0,
            show:false
        }

    this.showItems=this.showItems.bind(this);
    this.changStateToShowProducts= this.changStateToShowProducts.bind(this);
    this.handleRemoveQuantity=this.handleRemoveQuantity.bind(this);
    this.normalShow=this.normalShow.bind(this);
    this.moveHome=this.moveHome.bind(this);
    this.buy=this.buy.bind(this);
    }

    buy(){
      this.props.history.push("/buy");
    }

  showItems(){
    return this.props.products.map((p)=>{
      return <ShowCartProducts  name={p}> </ShowCartProducts>;
    });
  }  
  changStateToShowProducts(){
    this.setState({show:true})
  }

  moveHome(){
    this.props.history.push("/")
  }
  
  handleRemoveQuantity=(p)=>{
    this.props.removeItem(p);
  }

normalShow(){
  return this.props.products.map((p)=>{
    return <ShowCartProducts  name={p}> </ShowCartProducts>;
  });
}

  render() {
let shows;
if(this.state.show){
  shows=this.showItems();
}else{
  shows=this.normalShow();
}
    return (
     
        <div class="top"  >
        <div class="header">1</div>
                    <div class="sidemenu">2</div>
       <p>SHowing the SHowcart</p>
       {shows}
       <div class="footer">4</div>
       <button onClick={this.buy}>Buy</button>
                                    
                                    <Cart >5</Cart>
                                    </div>

    )
  }
}

const mapStateToProps =(state) =>{
  return {
    products:state.items
  }
}

const mapDispatchToProps =(dispatch) =>{

  return {
    removeItem: (name)=>{dispatch(removeItem(name))},
 
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Showcart));

