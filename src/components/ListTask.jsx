import { useContext } from "react"
import { Button } from "./Form/Button"
import { CheckBox } from "./Form/Checkbox"
import { DeleteItemTask } from "./Task/DeleteItemTask"
import { UpdateItemTask } from "./Task/UpdateItemTask"
import { TodoContext } from "./Context/TodoContext"

export const ListTask = ({ todos, setTodos }) => {
    const { newTodo, setNewTodo } = useContext(TodoContext)

    const handleDelete = (e) => {
        // const value = e.target.textContent;
        const id = parseInt(e.target.id)

        let newTodo = [...todos]
        const todo_delete = newTodo.findIndex((todo, index) => todo.id === id)
        newTodo.splice(todo_delete, 1)
        setTodos(newTodo)

    }
    const handleUpdate = (e) => {
        const id = parseInt(e.target.id)
        // console.log(id)
        const todo_update = todos.filter((todo) => todo.id === id)
        const updated = todo_update[0]
        setNewTodo(updated)
        console.log(newTodo)
    }
    return (
        <ul>
            {todos.map((todo, i) => {
                return <li className="d-flex flex-column" key={todo.id}>
                    <h6>
                        <CheckBox
                            id={todo.id}
                            value={todo.nom}
                            label={todo.nom}
                            completed={todo.completed}
                            todos={todos}
                            setTodos={setTodos} />
                    </h6>
                    <div className="d-flex justify-content-lg-between gap-2">
                        <UpdateItemTask todo={todo} todos={todos} setTodos={setTodos} onClick={handleUpdate} />
                        <DeleteItemTask todo={todo} todos={todos} setTodos={setTodos} onClick={handleDelete} />
                    </div>
                </li>
            })}
        </ul>
    )
}