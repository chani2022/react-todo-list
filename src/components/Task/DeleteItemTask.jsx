import { Button } from "../Form/Button"

export const DeleteItemTask = ({ todo, todos, setTodos, onClick }) => {

    return (
        <Button
            className="btn btn-danger btn-sm"
            type="button"
            value={"Supprimer " + todo.nom}
            id={todo.id}
            name={todo.nom}
            onClick={onClick}
        />
    )
}