import { MdChevronLeft } from "react-icons/md";
import { Link } from "react-router-dom";

function EmptyCart() {
    return (
      <div className="container" style={{ height: "47.5vh" }}>
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your cart is Empty</h4>
            <Link to="/" className="btn btn-outline-dark mx-4  d-inline-flex">
              <MdChevronLeft size={25} /> Comntinue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  export default EmptyCart;