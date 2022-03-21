import React from 'react'

export default function SingleDish({name, id, handleDelete}) {
  
  const handleDeleteButton = () => handleDelete(id)
  
return (
    <div>
        <span>🍴{name}</span>
        <button style={{width:"70px", fontSize:"12px"}} class="btn btn-danger" onClick={handleDeleteButton}>Delete</button>
        <br/>
        <br/>
    </div>
  )
}
