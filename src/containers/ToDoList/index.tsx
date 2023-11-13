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
  const { nameOfTask, typeOfFilter, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const taskFilter = () => {
    let filterTasks = items
    if (nameOfTask !== undefined) {
      filterTasks = filterTasks.filter(
        (item) => item.title.toLowerCase().search(nameOfTask.toLowerCase()) >= 0
      )

      if (typeOfFilter === 'priority') {
        filterTasks = filterTasks.filter((item) => item.priority === value)
      } else if (typeOfFilter === 'status') {
        filterTasks = filterTasks.filter((item) => item.status === value)
      }
      return filterTasks
    } else {
      return items
    }
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &apos;categoria&apos; e &apos;{nameOfTask}
        &apos;
      </p>
      <ul>
        <li>{nameOfTask}</li>
        <li>{typeOfFilter}</li>
        <li>{value}</li>
      </ul>
      <ul>
        {taskFilter().map((t) => (
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
