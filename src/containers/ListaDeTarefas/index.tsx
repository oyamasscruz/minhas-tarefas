import Tarefa from '../../components/Tarefa'

const ListaDeTarefas = () => {
  return (
    <main className="m-[40px]">
      <p>2 tarefas marcadas como: &quot;todas&ldquo; e &quot;termo&ldquo;</p>
      <div>
        <Tarefa />
        <Tarefa />
      </div>
    </main>
  )
}
export default ListaDeTarefas
