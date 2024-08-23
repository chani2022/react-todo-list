import React, { memo, useMemo, useState } from "react"
import { Button } from "./Form/Button"
import { Form } from "./Form/Form"
import { Input } from "./Form/Input"
import { Header } from "./Header"
import { ListTask } from "./ListTask"
import { ActiveTask } from "./Task/ActiveTask"
import { AllTask } from "./Task/AllTask"
import { CompletedTask } from "./Task/CompletedTask"
import { RemaingTask } from "./Task/RemaingTask"
import { TodoContext } from "./Context/TodoContext"


export const Todo = () => {
    const [todos, setTodos] = useState([])
    const [action, setAction] = useState("all")

    const [newTodo, setNewTodo] = useState({
        id: "",
        nom: "",
        completed: false
    })

    const ordered_todo = useMemo(() => {
        let todo_ordered = null
        switch (action) {
            case 'active':
                todo_ordered = todos.filter((todo) => todo.completed === false)
                break
            case 'completed':
                todo_ordered = todos.filter((todo) => todo.completed === true)
                break;
            default:
                todo_ordered = todos.sort((a, b) => b.id - a.id)
        }

        return {
            order: todo_ordered,
            length: todo_ordered.length
        }
    }, [todos, action])

    const showAllTask = (e) => {
        setAction("all")
    }

    const showTaskActive = (e) => {
        setAction("active")

    }

    const showTaskCompleted = (e) => {
        setAction("completed")
    }

    return (

        <div className="d-flex align-items-center justify-content-center m-3 flex-column">
            <TodoContext.Provider value={{ newTodo, setNewTodo }}>
                <Header />
                <div className="d-flex flex-row gap-2 mt-4">

                    <Form className="row g-3" setTodos={setTodos} todos={todos}>
                        <div className="col-auto">
                            <Input type="text" placeholder="Nouveau tâche" className="form-control" />
                        </div>
                        <div className="col-auto">
                            <Button type="submit" value={newTodo.id === "" ? "Ajouter" : "Editer"} className="btn btn-primary" name="add" />
                        </div>
                    </Form>

                </div>
                <div className="d-flex justify-content-between gap-2 mt-2">
                    <AllTask onClick={showAllTask} />
                    <ActiveTask onClick={showTaskActive} />
                    <CompletedTask onClick={showTaskCompleted} />
                </div>
                <RemaingTask nb_remaining={ordered_todo.length} />
                <ListTask todos={ordered_todo.order} setTodos={setTodos} />
            </TodoContext.Provider>
        </div >
    )
}