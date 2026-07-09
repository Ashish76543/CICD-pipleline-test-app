

function TodoList({todos,deleteTodo})
{
return(<div>
    <ul>
        {todos.map((val,index)=>(
            <li key={index}
            onClick={()=>deleteTodo(index)}>
                {val}
            </li>
        ))}
    </ul>
</div>)
}
export default TodoList