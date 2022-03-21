import React from 'react'
import {useState} from 'react';

export default function DishForm({addDish}) {
 
    const [newDish, setNewDish] = useState("")

    const handleNewDish = (e) => setNewDish(e.target.value)

    function handleSubmit (e) {
        e.preventDefault()
        
        fetch("http://localhost:3000/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: newDish}),
            })
            .then((resp) => resp.json())
            .then((data) => addDish(data));

            setNewDish("")

    }


 
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>New Dish: </label>
        <br/>
        <input type="text" placeholder="Name" value={newDish} onChange={handleNewDish}></input>
        <button type="submit" class="btn btn-primary">Add Dish</button>
        </form>
        
    </div>
  )
}
