import Tarefa from '../../components/Tarefa'
import { Container } from './style'

const tarefas = [
  {
    titulo: 'Ir a academia',
    descricao: 'Ver aula 3 da Ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no e-mail',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Ir a academia',
    descricao: 'Fazer treino de perna',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)
export default ListaDeTarefas
