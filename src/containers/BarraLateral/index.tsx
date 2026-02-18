import FiltroCard from '../../components/FiltroCard'
import { useDispatch } from 'react-redux'
import { alterarTermo } from '../../store/reducers/filtro'
import { Prioridade, Status } from '../../utils/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  return (
    <aside className="p-4 h-screen">
      <input
        onChange={(event) => dispatch(alterarTermo(event.target.value))}
        type="text"
        placeholder="Buscar"
        className="p-[2px] w-full border-2 border-black rounded-md mb-[16px] text-black font-bold focus:outline-none focus:ring-2 focus:ring-black"
      />
      <div className="grid grid-cols-2 gap-[6px]">
        <FiltroCard
          valor={Status.PENDENTE}
          criterio="status"
          legend="pendentes"
        />
        <FiltroCard
          valor={Status.CONCLUIDA}
          criterio="status"
          legend="concluídas"
        />
        <FiltroCard
          criterio="prioridade"
          valor={Prioridade.IMPORTANTE}
          legend="importantes"
        />
        <FiltroCard
          criterio="prioridade"
          valor={Prioridade.URGENTE}
          legend="urgentes"
        />
        <FiltroCard
          criterio="prioridade"
          valor={Prioridade.NORMAL}
          legend="normal"
        />
        <FiltroCard criterio="todas" legend="todas" />
      </div>
    </aside>
  )
}
export default BarraLateral
