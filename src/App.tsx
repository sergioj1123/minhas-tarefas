import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle, { Container } from './styles/index'
import store from './store/index'
import Home from './pages/home'
import Register from './pages/register'

const routs = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/new',
    element: <Register></Register>
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <Container>
        <RouterProvider router={routs} />
      </Container>
    </Provider>
  )
}

export default App
