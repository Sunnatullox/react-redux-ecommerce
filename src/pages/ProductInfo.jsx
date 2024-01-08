import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getRecommendationProduct,
  getSingleProduct,
} from "../redux/action/productsAction";
import { Navbar } from "../components";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import LoadingSkelationProduct from "../components/LoadingSkelationProduct";
import ShowSimpleProduct from "../components/ShowSimpleProduct";
import LoadingRecommendProduct from "../components/LoadingRecommendProduct";

function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    singleProdReducer: { singleProduct, loading: singleProdLoading },
    recomendProdReducer: { recommenProducts, loading: recomendProdLoading },
  } = useSelector((state) => state);

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id, toast));
    }
  }, [id]);

  useEffect(() => {
    if (singleProduct) {
      dispatch(getRecommendationProduct(singleProduct.category, toast));
    }
  }, [singleProduct]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {singleProdLoading || recomendProdLoading ? (
            <LoadingSkelationProduct />
          ) : (
            <ShowSimpleProduct singleProduct={singleProduct} />
          )}
        </div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2>You may also Like</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
              {singleProdLoading || recomendProdLoading ? (
                <LoadingRecommendProduct />
              ) : (
                <div className="my-4 my-4">
                  <div className="d-flex">
                    {recommenProducts.map((item) => (
                      <div key={item.id} className="card mx-4 text-center">
                        <img
                          src={item.image}
                          alt="img"
                          className="card-img-top m-auto p-3 h-50 "
                          style={{ maxWidth: "200px", maxHeight: "200px" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            {item.title.substring(0, 15)}...
                          </h5>
                          <h6 className="fs-5 my-4">${singleProduct?.price}</h6>
                        </div>
                        <div className="card-body">
                          <Link
                            to={`/product/${item.id}`}
                            className="btn btn-dark m-1"
                          >
                            Buy Now
                          </Link>
                          <button className="btn btn-dark m-1">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductInfo;
