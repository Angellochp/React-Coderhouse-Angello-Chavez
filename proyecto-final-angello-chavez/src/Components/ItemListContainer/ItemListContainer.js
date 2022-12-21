import React from 'react'
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = (props) => {
    console.log(props)
  return (
    <div className='message-greeting-container'>

    <h2 className='message'>{props.name}</h2>
        
    </div>
  )
}

export default ItemListContainer