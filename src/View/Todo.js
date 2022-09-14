import logo from "../1560.png"

const Todo = (props) => {
    const { todos, deleteATodo } = props;

    const handleDelete = (id) => {
        deleteATodo(id)
    }

    return (
        <>
            <img src={logo} style={{ height: "100px" }} />
            <div style={{ fontSize: "30px", marginBottom: "15px" }}>To Do List</div>
            <div className='todos-container' style={{ textAlign: "left" }}>
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