import { useState } from "react"
import { createStore } from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default: // if none of the above matches, code comes here
    return state
  }
}

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container"> 
       <h1>Counter</h1>
       
       <h2>{count}</h2>
       <button onClick={()=> setCount(count + 1)}>add</button>
       <button onClick={() => setCount(count -1)}>minus</button>
       <button onClick={() =>  setCount(0)}>reset</button>
    </div>
    )
}

export default App