import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import Delete from './components/Delete'
import { Routes, Route } from 'react-router'
import Navbar from './components/navbar/Navbar'
import './App.css'


function App() {
  return (
    <>
    <Navbar content={
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/delete/:id' element={<Delete />} />
      </Routes>
        }
    />      
    </>
  )
}

export default App
