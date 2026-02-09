export type Props = {
  active?: boolean
}

const FiltroCard = ({ active }: Props) => {
  return (
    <div
      className={`p-[8px] border-[1px] rounded-md ${
        active ? 'border-blue-500' : 'border-black'
      }`}
    >
      <span
        className={`font-bold text-[24px] block ${
          active ? 'text-blue-500' : 'text-black'
        }`}
      >
        3
      </span>
      <span
        className={`text-[14px] ${active ? 'text-blue-500' : 'text-black'}`}
      >
        pendentes
      </span>
    </div>
  )
}
export default FiltroCard
