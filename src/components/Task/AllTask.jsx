import { Button } from "../Form/Button"


export const AllTask = ({ onClick }) => {
    return (
        <Button
            type="button"
            className="btn btn-primary"
            value="Show all tasks"
            name="all"
            onClick={onClick} />
    )
}