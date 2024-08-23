import { createContext } from "react";

export const TodoContext = createContext({
    newTodo: {
        id: "",
        nom: "",
        completed: false
    },
    setNewTodo: (newTodo) => {

    }
})