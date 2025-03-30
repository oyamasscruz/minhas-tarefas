import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../util/enums/Tarefa'

export type Props = {
  titulo: string
  descricao: string
  prioridade: enums.Prioridade
  status: enums.Status
}

const Tarefa = ({ titulo, descricao, prioridade, status }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.TituloContainer>
        <S.Titulo>{titulo}</S.Titulo>
        <S.Tag parametro="prioridade" prioridade={prioridade}>
          {prioridade}
        </S.Tag>
        <S.Tag parametro="status" status={status}>
          {status}
        </S.Tag>
      </S.TituloContainer>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao onClick={() => setEstaEditando(false)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.BotaoSalvar onClick={() => setEstaEditando(true)}>
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover>Cancelar</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
