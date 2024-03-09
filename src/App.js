
import './App.css';
import {useReducer} from 'react'

 function reducer(state,action)
 {
   
   
    if(action.type==="Increment")
    {
       state=Number(state + 1);
        return state;
    }
    else if(action.type==="Decrement")
    {
       
      return Number(state - 1);
     
    }
 }

 let initialvalue={
  count:0,

 }

function App() {
        
       
    const[count,dispatch] = useReducer(reducer,initialvalue.count)

  function handleIncrement()
  {
      dispatch({type:"Increment",name:"mandeep"});
  }
  function handleDecrement()
  {
     dispatch({type:"Decrement"});
  }
  return ( 
    <div className="App">
       <label>{count}</label>
       <div>
       <button onClick={handleIncrement}>Incremet</button>
       <button onClick={handleDecrement}>Decrement</button>
       </div>
    </div>
  );
}

export default App;
