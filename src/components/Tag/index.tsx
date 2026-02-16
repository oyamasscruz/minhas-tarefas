import { Prioridade, Status } from '../../utils/Tarefa'

type Props = {
  priority?: Prioridade
  status?: Status
}

const cssPriorityClasses: Record<Prioridade, string> = {
  [Prioridade.IMPORTANTE]: 'bg-orange-500',
  [Prioridade.NORMAL]: 'bg-gray-400',
  [Prioridade.URGENTE]: 'bg-red-600'
}

const cssStatusClasses: Record<Status, string> = {
  [Status.CONCLUIDA]: 'bg-lime-400',
  [Status.PENDENTE]: 'bg-yellow-400'
}

const Tag = ({ priority, status }: Props) => {
  return (
    <>
      <span
        className={`"block px-[10px] py-[8px] rounded-xl mr-[16px] text-white text-[8px] font-bold" ${cssPriorityClasses[priority]}`}
      >
        {priority}
      </span>
      <span
        className={`"block px-[10px] py-[8px] rounded-xl mr-[16px] text-white text-[8px] font-bold" ${cssStatusClasses[status]}`}
      >
        {status}
      </span>
    </>
  )
}

export default Tag
