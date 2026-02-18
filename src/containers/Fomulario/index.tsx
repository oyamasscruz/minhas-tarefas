import { FormEvent, useState } from 'react'
import { Prioridade, Status } from '../../utils/Tarefa'
import Tarefa from '../../models/Tarefa'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      descricao,
      prioridade,
      Status.PENDENTE,
      Math.random()
    )
    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }
  return (
    <div>
      <h2 className="font-bold my-[16px]">Nova Tarefas</h2>
      <form className="max-w-[547px] w-[100%]" onSubmit={cadastrarTarefa}>
        <input
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          className="p-[8px] border border-black rounded-md my-[16px] w-[100%] focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Título"
          type="text"
        />
        <textarea
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          placeholder="Descrição da Tarefa"
          className="p-[8px] resize-none border border-black rounded-md my-[16px] w-[100%] focus:outline-none focus:ring-2 focus:ring-black"
        />
        <div>
          <p className="font-bold my-[8px]">Prioridade</p>
          {Object.values(Prioridade).map((prioridade) => (
            <div className="inline capitalize" key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === Prioridade.NORMAL}
              />
              <label className="mr-[8px]" htmlFor={prioridade}>
                {prioridade}
              </label>
            </div>
          ))}
        </div>
        <button
          className="bg-green-600 text-white font-bold py-[8px] px-[12px] rounded-md cursor-pointer mt-[8px]"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default Formulario
