import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { RootReducer } from '../../store'

const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

const ToDoList = () => {
  const { items } = useSelector((state: RootReducer) => state.task)

  return (
    <Container>
      <p>2 tarefas marcadas como: &apos;categoria&apos; e &apos;termo&apos;</p>
      <ul>
        {items.map((t) => (
          <li key={t.title}>
            <Task
              description={t.description}
              title={t.title}
              status={t.status}
              priority={t.priority}
              id={t.id}
            ></Task>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ToDoList
