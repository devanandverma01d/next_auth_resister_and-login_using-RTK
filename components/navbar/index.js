import Link from "next/link"
import { useRouter } from "next/router"


const Navbar = () => {
    const router = useRouter()
    const handleLogout=()=>{
        localStorage.clear()
        setTimeout(()=>{
            router.push('/')
        },1000)
        
    }
        
        
    
        
 
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="/">Next Auth</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" href="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/register">Register</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" onClick={handleLogout} >Logout</Link>
                    </li> */}
                    <button type="button" onClick={handleLogout}>Logout</button>
                    
                    
                </ul>
            </div>
        </nav>

    </>
  )
}

export default Navbar