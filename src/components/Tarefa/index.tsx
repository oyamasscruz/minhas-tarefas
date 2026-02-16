import { useState } from 'react'
import Tag from '../Tag'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Taff = TarefaClass

const Tarefa = ({ title, description, status, priority, id }: Taff) => {
  const [isEditing, setIsEditing] = useState(false)
  const [typing, setTyping] = useState(description)
  const dispatch = useDispatch()
  function handleEditing() {
    setIsEditing(!isEditing)
  }
  return (
    <div className="p-[40px] w-full border-1 rounded-b-xl shadow-xl mb-[32px]">
      <h3 className="font-bold text-[18px] mb-[16px]">{title}</h3>
      <div className="mb-[16px]">
        <Tag priority={priority} status={status} />
      </div>

      {isEditing ? (
        <>
          <textarea
            onChange={(event) => setTyping(event.target.value)}
            className="mb-[16px] resize-none"
          >
            {description}
          </textarea>
          <div className="mt-[16px] p-[18px]">
            <button
              onClick={() => {
                dispatch(
                  editar({
                    description: typing,
                    priority,
                    status,
                    title,
                    id
                  })
                )
                handleEditing()
              }}
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
          </div>
        </>
      ) : (
        <>
          <textarea
            value={description}
            readOnly
            className="mb-[16px] resize-none"
          >
            {description}
          </textarea>
          <div className="mt-[16px] p-[18px]">
            <button
              onClick={handleEditing}
              className="mr-[8px] px-[12px] py-[6px] text-[12px] bg-black text-white rounded-xl"
            >
              Editar
            </button>
            <button
              onClick={() => dispatch(remover(id))}
              className="mr-[8px] px-[12px] py-[6px] text-[12px] bg-red-700 text-white rounded-xl"
            >
              Remover
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Tarefa
