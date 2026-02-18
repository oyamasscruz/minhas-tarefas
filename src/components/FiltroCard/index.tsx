import { useDispatch } from 'react-redux'
import { Prioridade, Status } from '../../utils/Tarefa'
import { alterarFiltro } from '../../store/reducers/filtro'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  legend: string
  criterio: 'status' | 'prioridade' | 'todas'
  valor?: Status | Prioridade
}

const FiltroCard = ({ legend, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)
  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }
  const verificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') {
      return tarefas.tarefas.length
    }
    if (criterio === 'prioridade') {
      return tarefas.tarefas.filter((item) => item.priority === valor).length
    }
    if (criterio === 'status') {
      return tarefas.tarefas.filter((item) => item.status === valor).length
    }
  }

  const counter = contarTarefas()

  return (
    <div
      onClick={filtrar}
      className={`p-[8px] border-2 rounded-md cursor-pointer transition  ${
        verificaAtivo() ? 'border-blue-700 text-blue-700' : 'border-black'
      }`}
    >
      <span className="block font-bold text-[24px] leading-tight">
        {counter}
      </span>
      <span className="text-[14px] font-normal leading-tight">{legend}</span>
    </div>
  )
}
export default FiltroCard
