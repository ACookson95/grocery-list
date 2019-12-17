import React, {Component} from 'react';
import List from './components/List'

class App extends Component {
  
  state = { 
    items: [
    { id: 1, itemName: "Milk", quantity: 2, price: 1.00, inCart: false, brand: "Kroger"},
    { id: 2, itemName: "Bread", quantity: 3, price: 3.00, inCart: false, brand: "Dave's Killer"},
    { id: 3, itemName: "Eggs", quantity: 2, price: 2.00, inCart: false, brand: "Great Value"},
    { id: 4, itemName: "Cinnamon", quantity: 1, price: 4.00, inCart: false, brand: "McCormick"}
    ]
  }

  render(){
    return(
       <div>
      <h1> 
       Welcome to the Grocery Store! 
      </h1>
      <List items={this.state.items}/>
      </div>
    )
  }

}
export default App;
