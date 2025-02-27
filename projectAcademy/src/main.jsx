import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/HomeInstrutor/Home'
import AulaInstrutor from './pages/AulasInstrutor/AulaInstrutor'
import FrequenciaInstrutor from './pages/FrequenciaInstrutor/FrequenciaInstrutor'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
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
