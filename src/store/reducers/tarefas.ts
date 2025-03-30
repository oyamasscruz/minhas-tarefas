import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'JavaScript',
      descricao: 'Estudar o módulo de JavaScript',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.URGENTE
    },
    {
      id: 2,
      titulo: 'TypeScript',
      descricao: 'Estudar o módulo de TypeScript',
      status: enums.Status.CONCLUIDA,
      prioridade: enums.Prioridade.IMPORTANTE
    },
    {
      id: 3,
      titulo: 'Ir a academia',
      descricao: 'Malhar perna',
      status: enums.Status.PENDENTE,
      prioridade: enums.Prioridade.NORMAL
    }
  ]
}

const tarefasSclice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    }
  }
})

export const { remover } = tarefasSclice.actions
export default tarefasSclice.reducer
