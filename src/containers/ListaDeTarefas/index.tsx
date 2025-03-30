import Tarefa from '../../components/Tarefa'
import { Container } from './style'
import * as enums from '../../util/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Ir a academia',
    descricao: 'Ver aula 3 da Ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no e-mail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir a academia',
    descricao: 'Fazer treino de perna',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
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
