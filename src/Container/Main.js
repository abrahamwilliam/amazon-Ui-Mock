import React, { Component } from 'react';
import {connect} from 'react-redux';
import {redirectCart} from '../Action/CartActions';
import ProductContainer from './ProductContainer';
import Cart from './Cart';
import {withRouter} from 'react-router-dom';

class Main extends Component {

constructor(){
    super();
    this.state={
        show:true
    }
    
}


  render() {
let show;
if(this.props.show){
    show= <ProductContainer/>
}


    return (
      <React.Fragment>
        
        <div className="top">
        <div class="header" >SIgn In</div>
                    <div class="sidemenu">2</div>
            {show}
                                    <div class="footer">4</div>
                                    
                                    <Cart >5</Cart>
                                    </div>

      </React.Fragment>
    )
  }
}


const mapStateToProps=(state)=>{
    console.log("cart component is rerendered after the  show cart",this)
    return {
        show:state.showHideProductDisplay
    }
  }


export default withRouter( connect(mapStateToProps,null) (Main));
