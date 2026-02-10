type Props = {
  legend?: string
}

const Tag = ({ legend }: Props) => {
  return (
    <>
      <span className="px-[8px] py-[4px] bg-orange-500 rounded-xl mr-[16px] text-white text-[8px] font-bold">
        {legend}
      </span>
    </>
  )
}

export default Tag
