import React from 'react';

const List = ({items}) => (
  <div>

    <h1>Grocery List</h1>
    <table>
      <th>
        <td>Item</td>
        <td>Quantity</td>
        <td>Price</td>
        <td>Total Price</td>
      </th>
      {items.map(i =>  ( 
      <tr>
          <td>{i.brand} {i.itemName}</td>
          <td>{i.quantity}</td>
          <td>${i.price}</td>
          <td>${i.price * i.quantity}</td>
      </tr>
      ))}
    </table>
  </div>

  )

export default List; 