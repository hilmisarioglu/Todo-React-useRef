import React,{useState} from 'react'
import TodoForm from './TodoForm' 

const TodoList = () => {
    const[todos,setTodos] = useState([]);
    
    const addTodo = todo => {
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
        console.log(...todos)
    }
    return (
        <div>
            <h1>Whats the plan for today</h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList
