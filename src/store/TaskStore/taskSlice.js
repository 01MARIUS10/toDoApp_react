import { createSlice } from '@reduxjs/toolkit'
import { tasks_ } from '../../data/data'
import { getCurrentDateTime } from '../../composables/date'

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: tasks_
    },
    reducers: {
        addTask: (state, action) => {
            // console.log('before updating',action.payload)
            let id = state.tasks.length + 1
            state.tasks.push({ ...action.payload, id: id ,created_at:getCurrentDateTime()})
            // console.log('updated',{ ...action.payload, id: id })
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((e) => e.id != action.payload);
        },
        setTask: (state,action) => {
            console.log('before updating',action.payload)
            let task = state.tasks.find((e) => e.id == action.payload.id);
            let index = state.tasks.indexOf(task);
            state.tasks[index] = action.payload;
            console.log('updated',state.tasks[index])
        },
        checkStatus : (state , action) => {
            let newStatus = Number(action.payload.status)
            let task = state.tasks.find((e) => e.id == action.payload.id);
            let index = state.tasks.indexOf(task);
            state.tasks[index] = {...task,status:newStatus};
        }
    }
})

export const { addTask, setTask, removeTask,findTask, checkStatus } = taskSlice.actions;
export default taskSlice.reducer;


