import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../util/enums/Tarefa'

type FilterState = {
  nameOfTask?: string
  typeOfFilter: 'priority' | 'status' | 'every'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  nameOfTask: '',
  typeOfFilter: 'every'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeNameOfTask: (state, action: PayloadAction<string>) => {
      state.nameOfTask = action.payload
    },
    changeTypeOfFilter: (state, action: PayloadAction<FilterState>) => {
      state.typeOfFilter = action.payload.typeOfFilter
      state.value = action.payload.value
    }
  }
})

export const { changeNameOfTask, changeTypeOfFilter } = filterSlice.actions
export default filterSlice.reducer
