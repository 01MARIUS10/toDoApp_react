import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Datetime from "../../components/atoms/Datetime"

import { useDispatch } from "react-redux"
import { removeTask, checkStatus } from "../../store/TaskStore/taskSlice"
import { useEffect, useState } from "react"

export function TaskListItem({ task }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [status, setStatus] = useState(task.status)
    useEffect(() => {
        dispatch(checkStatus({ id: task.id, status: status }))
    }, [status])

    const animation = {
        initial : { opacity: 0 },
        animate : { opacity: 1 },
        transition : { delai: 0, duration: .8 },
        exit: { scale:0 }
    }
    const editTask = (id) => {
        navigate(`/task/${id}`)
    }

    return (

        <motion.tr
            className="fw-normal"
            {...animation}
            layout
        >
            <th className=" h-100 align-middle">
                <p
                    className="mb-0 rounded-circle d-flex justify-content-center align-items-center"
                    style={{ width: "25px", height: "25px", background: "#bababa" }}
                >{task.id}
                </p>
            </th>
            <th className="h-100 align-middle">
                <div className="form-check form-switch  h-100">
                    <input className="form-check-input" checked={status} onChange={(e) => setStatus(e.target.checked)} type="checkbox" id="flexSwitchCheckDefault" />
                </div>
            </th>
            <td className="align-middle">
                <p className="mb-0"> {task.title}</p>
            </td>
            <td className="align-middle">
                <p className="mb-0"> {task.description}</p>
            </td>
            <td className="align-middle">
                <Datetime datetime={task.created_at}/>
            </td>
            <td className="align-middle">
                <p className="m-0 d-flex gap-1">
                    <span onClick={() => editTask(task.id)}> <img className="icon" src="/icons/pen.png" alt="" /> </span>
                    <span onClick={() => dispatch(removeTask(task.id))}> <img className="icon" src="/icons/remove.png" alt="" /> </span>
                </p>
            </td>
        </motion.tr>
    )
}