import { useRoutes } from 'react-router-dom'
import Header from './layouts/Header'
import Checkout from './pages/checkout'
import Home from './pages/home'
import SingleBeer from './pages/singleBeer'

function App() {
  const routes = useRoutes([
    {
      path: '',
      element: <Header />,
      children: [
        { path: '', element: <Home /> },
        { path: 'beer/:id', element: <SingleBeer /> },
        { path: 'Checkout', element: <Checkout /> },
      ],
    },
  ])
  return routes
}

export default App
