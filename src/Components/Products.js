import React, { Component } from 'react';
import '../Styles/Styles.css';


export default class Products extends Component {
constructor(){
    super();
    this.state={
        redirect:false
    }
this.handleOnclick=this.handleOnclick.bind(this);
}

handleOnclick=(e)=>{
    this.props.displayProduct(this.props.name);
}

  render() {

    return (
      <div className="products" onClick={this.handleOnclick}>
        {this.props.name}
        
      </div>
    )
  }
}
