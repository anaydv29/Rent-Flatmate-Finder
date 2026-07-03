import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaPlusCircle,
  FaUser,
  FaComments,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          🏠 Rent Flatmate Finder
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome className="me-1" />
                Home
              </Link>
            </li>

            {user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/create-listing">
                    <FaPlusCircle className="me-1" />
                    Create Listing
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <FaUser className="me-1" />
                    Dashboard
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/tenant-profile">
                    <FaUser className="me-1" />
                    Profile
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/chat">
                    <FaComments className="me-1" />
                    Chat
                  </Link>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-danger ms-3"
                    onClick={logout}
                  >
                    <FaSignOutAlt className="me-1" />
                    Logout
                  </button>
                </li>
              </>
            )}

            {!user && (
              <li className="nav-item">
                <Link className="btn btn-light ms-3" to="/login">
                  <FaSignInAlt className="me-1" />
                  Login
                </Link>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;