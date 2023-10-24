import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/task'

const store = configureStore({
  reducer: {
    task: tasksReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
