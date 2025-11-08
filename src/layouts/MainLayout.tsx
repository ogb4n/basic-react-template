import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

function MainLayout() {
    return (
        <div className="max-w-5xl mx-auto p-8">
            <Navigation />
            <Outlet />
        </div>
    )
}

export default MainLayout
