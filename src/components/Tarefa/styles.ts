import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'prioridade' | 'status'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.mostarda
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  margin-bottom: 32px;
  background-color: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;

  label {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`
export const Tag = styled.span<TagProps>`
  background-color: ${(props) => retornaCorDeFundo(props)};
  color: #fff;
  padding: 4px 8px;
  margin-right: 16px;
  font-weight: bold;
  font-size: 10px;
  border-radius: 8px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  border: none;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  resize: none;
  background-color: transparent;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  width: 100%;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
