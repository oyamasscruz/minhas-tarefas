import { Prioridade, Status } from '../utils/Tarefa'

class Tarefa {
  title: string
  description: string
  priority: Prioridade
  status: Status
  id: number

  constructor(
    title: string,
    description: string,
    priority: Prioridade,
    status: Status,
    id: number
  ) {
    this.title = title
    this.description = description
    this.priority = priority
    this.status = status
    this.id = id
  }
}

export default Tarefa
