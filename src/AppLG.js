import React from 'react';
import './App.css';
// import Receipt1 from './Receipt1';
// import Receipt2 from './Receipt2.js';
// import Receipt3 from'./Receipt3.js';
const receipt1 = { 
  person: "Karolin",
  order: {
    main: "Burrito",
    protein: "Organic Tofu",
    rice: "Purple Rice",
    sauce: "Green Crack",
    toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
    drink: "Korchata",
    cost: 22
    },
    paid: false
  }
  const receipt2 = {
    person: "Jerrica",
    order: {
      main: "Rice Bowl",
      protein: "Ginger Soy Chix",
      rice: "Sticky Rice",
      sauce: "Korilla",
      toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
      drink: "Korchata",
      cost: 19
    },
    paid: false
  };
  const receipt3 = {
    person: "Matt",
    order: {
      main: "Salad Bowl",
      protein: "Organic Tofu",
      rice: "none",
      sauce: "K'lla",
      toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
      drink: "Sparkling Blood Orange Soda",
      cost: 20
    },
    paid: false
  };
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state=receipt1 
   }

  render () {
    console.log(this.state.person)
    return (
      <div>
        <h1 className="truck-name">Korilla Receipts</h1>
      
      <ul className="receipt1" >  
      <li>  {this.state.person} </li> 
      <li> order <br/>
       {this.state.order.main}  <br/>
       {this.state.order.protein}  <br/>
       {this.state.order.rice}  <br/>
       {this.state.order.sauce}  <br/>
       {this.state.order.drink}  <br/>
       {this.state.order.cost}  <br/>
      </li> 
      </ul>
      <ul className="receipt2" >  
      <li>  {this.state.person} </li> 
      <li> order <br/>
       {this.state.order.main}  <br/>
       {this.state.order.protein}  <br/>
       {this.state.order.rice}  <br/>
       {this.state.order.sauce}  <br/>
       {this.state.order.drink}  <br/>
       {this.state.order.cost}  <br/>
      </li> 
      </ul>
      <ul className="receipt3" >  
      <li>  {this.state.person} </li> 
      <li> order <br/>
       {this.state.order.main}  <br/>
       {this.state.order.protein}  <br/>
       {this.state.order.rice}  <br/>
       {this.state.order.sauce}  <br/>
       {this.state.order.drink}  <br/>
       {this.state.order.cost}  <br/>
      </li> 
      </ul>
     
      
      
      
      
      
      </div>
    )
  }
}

export default App;
