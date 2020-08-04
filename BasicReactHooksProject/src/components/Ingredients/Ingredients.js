import React,{useReducer,useEffect,useCallback} from 'react';
import IngredientList from './IngredientList'
import IngredientForm from './IngredientForm';
import Search from './Search';
import Errormodal from '../UI/ErrorModal'
const ingredientreducer=(currentings,action)=>{
  switch(action.type)
  { case "SET":return action.ingredient
    case "ADD":return [...currentings,action.ingredient]
      case "DELETE":return currentings.filter(item=>item.id!==action.id)
        default:throw new Error('Should Not get there') 
  }

}
const httpReducer=(httpdata,action)=>{
  switch(action.type)
  {
    case "SEND":return{loading:true,error:null}
      case "RESPONSE":return{...httpdata,loading:false}
        case "ERROR":return {loading:false,error:action.error}
        case "CLEAR":return{httpdata,error:null}
          default:throw new Error("Should not have reached here!")
  }

}
const Ingredients=()=> {
  // const [userIngredients,setUserIngredients]=useState([])
  const [userIngredients,dispatch]=useReducer(ingredientreducer,[])
  const [httpstate,dispatchhttp]=useReducer(httpReducer,{loading:false,error:null})
  // const [isLoading,setisLoading]=useState(false)
  // const [er,seter]=useState();
  useEffect(()=>{
    fetch("https://my-burger-a1358.firebaseio.com/ingredients.json")
    .then(response=>response.json())
    .then(res=>{
      const ings=[];
      for(const key in res)
      {
        ings.push({
          id:key,
          title:res[key].title,
          amount:res[key].amount
        })
      }
      // setUserIngredients(ings)
      dispatch({type:"SET",ingredient:ings})
    })
    
  },[])
  
  const addingredient=ingredient=>{
    // setisLoading(true)
    dispatchhttp({type:"SEND"})
    fetch("https://my-burger-a1358.firebaseio.com/ingredients.json",{
      method:"POST",
      body:JSON.stringify(ingredient),
      headers:{"Content-Type":"application/json"}
    })
    .then(response=>{
      // setisLoading(false)
      dispatchhttp({type:"RESPONSE"})
      return response.json()})
      .then(res=>
    // setUserIngredients(prevIngredients=>[
    //   ...prevIngredients,
    //   {id:res.name,...ingredient}
    // ]))
    dispatch({
      type:"ADD",ingredient:{id:res.name,...ingredient}}))
  }
  const removeHandler=(ingredientId)=>{
    // setisLoading(true)
    dispatchhttp({type:"SEND"})
    fetch(`https://my-burger-a1358.firebaseio.com/ingredients/${ingredientId}.json`,{
      method:"DELETE"
    })
    .then(res=>{
      // setisLoading(false)
      dispatchhttp({type:"RESPONSE"})
      // setUserIngredients(prevIngredients=>prevIngredients.filter(ingredient=>ingredient.id!==ingredientId))
      dispatch({type:"DELETE",id:ingredientId})
    }).catch(err=>{
      // seter("Something Went wrong")
      dispatch({type:"ERROR",error:err.message})
    })
    
  }
  const clearError=()=>{
    // seter(null)
    dispatchhttp({type:"CLEAR"})
  }
  const searching=useCallback(filtered=>{
    // setUserIngredients(filtered)
    dispatch({type:"SET",ingredient:filtered})
  },[]
   )
  return (
    <div className="App">
      {httpstate.error && <Errormodal onClose={clearError}>{httpstate.error}</Errormodal>}
      <IngredientForm loading={httpstate.loading} onAddIngredient={addingredient}/>

      <section>
        <Search onLoadingings={searching} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
