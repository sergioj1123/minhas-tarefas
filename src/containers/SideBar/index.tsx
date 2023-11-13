import styled from 'styled-components'
import FilterCard from '../../components/FilterCard'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { changeNameOfTask } from '../../store/reducers/filter'
import * as enums from '../../util/enums/Tarefa'

const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

const Filter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

const Input = styled.input`
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  border-radius: 8px;
  border-color: #666666;
  color: #666666;
  width: 100%;
`

const SideBar = () => {
  const dispatch = useDispatch()
  const { nameOfTask } = useSelector((state: RootReducer) => state.filter)

  return (
    <Aside>
      <div>
        <Input
          type="text"
          placeholder="Buscar"
          value={nameOfTask}
          onChange={(event) => dispatch(changeNameOfTask(event.target.value))}
        />
        <Filter>
          <FilterCard
            toDoType="Pendentes"
            typeOfFilter="status"
            value={enums.Status.PENDENTE}
          ></FilterCard>
          <FilterCard
            toDoType="Concluidas"
            typeOfFilter="status"
            value={enums.Status.CONCLUIDA}
          ></FilterCard>
          <FilterCard
            toDoType="Urgentes"
            typeOfFilter="priority"
            value={enums.Priority.URGENTE}
          ></FilterCard>
          <FilterCard
            toDoType="Importantes"
            typeOfFilter="priority"
            value={enums.Priority.IMPORTANTE}
          ></FilterCard>
          <FilterCard
            toDoType="Normal"
            typeOfFilter="status"
            value={enums.Priority.NORMAL}
          ></FilterCard>
          <FilterCard toDoType="Todas" typeOfFilter="every"></FilterCard>
        </Filter>
      </div>
    </Aside>
  )
}

export default SideBar
