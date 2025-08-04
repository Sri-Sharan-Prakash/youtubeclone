import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Feed from './Pages/Feed'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' Component={Home} >
            <Route path='/' Component={Feed} />
          </Route>
      </Routes>  
    </>
  )
}

export default App
