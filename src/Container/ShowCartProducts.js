import React, { Component } from 'react'

class ShowCartProducts extends Component {
    
  render() {
    console.log("the value are")
    return (
        <div className='products'><h1>the products to buy are{this.props.name}</h1>
      <button  >Remove</button>
     
      </div>   
    )
  }
}


export default  ShowCartProducts;