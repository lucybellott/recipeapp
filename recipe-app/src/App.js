
import './App.css';
import DishList from './DishList'
import {useState, useEffect} from 'react';
import DishForm from './DishForm'

function App() {

  const [dishes, setDishes] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(resp => resp.json())
    .then(data => setDishes(data))

  }, [])

  const addDish = (newDish) => {
    let newDishArray = [...dishes, newDish]
      setDishes(newDishArray)
    }

    const handleDelete = (id) => {
      fetch(`http://localhost:3000/recipes/${id}`, {
        method: "DELETE",
        credentials: 'include'
      })
        .then((r) => r.json())
        .then(() => {
          const updatedList = dishes.filter((dish) => {
            return dish.id !== (id)})
            setDishes(updatedList);
        });
    
 }
  
  
  return (
    <div className="App">
      <h1>My Dishes</h1>
      <DishList dishes={dishes} handleDelete={handleDelete}/>
      <br/>
      <DishForm addDish={addDish}/>
    </div>
  );
}

export default App;
