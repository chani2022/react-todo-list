import { Button } from "../Form/Button"

export const UpdateItemTask = ({ todo, todos, setTodos, onClick }) => {
    return (
        <Button
            className="btn btn-warning btn-sm"
            type="button"
            value={"Edit " + todo.nom}
            name={todo.nom}
            id={todo.id}
            onClick={onClick}
        />
    )
}