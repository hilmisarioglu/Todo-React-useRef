import React,{useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {

    const[input, setInput ] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            text : input,
            id: Math.floor(Math.random()*10000), 
        });
        console.log({input})
        setInput('');
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
            ref={inputRef}
            />
        <button className='todo-button'>Add Todo</button>
        </form>
    )
}

export default TodoForm
