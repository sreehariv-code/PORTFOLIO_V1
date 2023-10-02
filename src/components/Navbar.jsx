const Navbar = () => {
    return (
        <header>
            <div className="logo"><a href="#">Sreehari.</a></div>
            <nav className="navbar">
                <button title="navbar-toggle" type="button" className="nav-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="nav-links">
                    <a href="#about">About.</a>
                    <a href="#experience">Experience.</a>
                    <a href="#">Contact.</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar