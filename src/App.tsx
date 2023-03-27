import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/'

const App: React.FC = () => {
  return (
    <div id='app' className='font-sans'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
