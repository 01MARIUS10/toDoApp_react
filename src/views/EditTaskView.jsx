import { TaskForm } from "../components/molecules/TaskForm"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"

export default function EditTask(){
    const {id} = useParams()
    const selectTask = (state) => state.taskStore.tasks.find((e) => e.id == id)
    const task = useSelector(selectTask)

    return (<TaskForm task={task}/>)
}