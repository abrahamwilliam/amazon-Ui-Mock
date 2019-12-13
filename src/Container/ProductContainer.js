import React, { Component } from 'react';
import Products from '../Components/Products';
import '../Styles/Styles.css';
import ProductDisplay from '../Components/ProductDisplay';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class ProductContainer extends Component {
    constructor(){
    super();
   this.state={
    products:[
        "Tv","headphone","Jacket","Earphone","Jacket-Leather","Tv","headphone","Jacket","Earphone","Jacket-Leather","Tv","headphone","Jacket-Leather","Tv","headphone","Jacket-Leather","Tv","headphone","Jacket","Earphone","Jacket-Leather"
    ],
    redirect:false,
    selectedProduct:""
}
this.moveHome=this.moveHome.bind(this);
this.formProducts=this.formProducts.bind(this);
this.displayProductMethod=this.displayProductMethod.bind(this);
}

moveHome(){
  this.props.history.push("/")
}


displayProductMethod=( selectedProduct)=>{
  this.setState({redirect:true,selectedProduct:selectedProduct})
}

formProducts(){
    return this.state.products.map((p)=>{
        return <Products name={p} displayProduct={this.displayProductMethod}></Products>;
    });
}


render() {
 const redirect=this.state.redirect;
 let display;
 if(redirect){
  display=<ProductDisplay name={this.state.selectedProduct}/>
 }else{
  display= this.formProducts();
 }
    return (
      <div className="ProductContainer" >
        {display}
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return {
    products:state.items,
    redirect:state.showHideProductDisplay
  }
}



export default withRouter(connect(mapStateToProps,null)(ProductContainer));
