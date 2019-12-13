import React, {Component} from 'react';


class App extends Component {
  
  state = { items: [
    { id: 1, itemName: "milk", quantity: 2, price: 1.00, inCart: false, brand: "kroger"},
    { id: 1, itemName: "bread", quantity: 3, price: 3.00, inCart: false, brand: "Dave's Killer"},
    { id: 1, itemName: "eggs", quantity: 2, price: 2.00, inCart: false, brand: "great value"},
    { id: 1, itemName: "cinnamon", quantity: 2, price: 4.00, inCart: false, brand: "Generic"}
    ]}

  // showItems = () => { 
  //   return(
  //     this.state.items.map(i =>  (
  //     <p>{i.itemName}</p>
  //     ))
  //   )
  // }

  render(){
    return(
      <h1> 
       Welcome to the grocery store! 
      </h1>
      
      <div>
        {this.showItems()}
      </div>
    )
  }

}
export default App;
