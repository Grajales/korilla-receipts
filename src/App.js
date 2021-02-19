import React from 'react';
import './App.css';
import Receipt from './Receipt.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={

        receipts : [
            {
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
            },
            {
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
            },
            {
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
              paid: true
            }
          ],
   }
}

  render () {
    const allReceipt = this.state.receipts.map((receiptElement, index)=>{
        if(receiptElement.paid===false){
        return <Receipt receipt={receiptElement} key={index}/>
        }
    })
    return (
      <div className="App">
        <h1 className="truck-name">Korilla Receipts</h1>
          <div className="container">
            {allReceipt} 
          </div>
      </div>
    )
  }
}

export default App;