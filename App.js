import useList from './useList';
import './App.css';
import { useState } from 'react';

function App() {

  const{list,push,pull}=useList()
  const[todo,setTodo]=useState("")
  const onsubmithandler=(event)=>
  {
    event.preventDefault()
    push(todo)
    setTodo("")
  }
  
  return (
    <>

   <div>
    <div className="container">
    <header>
        <form onSubmit={(event)=>{onsubmithandler(event)}}>
          <h1>TO DO LIST</h1>
          <input type="text" className='inputText' onChange={(e)=>{setTodo(e.target.value)}} value={todo}/>
          <button type="submit"  className="btn btn-info">Add Todo</button>
          </form>
          <h5>{list.map((listItem,listIndex)=>{
            return (
              <div className='list-items'>
                <li key={listIndex}>{listItem}</li>
                <button onClick={()=>{pull(listIndex)}} className="btn btn-danger">X</button>
              </div>
            )
          })}
          </h5>
        </header>
   
    </div>
    </div>
    </>
  );
}

export default App;
