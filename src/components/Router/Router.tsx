import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SettingsPage from '../../pages/SettingsPage/SettingsPage'
import GamePage from '../../pages/GamePage/GamePage'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SettingsPage />} />
      <Route path='/game' element={<GamePage />} />
    </Routes>
  </BrowserRouter>
)

export default Router