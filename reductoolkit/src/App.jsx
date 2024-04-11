
import { Provider } from 'react-redux'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'
import Store from './Store/store'

function App() {

  return (
    <Provider store={Store}>
     
     <h1 className='bg-pink-300'>Udit Tyagi</h1>
     <AddTodo />
     <Todos />
    </Provider>
  )
}

export default App
