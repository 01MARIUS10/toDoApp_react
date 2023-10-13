import { useState } from "react"
import { TaskForm } from "../components/molecules/TaskForm"
import { getCurrentDateTime } from "../composables/date"

export default function AddTask(){
    const task = {
        created_at:getCurrentDateTime(),
        title:"",
        description:"",
        status:0
    }
    return (<TaskForm task={task}/>)
}