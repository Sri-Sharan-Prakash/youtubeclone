import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Feed from './Pages/Feed'
import Video from './Pages/Video'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' Component={Home} >
            <Route path='/' Component={Feed} />
            <Route path='/video/:id' Component={Video} />
          </Route>
      </Routes>  
    </>
  )
}

export default App
