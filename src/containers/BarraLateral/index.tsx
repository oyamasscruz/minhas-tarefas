import FiltroCard from '../../components/FiltroCard'

const BarraLateral = () => {
  return (
    <aside className="p-4 h-screen">
      <input
        type="text"
        placeholder="Buscar"
        className="p-[2px] w-full border-2 border-black rounded-md mb-[16px] text-black font-bold"
      />
      <div className="grid grid-cols-2 gap-[6px]">
        <FiltroCard counter={3} legend="pendentes" />
        <FiltroCard counter={4} legend="concluídas" />
        <FiltroCard counter={2} legend="importantes" />
        <FiltroCard counter={2} legend="urgentes" />
        <FiltroCard counter={3} legend="normal" />
        <FiltroCard active counter={7} legend="todas" />
      </div>
    </aside>
  )
}
export default BarraLateral
