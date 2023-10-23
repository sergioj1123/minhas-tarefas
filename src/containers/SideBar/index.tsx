import styled from 'styled-components'
import FilterCard from '../../components/FilterCard'

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

const SideBar = () => (
  <Aside>
    <div>
      <Input type="text" placeholder="Buscar" />
      <Filter>
        <FilterCard></FilterCard>
        <FilterCard></FilterCard>
        <FilterCard></FilterCard>
        <FilterCard></FilterCard>
        <FilterCard></FilterCard>
        <FilterCard ativo></FilterCard>
      </Filter>
    </div>
  </Aside>
)

export default SideBar
