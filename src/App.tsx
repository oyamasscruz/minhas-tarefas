import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'

function App() {
  return (
    <>
      <div className="grid grid-cols-[248px_minmax(0,1fr)] font-roboto">
        <BarraLateral />
        <ListaDeTarefas />
      </div>
    </>
  )
}
export default App
