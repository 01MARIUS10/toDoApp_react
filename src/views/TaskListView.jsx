import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { TaskListItem } from "./TaskList/TaskListItem"
import { ActiveTask } from "../components/molecules/ActiveTask"

import { useSelector } from "react-redux"
import { useState } from "react"

export default function TaskList() {
    const Tasks = useSelector((state) => state.taskStore.tasks)
    const sort = (a,b) => {
        return 1
    }

    return (
        <div className="card">
            <div className="card-header p-3 d-flex align-items-center justify-content-between">
                <h2 className="mb-0"><i className="fas fa-tasks me-2"></i>Task Lists</h2>
                < ActiveTask />
            </div>
            <div className="">
                <div style={{ overflowY: "scroll" }}>
                    <div
                        className="card-body"
                        data-mdb-perfect-scrollbar="true"
                        style={{ position: "relative", height: "400px" }}
                    >
                        <table className="table mb-0">
                            <thead>
                                <tr>
                                    <th className="arrange" scope="col">Numero</th>
                                    <th className="arrange" scope="col">Status</th>
                                    <th className="arrange" scope="col" >Task</th>
                                    <th className="arrange" scope="col" >Description</th>
                                    <th className="arrange" scope="col" >date</th>
                                    <th className="arrange" scope="col" >Actions</th>
                                </tr>
                            </thead>
                            <tbody
                                
                            >
                                {
                                    [...Tasks].sort(sort).map((task, index) => (
                                        <TaskListItem task={task} key={`task${task.id}`} />
                                    ))
                                }
                            </tbody>
                        </table>
                        {
                            Tasks.length == 0 ?
                                <div className="no_content" name="noContent">
                                    <p className="border border-danger text-center">
                                        No content
                                    </p>
                                </div> : ""
                        }
                    </div>
                </div>
            </div>
            <div className="card-footer text-end p-3">
                <Link to={{ pathname: "/task/new" }}>
                    <button className="btn btn-primary">Add Task</button>
                </Link>
            </div>
        </div>

    );
}