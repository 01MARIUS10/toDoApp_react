
import { useSelector } from "react-redux"


export function ActiveTask(){
    const selectActiveTask = (state) => state.taskStore.tasks.filter((e)=>e.status)
    const nbrActiveTask = useSelector(selectActiveTask).length

    return (
        <p className="mb-0 h5 mx-5">Tache non acheve : {nbrActiveTask}</p>
    )
}