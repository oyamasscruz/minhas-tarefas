import { configureStore } from '@reduxjs/toolkit'
import remover from './reducers/tarefas'

const store = configureStore({
  reducer: {
    tarefas: remover
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
