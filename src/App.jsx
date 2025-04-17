import { Cabecalho, Conteudo } from './components'

const App = () => (
  <>
    <Cabecalho nomeUsuario="Matheus"/>
    <Conteudo>
      <h1>Título</h1>
      <p>Texto texto texto</p>
    </Conteudo>
  </>
)

export { App }
