import * as S from './styles'

export type Props = {
  estado?: string
  tipo?: string
}

const Tarefa = ({ estado, tipo }: Props) => (
  <S.Card>
    <S.TituloContainer>
      <S.Titulo>Estudar Programação</S.Titulo>
      <S.Tag estado={'pendente'}>importante</S.Tag>
      <S.Tag estado={'importante'}>pendente</S.Tag>
    </S.TituloContainer>
    <S.Descricao name="" id="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maiores
      sapiente, ad obcaecati esse ipsum, inventore veniam rerum in eum ratione
      assumenda itaque? Qui accusamus eos aut sint ab quasi?
    </S.Descricao>
    <S.BarraAcoes>
      <S.Botao tipo={'editar'}>Editar</S.Botao>
      <S.Botao tipo={'remover'}>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)
export default Tarefa
