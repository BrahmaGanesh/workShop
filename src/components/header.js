import { Link } from "react-router-dom";
function Navbar(){
  return(
    <>
    <header>
      <div className="logo">
       <img src={"../images/logo.jpg"} alt="logo" style={{width:"40px",height:"40px",marginRight:"10px"}} />
        <h2>Ganesh Shop Logo</h2>
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