import styled from 'styled-components'

const Card = styled.div<Props>`
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
}

const FilterCard = (props: Props) => (
  <Card ativo={props.ativo}>
    <Accountant>3</Accountant>
    <Label>Pendentes</Label>
  </Card>
)

export default FilterCard
