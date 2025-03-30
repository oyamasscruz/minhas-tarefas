import { useState } from 'react'
import * as S from './styles'

export type Props = {
  titulo: string
  descricao: string
  prioridade: string
  status: string
}

const Tarefa = ({ titulo, descricao, prioridade, status }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.TituloContainer>
        <S.Titulo>{titulo}</S.Titulo>
        <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
        <S.Tag status={status}>{status}</S.Tag>
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
