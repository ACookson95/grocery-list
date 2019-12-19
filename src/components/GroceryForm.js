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
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form"> 

          <h3 className="ui dividing header">Add Grocery Items</h3>
          <div className="four fields">
            <div className="field">
              <input
              value={this.state.itemName}
              name="itemName"
              onChange={this.handleChange}
              required
              placeholder="Add a grocery item"
              />
            </div>

            <div className="field">
              <input
              value={this.state.brand}
              name="brand"
              onChange={this.handleChange}
              placeholder="What brand do you want?"
              />
            </div>

            <div className="field">
              <input
              value={this.state.quantity}
              name="quantity"
              onChange={this.handleChange}
              type="number"
              required
              placeholder="How many do you need?"
              />
            </div>

            <div className="field">
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

            <input type="submit" className="ui submit button"/>
        </form>
      </div>
    )
  }
}

export default GroceryForm;