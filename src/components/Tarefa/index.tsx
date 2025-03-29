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
        <S.Tag>{prioridade}</S.Tag>
        <S.Tag>{status}</S.Tag>
      </S.TituloContainer>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao onClick={() => setEstaEditando(false)}>Editar</S.Botao>
            <S.Botao>Remover</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Salvar</S.Botao>
            <S.Botao>Cancelar</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
