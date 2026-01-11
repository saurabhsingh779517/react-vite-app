import { useState } from 'react'

import './App.css'

function App() {
  let [counter , setCounter] = useState(0)
  

  function increase(){
    
    counter = counter + 1
     setCounter(counter)
     console.log("value of counter: ",counter)
  }


  function decreaseValue(){
    counter = counter - 1
    if(counter == -1){
      counter = 0
    }else{
    setCounter(counter)
    console.log("value of counter: ",counter )
     }
  }


  
  

  return (
    <div>
        <h1>saurabh singh</h1>
        <h2>counter value: {counter}</h2>
        <button onClick = {decreaseValue}>count--</button>
        <button onClick = {increase}>count++</button>
        
         
        
    </div>
  )
}

export default App
