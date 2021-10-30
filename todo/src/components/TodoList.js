import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm' 

const TodoList = () => {
    const[todos,setTodos] = useState([]);
    
    const addTodo = todo => {
        console.log(todo)
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }

    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }
     
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }


    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>Whats the plan for today</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList
