import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <div className="grid grid-cols-[248px_minmax(0,1fr)] font-roboto">
        <BarraLateral />
        <ListaDeTarefas />
      </div>
    </Provider>
  )
}
export default App
