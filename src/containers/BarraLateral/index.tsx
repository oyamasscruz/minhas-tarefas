import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { Campo } from '../../styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="procurar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.GridFiltro>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            legenda="pendente"
            criterio="status"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDA}
            legenda="concluída"
            criterio="status"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            legenda="urgente"
            criterio="prioridade"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            legenda="normal"
            criterio="prioridade"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            legenda="importante"
            criterio="prioridade"
          />
          <FiltroCard legenda="todas" criterio="todas" />
        </S.GridFiltro>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
