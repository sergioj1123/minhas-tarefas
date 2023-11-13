import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { changeTypeOfFilter } from '../../store/reducers/filter'
import * as enums from '../../util/enums/Tarefa'
import { RootReducer } from '../../store'

const Card = styled.div<PropsActiveSearch>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.active ? '#ffffff' : '#fcfcfc')};
  color: ${(props) => (props.active ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`
const Accountant = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

const Label = styled.span`
  font-size: 14px;
`

type Props = {
  toDoType: string
  typeOfFilter: 'priority' | 'status' | 'every'
  value?: enums.Priority | enums.Status
}

type PropsActiveSearch = {
  active: boolean
}

const FilterCard = ({ toDoType, typeOfFilter, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, task } = useSelector((state: RootReducer) => state)

  const activeValidation = () => {
    const sameFilter = filter.typeOfFilter === typeOfFilter
    const sameValue = filter.value === value
    return sameFilter && sameValue
  }

  const activeSearch = activeValidation()

  const filterBar = () => {
    dispatch(changeTypeOfFilter({ typeOfFilter, value }))
  }

  const taskCount = () => {
    if (typeOfFilter === 'every') {
      return task.items.length
    }
    return typeOfFilter === 'priority'
      ? task.items.filter((item) => item.priority === value).length
      : task.items.filter((item) => item.status === value).length
  }

  const accountant = taskCount()

  return (
    <Card active={activeSearch} onClick={filterBar}>
      <Accountant>{accountant}</Accountant>
      <Label>{toDoType}</Label>
    </Card>
  )
}

export default FilterCard
