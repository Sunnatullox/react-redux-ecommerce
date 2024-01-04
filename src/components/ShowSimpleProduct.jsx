
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


function ShowSimpleProduct({ singleProduct }) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3">
            <img
              src={singleProduct?.image}
              alt={singleProduct?.title}
              className="img-fluid"
              width={400}
              height={400}
            />
          </div>
          <div className="col-md-6 col-sm-8">
            <h4 className="text-uppercase text-muted">
              {singleProduct?.category}
            </h4>
            <h1 className="display-5">{singleProduct?.title}</h1>
            <p className="lead align-items-center d-flex gap-1">
              ({singleProduct?.rating ? singleProduct.rating?.rate : 0}){" "}
              <FaStar size={25} color="yellow" />
            </p>
            <h3 className="display-6 my-4">${singleProduct?.price}</h3>
            <p className="lead">{singleProduct?.description}</p>
            <button className="btn btn-outline-dark">Add to Cart</button>
            <Link className="btn btn-dark mx-3" to="/cart">
              Go to cart
            </Link>
          </div>
        </div>
      </div>
    );
  }

  export default ShowSimpleProduct