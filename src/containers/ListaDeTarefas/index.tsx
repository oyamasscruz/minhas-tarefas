import Tarefa from '../../components/Tarefa'
import { Container } from './style'

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <Tarefa />
    <Tarefa />
    <Tarefa />
  </Container>
)
export default ListaDeTarefas
