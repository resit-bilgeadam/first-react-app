import React from 'react';


const INITIAL_TODOS = [
    {id: Math.random(), title: 'Todo 1', completed: false},
    {id: Math.random(), title: 'Todo 2', completed: true},
    {id: Math.random(), title: 'Todo 3', completed: false},
]


function TodoCard(props) {
    return (
        <div className='todo-card'>
            <h4 className='todo-title'>{props.title}</h4>

            <button className='btn'>Delete</button>
        </div>
    )
}


function Todos() {
    const [todos, setTodos] = React.useState(INITIAL_TODOS);
    const [title, setTitle] = React.useState('');

    const changeTodoTitle = (event) => setTitle(event.target.value);

    const addTodo = (event) => {
        event.preventDefault()

        const newTodo = {
            id: Math.random(),
            title: title,
            completed: false
        }

        setTodos([...todos, newTodo]);
    }

    return(
        <div>
            <h1>Todo Widget</h1>

            <div className='todo-card todo-form-wrapper'>
                <form onSubmit={addTodo}>
                    <label className='label' htmlFor='title-input'>Todo Title</label>
                    <input 
                        name='title-input'
                        className='input' 
                        placeholder='Enter your todo...'
                        type='text'
                        id='title-input'
                        value={title}
                        onChange={changeTodoTitle}  />

                    <button type='submit' className='btn'>
                        Add Todo
                    </button>
                </form>
            </div>

            <div className='todos-wrapper'>
                {todos.map(todo => <TodoCard key={todo.id} title={todo.title} />)}
            </div>
        </div>
    )
}


export default Todos;
