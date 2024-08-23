export const CheckBox = ({ id, value, label, completed, todos, setTodos }) => {
    const toggleCompleted = (e) => {
        const all_todo = todos.map((tache) => {
            if (tache.id == e.target.id) {
                tache.completed = !tache.completed
            }
            return tache
        })
        setTodos(all_todo)
    }
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox" value={value}
                id={id}
                onChange={toggleCompleted}
                checked={completed} />
            <label
                className={completed === true ? "form-check-label text-decoration-line-through" : "form-check-label"}
                htmlFor="flexCheckDefault"
            >
                {label}
            </label>
        </div>
    )
}