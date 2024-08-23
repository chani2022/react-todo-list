import { useContext, useState } from "react"
import { TodoContext } from "../Context/TodoContext"


export const Form = ({ className, children, setTodos, todos }) => {
    const { newTodo, setNewTodo } = useContext(TodoContext)
    const addTodo = (e) => {
        e.preventDefault()
        if (newTodo.id === "") {
            console.log(newTodo)
            setNewTodo(
                newTodo.id = Date.now()
            )
            setTodos([...todos, newTodo])
            setNewTodo({ ...newTodo, id: "", nom: "" })
        } else {
            const index = todos.findIndex((todo) => todo.id === newTodo.id)
            const todos_to_update = [...todos]
            todos_to_update[index] = newTodo
            setTodos(todos_to_update)
            setNewTodo({ ...newTodo, id: "", nom: "" })
        }

    }
    return (
        <form onSubmit={addTodo} className={className}>
            {children}
        </form>
    )
}