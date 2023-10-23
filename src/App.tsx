import SideBar from './containers/SideBar'
import ToDoList from './containers/ToDoList'
import GlobalStyle, { Container } from './styles/index'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Container>
        <SideBar></SideBar>
        <ToDoList></ToDoList>
      </Container>
    </>
  )
}

export default App
