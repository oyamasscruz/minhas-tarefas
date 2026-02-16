import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <main className="m-[40px]">
      <p>2 tarefas marcadas como: &quot;todas&ldquo; e &quot;termo&ldquo;</p>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.title}>
            <Tarefa
              title={tarefa.title}
              description={tarefa.description}
              priority={tarefa.priority}
              status={tarefa.status}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
export default ListaDeTarefas
