import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './main-route.js'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <Dashboard />
  </RouterProvider>
)
