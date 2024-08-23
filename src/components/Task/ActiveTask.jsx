import { Button } from "../Form/Button"


export const ActiveTask = ({ onClick }) => {
    return (
        <Button type="button" className="btn btn-success" value="Show active tasks" name="active" onClick={onClick} />
    )
}