import { Link } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { LiaUserPlusSolid } from "react-icons/lia"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Navbar() {
  const { cart } = useSelector((state) => state.productReducer);
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
          <div className="buttons text-center">
            <Link to='/login' className="btn btn-outline-dark m-2">
              <LuUser2 /> Login
            </Link>
            <Link to='/register' className="btn btn-outline-dark m-2">
              <LiaUserPlusSolid /> Register
            </Link>
            <Link to='/cart' className="btn btn-outline-dark m-2">
              <AiOutlineShoppingCart /> Cart ({cart.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
