import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1>Galaxy UI</h1>
      <nav>
        <ul>
          <li><Link to="/">Nova</Link></li>
          <li><Link to="/milano">Milano</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' Component={Nova} />
        <Route path='/milano' Component={Milano} />
      </Routes>
    </>
  )
}

function Nova() {
  return (<h2>Nova</h2>)
}

function Milano() {
  return (<h2>Milano</h2>)
}

export default App
