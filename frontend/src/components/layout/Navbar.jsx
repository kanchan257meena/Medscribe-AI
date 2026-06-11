import { Link ,useNavigate} from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  const navigate = useNavigate();

const handleLogout = () => {

  localStorage.removeItem("token");

  navigate("/login");

};
  return (
    <nav className="custom-navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <div className="navbar-logo-text">
            <h2 className="logo-text">MedScribe AI</h2>
            <p className="app-tagline">AI-powered clinical documentation</p>
          </div>
        </div>

        <div className="navbar-links">
          <Link to="/" className="home-btn">
            Home
          </Link>
          {/* <button onClick={handleLogout}>Logout</button> */}
          <button className="home-btn" onClick={handleLogout}>
            Logout
          </button>
          {/* <Link to="/login" className="home-btn">
            Login
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
