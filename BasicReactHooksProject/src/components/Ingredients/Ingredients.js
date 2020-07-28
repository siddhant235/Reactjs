import React,{useState} from 'react';
import IngredientList from './IngredientList'
import IngredientForm from './IngredientForm';
import Search from './Search';

const Ingredients=()=> {
  const [userIngredients,setUserIngredients]=useState([])
  const addingredient=ingredient=>{
    setUserIngredients(prevIngredients=>[
      ...prevIngredients,
      {id:Math.random().toString(),...ingredient}
    ])
  }
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addingredient}/>

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={()=>{}}/>
      </section>
    </div>
  );
}

export default Ingredients;
