import Dash from './Component/dash';
import About from './Component/About';
import Contact from './Component/Contact';
import Product from './Component/Product';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Dash/></div>
  },
  {
    path: '/About',
    element: <div><About/></div>
  },
  {
    path: '/Contact',
    element: <div><Contact/></div>
  },
  {
    path: '/Product',
    element: <div><Product/></div>
  }
])
function App() {

  return (
    <>
      <RouterProvider router ={router}/>
    </>
  )
}

export default App
