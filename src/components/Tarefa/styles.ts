import styled from 'styled-components'

export const Card = styled.div`
  margin-bottom: 32px;
  background-color: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
`
export const TituloContainer = styled.div`
  padding: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Tag = styled.span`
  background-color: #f0c11a;
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
  margin-bottom: 16px;
  resize: none;
  background-color: transparent;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  width: 100%;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #c23616;
  border-radius: 8px;
  margin-right: 8px;
`
