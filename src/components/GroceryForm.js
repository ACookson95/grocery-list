import React, {Component} from "react"

class GroceryForm extends Component {
  state = { itemName: "", quantity: "", price: "", inCart: false, brand: "" }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addGroceryItem(this.state)
    this.setState({ itemName: "", quantity: "", price: "", inCart: false, brand: "" })
  }

  render(){
    return(
      <div class="ui segment">
        <form onSubmit={this.handleSubmit} class="ui form"> 

          <h3 class="ui dividing header">Add Grocery Items</h3>
          <div class="four fields">
            <div class="field">
              <input
              value={this.state.itemName}
              name="itemName"
              onChange={this.handleChange}
              required
              placeholder="Add a grocery item"
              />
            </div>

            <div class="field">
              <input
              value={this.state.brand}
              name="brand"
              onChange={this.handleChange}
              placeholder="What brand do you want?"
              />
            </div>

            <div class="field">
              <input
              value={this.state.quantity}
              name="quantity"
              onChange={this.handleChange}
              type="number"
              required
              placeholder="How many do you need?"
              />
            </div>

            <div class="field">
              <input
              value={this.state.price}
              name="price"
              onChange={this.handleChange}
              type="number"
              required
              placeholder="How much does this cost?"
              />
            </div>
          </div>

            <input type="submit" class="ui submit button"/>
        </form>
      </div>
    )
  }
}

export default GroceryForm;