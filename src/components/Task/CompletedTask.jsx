import { Button } from "../Form/Button"


export const CompletedTask = ({ onClick }) => {
    return (
        <Button type="button" className="btn btn-secondary" value="Show completed tasks" name="completed" onClick={onClick} />
    )
}