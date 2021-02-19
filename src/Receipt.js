import React from 'react';
import './Receipt.css';
class Receipt extends React.Component{
    constructor(props){
        super(props);
    }

render(){
    console.log(this.props.receipt)
    return(
<div>
        
      <ul className="receipt" >  
      <li> Person: {this.props.receipt.person} </li> 
      <li> order </li> 
      <li> main:{this.props.receipt.order.main} </li> 
      <li> protein:{this.props.receipt.order.protein} </li> 
      <li> rice:{this.props.receipt.order.rice} </li> 
      <li>sauce:  {this.props.receipt.order.sauce}</li> 
      <li> drink: {this.props.receipt.order.drink}</li> 
      <li> cost:  {this.props.receipt.order.cost}</li> 
  
      </ul>
</div>
    )

}

}
export default Receipt;