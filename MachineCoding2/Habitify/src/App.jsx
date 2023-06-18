
import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './Pages/Home'
import { Archive } from './Pages/Archive'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/archive" element={<Archive/>}/>
      </Routes>
    </div>
  )
}

export default App
