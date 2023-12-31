import { Routes, Route, HashRouter } from 'react-router-dom'
import './App.scss'
import MainPage from './pages/MainPage'
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
