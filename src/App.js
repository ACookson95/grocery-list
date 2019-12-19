import React, {Component} from 'react';
import List from './components/List';
import GroceryForm from './components/GroceryForm';


class App extends Component {
  
  state = { 
    items: [
    { id: 1, itemName: "Milk", quantity: 2, price: 1.00, inCart: false, brand: "Kroger" },
    { id: 2, itemName: "Bread", quantity: 3, price: 3.00, inCart: false, brand: "Dave's Killer" },
    { id: 3, itemName: "Eggs", quantity: 2, price: 2.00, inCart: true, brand: "Great Value" },
    { id: 4, itemName: "Cinnamon", quantity: 1, price: 4.00, inCart: false, brand: "McCormick" }
    ]
  }
  
   cartTotal = () => { 
      const {items} = this.state
      let cartTotal = 0
      for (let i = 0; i < items.length; i++) {
        cartTotal += items[i].price * items[i].quantity
      }
      return(cartTotal)
    }

    handleComplete = (id) => {
      const { items } = this.state 
      this.setState({
        items: items.map( item => {
          if (item.id === id) {
            return {
              ...item,
              inCart: !item.inCart
            }
          }
          return item 
        })
      })
    }


  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   } 

  addGroceryItem = (incomingItem) => {
    const {items} = this.state
    const newGroceryItem = { id: this.getUniqId(), ...incomingItem }
    this.setState({ items: [newGroceryItem, ...items] })
  }

  editItem = (id, incomingItem) => {
    let updatedItem = { id: id, ...incomingItem }
    const items = this.state.items.map(item => {
      if(item.id === id) {
        return updatedItem
      }
      return item
    })
    this.setState({ items: [ ...items ] })
  }

  removeGroceryItem = (id) => {
    const newItems = this.state.items.filter(item => {
      if( item.id !== id)
        return(item)
    })
    this.setState({ items: [...newItems] })
  }

  render(){
    return(
      <div>
        <div className="ui segment center">
        <h1>Here's Your Shopping List </h1>
      </div>
      <GroceryForm addGroceryItem={this.addGroceryItem} />
      <List 
        items={this.state.items} 
        cartTotal={this.cartTotal} 
        handleComplete={this.handleComplete} 
        removeGroceryItem={this.removeGroceryItem}
        updatedItem={this.updatedItem}
        />
      </div>
    )
  }

}
export default App;
