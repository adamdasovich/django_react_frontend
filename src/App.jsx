import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import Delete from './components/Delete'
import Root from  './components/Root'
import Country from './components/Country'
import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
  
  <Route path='/' element={<Root />} >
    <Route index element={<Home />} />
    <Route path='/edit/:id' element={<Edit />}/>
    <Route path='/create' element={<Create />} />
    <Route path='/delete/:id' element={<Delete />} />
    <Route path='/country/:id' element={<Country />} />
  </Route>

))
function App() {  
  
  return (
    <RouterProvider router={router} />
  )
}

export default App


{/* <Navbar content={
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/delete/:id' element={<Delete />} />
      </Routes>
        }
    />       */}