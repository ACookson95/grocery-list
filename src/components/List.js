import React from 'react';
import Item from './Item';


const List = ({items, cartTotal, handleComplete, removeGroceryItem, updatedItem}) => (
  <div className="ui segment">

    <h1 className="ui dividing header">Grocery List</h1>

      <Item 
        items={items} 
        handleComplete={handleComplete} 
        removeGroceryItem={removeGroceryItem} 
        cartTotal={cartTotal}
        />

  </div>

  )

export default List; 