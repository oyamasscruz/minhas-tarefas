import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Circulo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 40px;
  text-decoration: none;
`
export default Circulo
