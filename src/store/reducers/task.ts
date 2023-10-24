import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../util/enums/Tarefa'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar',
      enums.Priority.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'Assistir aula 8',
      1
    ),
    new Task(
      'Estudar',
      enums.Priority.NORMAL,
      enums.Status.PENDENTE,
      'Ir a academia',
      2
    ),
    new Task(
      'Pagar conta',
      enums.Priority.URGENTE,
      enums.Status.CONCLUIDA,
      'Conta luz',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions

export default tasksSlice.reducer
