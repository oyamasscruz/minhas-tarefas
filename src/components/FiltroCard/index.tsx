export type Props = {
  active?: boolean
  counter: number
  legend: string
}

const FiltroCard = ({ active, counter, legend }: Props) => {
  return (
    <div
      className={`p-[8px] border rounded-md cursor-pointer transition ${
        active ? 'border-blue-500' : 'border-black'
      }`}
    >
      <span
        className={`block font-bold text-[24px] leading-tight ${
          active ? 'text-blue-500' : 'text-black'
        }`}
      >
        {counter}
      </span>
      <span
        className={`text-[14px] font-normal leading-tight ${
          active ? 'text-blue-500' : 'text-black'
        }`}
      >
        {legend}
      </span>
    </div>
  )
}
export default FiltroCard
