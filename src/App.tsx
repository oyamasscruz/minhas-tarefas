import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store/index'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <div className="grid grid-cols-[248px_minmax(0,1fr)] font-roboto">
        <RouterProvider router={rotas} />
      </div>
    </Provider>
  )
}
export default App
