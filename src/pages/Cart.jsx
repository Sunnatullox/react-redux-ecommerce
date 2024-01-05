import React from "react";
import { Navbar } from "../components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import EmptyCart from "../components/EmptyCart";
import ShowCart from "../components/ShowCart";
import { MdChevronLeft, MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { LuMinus, LuPlus } from "react-icons/lu";
import {
  decrementProductItem,
  incrementProductItem,
  removeProductItem,
} from "../redux/action/productsAction";

function Cart() {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handelIncrementProductItem = (id) => {
    dispatch(incrementProductItem(id));
  };
  const handelDecrementProductItem = (id) => {
    dispatch(decrementProductItem(id));
  };

  const handleRemoveProductItem = (id) => {
    dispatch(removeProductItem(id));
  };
  return (
    <div>
      <Navbar />
      <div className="container py-3 my-3">
        <h1 className="text-center border-bottom pb-3 border-2">Cart</h1>
        {cart.length > 0 ? (
          <section className="h-100 h-custom">
            <div className="container py-5 h-100">
              <div className="row d-flex flex-nowrap justify-content-center h-100 gap-2">
                <div className="col-8 ">
                  <div
                    className="card card-registration card-registration-2"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="card-body p-0">
                      <div className="row g-1">
                        <div className="col-12">
                          <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                              <h1 className="fw-bold mb-0 text-black">
                                Shopping Cart
                              </h1>
                              <h6 className="mb-0 text-muted">
                                {cart.length} items
                              </h6>
                            </div>
                            {cart.map((prodItem) => (
                              <div
                                key={prodItem.id}
                                className="row mb-4 d-flex justify-content-between align-items-center p-3 border rounded-1"
                              >
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                    src={prodItem.image}
                                    className="img-fluid rounded-3"
                                    alt="Cotton T-shirt"
                                  />
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                  <h6 className="text-muted">
                                    {prodItem.title?.substring(0, 30)}...
                                  </h6>
                                  <h6 className="text-black mb-0">
                                    {prodItem.description.substring(0, 45)}...
                                  </h6>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center justify-content-center gap-1">
                                  <button
                                    disabled={prodItem.qty === 1}
                                    onClick={() =>
                                      handelDecrementProductItem(prodItem.id)
                                    }
                                    className="btn btn-link px-2 border p-0"
                                  >
                                    <LuMinus size={20} />
                                  </button>

                                  <span className="border px-3 rounded-1">
                                    {prodItem.qty}
                                  </span>

                                  <button
                                    onClick={() =>
                                      handelIncrementProductItem(prodItem.id)
                                    }
                                    className="btn btn-link px-2 border p-0"
                                  >
                                    <LuPlus size={20} />
                                  </button>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 className="mb-0">
                                    ${" "}
                                    {(
                                      Number(prodItem.price) * prodItem.qty
                                    ).toFixed(2)}
                                  </h6>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <button
                                    onClick={() =>
                                      handleRemoveProductItem(prodItem.id)
                                    }
                                    className="btn btn-outline-dark d-flex "
                                  >
                                    <MdClose size={20} />
                                  </button>
                                </div>
                              </div>
                            ))}
                            <hr className="my-4" />

                            <div className="pt-5">
                              <h6 className="mb-0">
                                <Link to="/" className="text-body">
                                  <MdChevronLeft size={25} />
                                  Back to shop
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ShowCart cart={cart} />
              </div>
            </div>
          </section>
        ) : (
          <EmptyCart />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
