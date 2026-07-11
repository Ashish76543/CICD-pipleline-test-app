import {useState} from "react";
import axios from "axios";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App()
{ const [todos,setTodos]=useState([]);
  async function addTodo(text)
  {
    await axios.post("http://127.0.0.1:8000/todos",
      {
        text:text
      }
    );

    setTodos((prev)=>{
      return([...prev,text])
    });
  }
  function deleteTodo(index)
  {
    setTodos((prev)=>prev.filter((k,i)=>i!==index))
  }
   return (<div>
    <h1>ContinuousICD</h1>
    <TodoInput addTodo={addTodo}></TodoInput>
    <TodoList todos={todos}
    deleteTodo={deleteTodo}>

    </TodoList>
  </div>)
}
export default App