import FiltroCard from '../../components/Filtro'

type Props = {
  active?: boolean
}

const BarraLateral = ({ active }: Props) => {
  return (
    <aside className="p-[16px]">
      <input
        type="text"
        className={`mb-[16px] rounded-md ${
          active ? 'border-[2px] border-black' : 'border[1px] border-black'
        }`}
      />
      <div className="grid grid-cols-2 gap-[8px]">
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard active />
      </div>
    </aside>
  )
}
export default BarraLateral
