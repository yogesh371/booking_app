import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">Hotelbooking</span>
            <div className="navItems">
                <button className="navButton">Regster</button>
                <button className="navButton">Login</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar