import { configureStore } from '@reduxjs/toolkit'

import taskSliceReducer from './TaskStore/taskSlice'

const store = configureStore({
    reducer: {
        taskStore: taskSliceReducer
    }
})

const unsubscribe = store.subscribe(() => {
    console.log('UPDATE state',store.getState())
})

export default store