import React from "react";
import { Navbar } from "../components";
import Footer from "../components/Footer";
import ShowCart from "../components/ShowCart";
import { useSelector } from "react-redux";

function CheckOutpage() {
  const { cart } = useSelector((state) => state.productReducer);
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center pb-3 border-bottom border-2">Checkout</h1>
        <div className="conatiner">
          <div className="row my-4">
            <div className="col-md-7 col-lg-8">
              
            </div>
            <ShowCart cart={cart} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckOutpage;
