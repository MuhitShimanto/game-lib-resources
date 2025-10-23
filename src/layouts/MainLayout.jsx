import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default MainLayout