import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { setTask, addTask } from "../../store/TaskStore/taskSlice"

export function TaskForm({ task }) {
    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: task
    })
    const [modalTask, setModalTask] = useState(task)

    let navigate = useNavigate()
    const retourner = () => {
        navigate('/')
    }
    const saveTask = (data) => {
        if (modalTask.id) {
            dispatch(setTask(modalTask))
        }
        else {
            console.log(modalTask)
            dispatch(addTask(modalTask))
        }
        navigate('/')
    }
    return (

        <section className="vh-100 myModal position-absolute">
            <div className="container py-5 h-100">
                <div
                    className="row d-flex justify-content-center align-items-center h-100"
                >
                    <div className="card-modal col col-xl-10">
                        <div className="card" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-5 pb-2">
                                <form action="" className="gap-1 d-flex flex-column" onSubmit={handleSubmit(saveTask)} >
                                    <div className="d-flex justify-content-between mb-1 form-group">
                                        <div className="w-100 pl-2">
                                            <figure >
                                                <blockquote className="blockquote">
                                                    <p>
                                                        <span>title :</span>
                                                        <input id="" className="w-100" {...register("title", { required: true })} />
                                                    </p>
                                                    {errors.title && <p role="alert">{errors.title.message}</p>}

                                                </blockquote>
                                                {
                                                    (modalTask.id) ?
                                                        <figcaption className="blockquote-footer">
                                                            <p className="m-0" >
                                                                cree le  {modalTask.created_at}
                                                            </p>
                                                        </figcaption> : ''
                                                }
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="description d-flex flex-column p-1 gap-1 mb-3 form-group">
                                        <span>description :</span>
                                        <textarea
                                            className="w-100 py-2 px-1 "
                                            id=""
                                            placeholder="ici la description ..."
                                            {...register("description", { required: true })}
                                        ></textarea>
                                        {errors.description && <p role="alert">{errors.description.message}</p>}

                                    </div>
                                    <div className="actionModal">
                                        <p className="d-flex justify-content-end gap-2">
                                            <button
                                                onClick={retourner}
                                                className="btn btn-outline-secondary btn-lg"
                                            >
                                                return
                                            </button>
                                            <button
                                                className="btn btn-primary btn-lg"
                                                type="submit"
                                            >
                                                save
                                            </button>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}