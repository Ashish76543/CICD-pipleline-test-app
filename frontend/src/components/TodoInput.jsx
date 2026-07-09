import {useState} from "react"

function TodoInput({addTodo})
{
    function handleAdd()
    {
        addTodo(text);
    }
const [text,setText]=useState("")
return(<div>
<input 
type="text"
value={text}
onChange={(e)=>setText(e.target.value)}
/>
<button onClick={handleAdd}>
    add
</button>

</div>)
}
export default TodoInput