import React, { Component } from 'react'
import '../Styles/Styles.css';
import {connect} from 'react-redux';
import {addToCart} from '../Action/CartActions'


 class ProductDisplay extends Component {
  constructor(){
    super()
    this.state={
        products:[],
        productsCount:0
    }

 this.handleAddQuantity=this.handleAddQuantity.bind(this);
  }

  handleAddQuantity=()=>{
    console.log('inside Product display',this.props.name );
    let name=this.props.name;
    let ExisitingProducts=this.state.products;
    ExisitingProducts.unshift(name)
    this.setState({products:ExisitingProducts});
    this.props.addToCart(name);
  }

  render() {
    return (
      <div className="productDisplay">
           <p> Displaying the  {this.props.name}</p>
           <button className='addTocart' onClick={this.handleAddQuantity}>Add To Cart</button>
      </div>    
    )
  }
}

const mapDispatchToProps =(dispatch) =>{
  console.log('inside Product display dispatch',addToCart);
  return {   
    addToCart: (name)=>{dispatch(addToCart(name))}
  }
}


export default connect(null,mapDispatchToProps )(ProductDisplay);


