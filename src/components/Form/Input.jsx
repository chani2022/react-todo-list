import { useContext } from "react"
import { TodoContext } from "../Context/TodoContext"

export const Input = ({ type, placeholder, className }) => {
    const { newTodo, setNewTodo } = useContext(TodoContext)
    return (
        <input
            type={type}
            name="todo"
            id="todo"
            className={className}
            placeholder={placeholder}
            value={newTodo.nom}
            onChange={(e) => setNewTodo(todo => ({ ...todo, nom: e.target.value, completed: false }))}
        />
    )
}