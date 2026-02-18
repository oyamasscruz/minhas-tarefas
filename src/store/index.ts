import { configureStore } from '@reduxjs/toolkit'
import remover from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: remover,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
