import styled from 'styled-components'
import Task from '../../components/Task'
import * as enums from '../../util/enums/Tarefa'

const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

const tasksArray = [
  {
    title: 'Ver aula',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.CONCLUIDA,
    description: 'Assistir aula 8'
  },
  {
    title: 'Academia',
    priority: enums.Priority.NORMAL,
    status: enums.Status.PENDENTE,
    description: 'Ir a academia'
  },
  {
    title: 'Pagar conta',
    priority: enums.Priority.URGENTE,
    status: enums.Status.CONCLUIDA,
    description: 'Conta luz'
  }
]

const ToDoList = () => (
  <Container>
    <p>2 tarefas marcadas como: &apos;categoria&apos; e &apos;termo&apos;</p>
    <ul>
      {tasksArray.map((t) => (
        <li key={t.title}>
          <Task
            description={t.description}
            title={t.title}
            status={t.status}
            priority={t.priority}
          ></Task>
        </li>
      ))}
    </ul>
  </Container>
)

export default ToDoList
