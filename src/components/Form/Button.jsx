import React, { useContext } from "react"
import { TodoContext } from "../Context/TodoContext"


export const Button = ({ type, value, className, name, id = null, onClick }) => {
    const { newTodo, setNewTodo } = useContext(TodoContext)

    return (
        <button
            id={id}
            type={type}
            className={className}
            disabled={newTodo.nom === "" && name == "add"}
            name={name}
            onClick={onClick}
        >
            {value}
        </button>
    )
}