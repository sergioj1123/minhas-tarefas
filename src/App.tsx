import { Provider } from 'react-redux'
import SideBar from './containers/SideBar'
import ToDoList from './containers/ToDoList'
import GlobalStyle, { Container } from './styles/index'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <Container>
        <SideBar></SideBar>
        <ToDoList></ToDoList>
      </Container>
    </Provider>
  )
}

export default App
