import { Link } from "react-router-dom";

function ShowCart({ cart=[] }) {
  let subTotal = 0;
  let shipping = 20.0;
  let totalItems = 0;
  cart.forEach((item) => {
    subTotal += item.price * item.qty;
    totalItems += item.qty;
    return;
  });

  return (
    <div className="col-md-5 col-lg-4">
      <div className="card mb-4">
        <div className="card-header py-3 bg-light">
          <h5 className="mb-0">Order Summary</h5>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-content-center border-0 px-0 pb-0">
              Products ({totalItems})<span>${Math.round(subTotal)}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-content-center px-0 pb-0">
              Shipping <span>${shipping}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-content-center border-0 px-0 pb-3">
              <div>
                <strong>Total amount</strong>
              </div>
              <span>
                <strong>${Math.round(subTotal + shipping)}</strong>
              </span>
            </li>
          </ul>
          <Link to="/checkout" className="btn btn-dark btn-lg btn-block">
            Go to checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShowCart;
