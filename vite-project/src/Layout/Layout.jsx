
import Sidebar2 from '../scenes/global/Sidebar'
import Topbar from '../scenes/global/Topbar'

export const Layout  = ({children}) => {
    return (
        <div className="app">
            <Sidebar2/>
            <div className='content'>
            <Topbar/>
                {children}
            </div>
        </div>
    )
}