import styled from 'styled-components'

const Card = styled.div<PropsWithOutTypeAndAccountant>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#ffffff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
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
  ativo?: boolean
  accountant: number
  toDoType: string
}

type PropsWithOutTypeAndAccountant = Omit<Props, 'accountant' | 'toDoType'>

const FilterCard = ({ ativo, accountant, toDoType }: Props) => (
  <Card ativo={ativo}>
    <Accountant>{accountant}</Accountant>
    <Label>{toDoType}</Label>
  </Card>
)

export default FilterCard
