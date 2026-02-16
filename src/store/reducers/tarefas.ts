import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import { Prioridade, Status } from '../../utils/Tarefa'

type TarefasState = {
  tarefas: Tarefa[]
}

const initialState: TarefasState = {
  tarefas: [
    {
      title: 'Estudar TypeScript',
      description: 'Rever aula 7 da EBAC',
      priority: Prioridade.URGENTE,
      status: Status.CONCLUIDA,
      id: 0
    },
    {
      title: 'Estudar JavaScript',
      description: 'Rever aula 4 da EBAC',
      priority: Prioridade.NORMAL,
      status: Status.CONCLUIDA,
      id: 2
    },
    {
      title: 'Estudar React',
      description: 'Rever aula 17 da EBAC',
      priority: Prioridade.IMPORTANTE,
      status: Status.PENDENTE,
      id: 3
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.tarefas = state.tarefas.filter(
        (tarefa) => tarefa.id !== action.payload
      )
    },
    // não se pode usar o mesmo nome para o paramêtro, por isso estou usando o t, ao inves tarefa

    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.tarefas.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.tarefas[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions
export default tarefasSlice.reducer
