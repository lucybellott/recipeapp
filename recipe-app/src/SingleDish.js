import React from 'react'

export default function SingleDish({name, id, handleDelete}) {
  
  const handleDeleteButton = () => handleDelete(id)
  
return (
    <div>
        <span>🍴{name}</span>
        <button id="delete-button" class="btn btn-danger" onClick={handleDeleteButton}>Delete</button>
        <br/>
        <br/>
    </div>
  )
}
