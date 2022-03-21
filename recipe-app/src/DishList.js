import React from 'react'
import SingleDish from './SingleDish'

export default function DishList({dishes, handleDelete}) {
 
 const dishArray = dishes.map((dish) => {
    return <div>
        <SingleDish 
            key={dish.id}
            {...dish}
            handleDelete={handleDelete}
        />
    </div>
 })
 
return (
    <div>{dishArray}</div>
  )
}
