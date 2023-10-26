import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../util/enums/Tarefa'

type TaskState = {
  items: Task[]
}

const initialState: TaskState = {
  items: [
    {
      title: 'Estudar',
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      description: 'Assistir aula 8',
      id: 1
    },
    {
      title: 'Pagar conta',
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      description: 'lUZ',
      id: 2
    },
    {
      title: 'AAAA',
      priority: enums.Priority.URGENTE,
      status: enums.Status.CONCLUIDA,
      description: 'Assistir aula 8',
      id: 3
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id !== action.payload)
    },
    edict: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.items.findIndex((t) => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.items[taskIndex] = action.payload
      }
    }
  }
})

export const { remove, edict } = tasksSlice.actions

export default tasksSlice.reducer
