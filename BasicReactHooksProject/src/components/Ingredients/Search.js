import React,{useState, useEffect, useRef} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const [initial,final]=useState('');
  const {onLoadingings}=props
  const inputref=useRef();

 useEffect(()=>
  {
    const timer=setTimeout(()=>{
    if(initial===inputref.current.value)
    {
      const query=initial.length===0?'':`?orderBy="title"&equalTo="${initial}"`
    fetch("https://my-burger-a1358.firebaseio.com/ingredients.json"+query)
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
      onLoadingings(ings)
    })
    }
    },500)
    return ()=>{
      clearTimeout(timer)
    }
    
  },[initial,onLoadingings])
  
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input ref={inputref} type="text" value={initial} onChange={event=>final(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
