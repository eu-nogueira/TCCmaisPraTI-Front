import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/HomeInstrutor/Home'
import AulaInstrutor from './pages/AulasInstrutor/AulaInstrutor'
import FrequenciaInstrutor from './pages/FrequenciaInstrutor/FrequenciaInstrutor'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PaginaInicial from './components/paginaInicial/PaginaInicial'
import Cadastro from './components/cadastro/Cadastro'
import Login from './components/login/Login'
import HomeAluno from './pages/HomeAluno/HomeAluno'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/",
    element: <PaginaInicial />
  },
  {
    path: "/aulaInstrutor",
    element: <AulaInstrutor />
  },
  {
    path: "/homeAluno",
    element: <HomeAluno />
  },
  {
    path: "/frequenciaInstrutor",
    element: <FrequenciaInstrutor />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
