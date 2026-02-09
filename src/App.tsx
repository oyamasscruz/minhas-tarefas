import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'

function App() {
  return (
    <div className="grid grid-cols-[224px_1fr] font-roboto">
      <BarraLateral />
      <ListaDeTarefas />
    </div>
  )
}
export default App
