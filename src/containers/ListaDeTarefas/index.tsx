import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )
  const { tarefas } = useSelector((state: RootReducer) => state.tarefas)

  const filtrarTarefas = () => {
    let tarefasFiltradas = tarefas
    // o termo estava considerando falso string vazia
    // por isso colocamos diferente de undefined
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (tarefa) => tarefa.title.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (tarefa) => tarefa.priority === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (tarefa) => tarefa.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return tarefas
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: ${`${criterio}=${valor}`} ${complementacao}`
    }
    return mensagem
  }
  const mensagem = exibeResultadoFiltragem(tarefas.length)
  return (
    <main className="m-[40px]">
      <p className="mt-[40px] mb-[40px] text-[18px] font-bold block">
        {mensagem}
      </p>
      <ul>
        {filtrarTarefas().map((tarefa) => (
          <li key={tarefa.id}>
            <Tarefa
              title={tarefa.title}
              description={tarefa.description}
              priority={tarefa.priority}
              status={tarefa.status}
              id={tarefa.id}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}
export default ListaDeTarefas
