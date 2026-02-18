import { Link } from 'react-router-dom'

const BotaoAdicionar = () => (
  <Link
    to="/cadastro"
    className="flex fixed right-[40px] bottom-[40px] w-[64px] h-[64px] rounded-[50%] bg-green-500 text-white text-[40px] items-center justify-center"
  >
    +
  </Link>
)

export default BotaoAdicionar
