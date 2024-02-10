import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import variables from '../../styles/variables'

const Circle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 64px;
  width: 64px;
  background-color: ${variables.green};
  color: #fff;
  text-decoration: none;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
`

const ButtonAdd = () => <Circle to="/new">+</Circle>

export default ButtonAdd
