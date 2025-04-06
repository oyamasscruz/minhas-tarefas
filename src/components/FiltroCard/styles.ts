import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  border-radius: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5e5e5e')};
  cursor: pointer;
`

export const Contador = styled.span`
  display: block;
  font-weight: bold;
  font-size: 24px;
`

export const Label = styled.span`
  font-size: 14px;
`
