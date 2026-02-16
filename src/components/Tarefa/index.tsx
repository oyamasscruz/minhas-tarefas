import { useState } from 'react'
import Tag from '../Tag'
import { Prioridade, Status } from '../../utils/Tarefa'

type Taff = {
  title: string
  description: string
  status: Status
  priority: Prioridade
}

const Tarefa = ({ title, description, status, priority }: Taff) => {
  const [isEditing, setIsEditing] = useState(false)

  function handleEditing() {
    setIsEditing(!isEditing)
  }
  return (
    <div className="p-[40p x] w-full border-1 rounded-b-xl shadow-xl mb-[32px]">
      <h3 className="font-bold text-[18px] mb-[16px]">{title}</h3>
      <div className="mb-[16px]">
        <Tag priority={priority} status={status} />
      </div>
      <textarea name="" id="" className="mb-[16px] resize-none">
        {description}
      </textarea>
      <div className="mt-[16px] p-[18px]">
        {isEditing ? (
          <>
            <button
              onClick={handleEditing}
              className="mr-[8px] px-[12px] py-[6px] text-[12px] bg-green-500 text-white rounded-xl"
            >
              Salvar
            </button>
            <button
              onClick={handleEditing}
              className="mr-[8px] px-[12px] py-[6px] text-[12px] bg-red-700 text-white rounded-xl"
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEditing}
              className="mr-[8px] px-[12px] py-[6px] text-[12px] bg-black text-white rounded-xl"
            >
              Editar
            </button>
            <button className="mr-[8px] px-[12px] py-[6px] text-[12px] bg-red-700 text-white rounded-xl">
              Remover
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Tarefa
