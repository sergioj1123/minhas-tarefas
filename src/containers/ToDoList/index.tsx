import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { RootReducer } from '../../store'

const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

const Result = styled.p`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
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

  const task = taskFilter()

  const showFilterResult = (quantity: number) => {
    let message = ''
    const normalText =
      nameOfTask !== undefined && nameOfTask.length > 0
        ? `e "${nameOfTask}"`
        : ``
    message =
      typeOfFilter === 'every'
        ? `${quantity} tarefa(s) encontrada(s) como: "Todas" ${normalText}`
        : `${quantity} tarefa(s) encontrada(s) como: "${`${typeOfFilter}: ${value}`}" ${normalText}`
    return message
  }

  const message = showFilterResult(task.length)

  return (
    <Container>
      <Result>{message}</Result>
      <ul>
        {task.map((t) => (
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
