import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import { Prioridade, Status } from '../../utils/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar TypeScript',
      'Rever aula 7 da EBAC',
      Prioridade.URGENTE,
      Status.CONCLUIDA,
      1
    ),
    new Tarefa(
      'Estudar JavaScript',
      'Rever aula 4 da EBAC',
      Prioridade.NORMAL,
      Status.CONCLUIDA,
      2
    ),
    new Tarefa(
      'Estudar REACT',
      'Rever aula 17 da EBAC',
      Prioridade.IMPORTANTE,
      Status.PENDENTE,
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
