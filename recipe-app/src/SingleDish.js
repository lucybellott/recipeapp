import React from 'react'

export default function SingleDish({name, id, handleDelete}) {
  
  const handleDeleteButton = () => handleDelete(id)
  
return (
    <div>
        <span>{name}</span>
        <br/>
        <button onClick={handleDeleteButton}>Delete</button>
        <br/>
        <br/>
    </div>
  )
}
