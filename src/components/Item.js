import React, {Component} from 'react';
import GroceryForm from './GroceryForm';

class Item extends Component {

  state = {
    edit: false
  }

  toggleEdit = () => {
    this.setState({edit: !this.state.edit})
  }

  render() {
    const styles = {
      complete: {
        color: 'grey',
        textDecoration: 'line-through',
      }
    }
    
    const { items, handleComplete, removeGroceryItem, cartTotal} = this.props
    
    return(
      <form onSubmit={this.handleEdit} className="ui form">
      <h3>
        {this.state.edit ? <button className="ui primary button" type="submit" onClick= {() => this.toggleEdit()}>Save</button> : <button className="ui button" onClick= {() => this.toggleEdit()}>Edit</button>}
      </h3>
      <table className="ui celled striped table centered">

        <tr>
          <th></th>
          <th>In Cart</th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
        </tr>

        {items.map(i =>  ( 
        <tr key={i.id}>

          <td>
            <button className="ui red button" onClick= {() => removeGroceryItem(i.id)}>Delete</button>
          </td>
        
          <td 
            onClick={() => handleComplete(i.id)} 
            style={(i.inCart ? { ...styles.complete, textDecoration:'none !important', cursor:'pointer'} : {cursor: 'pointer'}) }>
            <h1>{i.inCart ? "☑" : "☐"}</h1>
          </td>

          <td 
            style={(i.inCart ? { ...styles.complete } : {}) }>
            {this.state.edit ? <div><input name="brand" defaultValue={i.brand} onChange={this.handleChange}/><input name="itemName" defaultValue={i.itemName}/></div> : `${i.brand} ${i.itemName}` }
          </td>

          <td 
            style={(i.inCart ? { ...styles.complete } : {}) }>
            {this.state.edit ? <input name="quantity" defaultValue={i.quantity}/> : i.quantity }
          </td>

          <td 
            style={(i.inCart ? { ...styles.complete } : {}) }>
            {this.state.edit ? <input name="price" defaultValue={`$${i.price}`}/> : `$${i.price}` }
          </td>

          <td 
            style={(i.inCart ? { ...styles.complete } : {}) }>
            ${i.price * i.quantity}
          </td>
        </tr>
        ))}

        <tr>
          <td colspan="6" style={{textAlign: 'right'}}>Cart Total: ${cartTotal()}</td>
        </tr>

      </table>
      </form>
    )

}
}
export default Item

