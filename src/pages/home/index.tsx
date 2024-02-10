import ButtonAdd from '../../components/addButton'
import SideBar from '../../containers/SideBar'
import ToDoList from '../../containers/ToDoList'

const Home = () => (
  <>
    <SideBar showFilter></SideBar>
    <ToDoList></ToDoList>
    <ButtonAdd></ButtonAdd>
  </>
)

export default Home
