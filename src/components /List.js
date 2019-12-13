import React from 'react';

const List = () => (

showItems = () => { 
  return(
    this.state.items.map(i =>  (
    <p>{i.itemName}</p>
    ))
  )
})

export default List; 