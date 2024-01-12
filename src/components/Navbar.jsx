import { Link } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { LiaUserPlusSolid } from "react-icons/lia"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Navbar() {
  const { cart } = useSelector((state) => state.cartReducer);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  py-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 px-2" to="/">
          My Ecommerce
        </Link>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="buttons text-center d-flex ">
            {!user ? (
              <>
            <Link to='/login' className="btn btn-outline-dark m-2">
              <LuUser2 /> Login
            </Link>
            <Link to='/register' className="btn btn-outline-dark m-2">
              <LiaUserPlusSolid /> Register
            </Link>
              </>
            ) : (
              <button className="btn btn-outline-dark m-2" onClick={handleLogout}>Logut</button>
            )}
            <Link to='/cart' className="btn btn-outline-dark m-2">
              <AiOutlineShoppingCart /> Cart ({cart.length})
            </Link>
            {user && (
              <div className="dropdown m-2">
              <Link
                className="ropdown-toggle d-flex align-items-center hidden-arrow"
                to="/profile"
              >
                <img
                  src={user?.imageUrl}
                  className="rounded-circle"
                  height="35"
                  title={user.name}
                  width="35"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
              {/* <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </ul> */}
            </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
