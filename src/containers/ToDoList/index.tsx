import styled from 'styled-components'
import Task from '../../components/Task'

const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

const ToDoList = () => (
  <Container>
    <p>2 tarefas marcadas como: &apos;categoria&apos; e &apos;termo&apos;</p>
    <ul>
      <li>
        <Task></Task>
      </li>
      <li>
        <Task></Task>
      </li>
      <li>
        <Task></Task>
      </li>
      <li>
        <Task></Task>
      </li>
      <li>
        <Task></Task>
      </li>
    </ul>
  </Container>
)

export default ToDoList
