import { Link } from "react-router-dom";
function Navbar(){
  return(
    <>
    <header>
      <div className="menu">
        <p>menu
          <ul className="drop-down">
            <li><Link to="/">Home</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </p>
      </div>
      <div className="logo">
       <img src={"../images/logo.png"} alt="logo"/>
        <h2>NEW SRI RAMA LATHE WORKS</h2>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}
export default Navbar