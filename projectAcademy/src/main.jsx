import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/HomeInstrutor/Home'
import AulaInstrutor from './pages/AulasInstrutor/AulaInstrutor'
import FrequenciaInstrutor from './pages/FrequenciaInstrutor/FrequenciaInstrutor'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PaginaInicial from './components/paginaInicial/PaginaInicial'
import Cadastro from './components/cadastro/Cadastro'

const router = createBrowserRouter([
  {
    path: "/pagina",
    element: <Home />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },

  {
    path: "/",
    element: <PaginaInicial />
  },
  {
    path: "aulaInstrutor",
    element: <AulaInstrutor />
  },
  {
    path: "frequenciaInstrutor",
    element: <FrequenciaInstrutor />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
