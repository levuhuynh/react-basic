
const Todo = (props) => {
    const { todos, deleteATodo } = props;

    const handleDelete = (id) => {
        deleteATodo(id)
    }

    return (
        <>
            <div style={{ fontSize: "30px", marginBottom: "15px" }}>List todos</div>
            <div className='todos-container'>
                {todos.map(todo => {
                    return (
                        <li className='todo-child' key={todo.id}>{todo.title} <></>
                            &nbsp; &nbsp; <span style={{ cursor: 'pointer' }} onClick={() => { handleDelete(todo.id) }}>[x]</span>
                        </li>
                    )
                }
                )}
            </div>
        </>
    )
}

export default Todo;