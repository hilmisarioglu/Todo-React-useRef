import React,{useState} from 'react'

const TodoForm = () => {
    const[input, setInput ] = useState('');

    const handleChange = e =>{
        setInput(e.target.value)
 
    }
    const handleSubmit = e => {
        e.preventDefault();
        setInput('')
        console.log({input})
    }

    return (
        <form className = 'todo-form' onSubmit = {handleSubmit}>
            <input 
            type="text"
            placeholder="Add a todo"
            value = {input}
            name = 'text'
            className = 'todo-input'
            onChange={handleChange}
                   // The above code displays a single input field which, when typed in, passes its current value to the handleChange function
            />
        <button className='todo-button'>Add Todo</button>
        </form>
    )
}

export default TodoForm
