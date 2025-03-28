import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="procurar" />
      <S.GridFiltro>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluídas" contador={3} />
        <FiltroCard legenda="urgentes" contador={2} />
        <FiltroCard legenda="importantes" contador={2} />
        <FiltroCard legenda="normal" contador={4} />
        <FiltroCard ativo legenda="todas" contador={12} />
      </S.GridFiltro>
    </div>
  </S.Aside>
)

export default BarraLateral
