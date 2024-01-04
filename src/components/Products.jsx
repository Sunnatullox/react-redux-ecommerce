import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/action/productsAction";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import HomeLoding from "./HomeLoding";

function Products() {
  const { loading, error, products } = useSelector(
    (state) => state.productReducer
  );
  const [filterProducts, setFilterProducts] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(toast,filterProducts));
  }, [dispatch, filterProducts]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? (
            <HomeLoding />
          ) : (
            <>
              <div className="buttons text-center py-5">
                <button
                  className={`${filterProducts === null && "bg-dark text-white"}  btn btn-outline-dark btn-sm m-2`}
                  onClick={() => setFilterProducts(null)}
                >
                  All
                </button>
                <button
                  className={`${filterProducts === "men's clothing" && "bg-dark text-white"} btn btn-outline-dark btn-sm m-2`}
                  onClick={() => setFilterProducts("men's clothing")}
                >
                  Men's Clothing
                </button>
                <button
                  className={`${filterProducts === "women's clothing" && "bg-dark text-white"} btn btn-outline-dark btn-sm m-2`}
                  onClick={() => setFilterProducts("women's clothing")}
                >
                  Wonmen's Clothing
                </button>
                <button
                  className={`${filterProducts === "jewelery" && "bg-dark text-white"} btn btn-outline-dark btn-sm m-2`}
                  onClick={() => setFilterProducts("jewelery")}
                >
                  Jewelery
                </button>
                <button
                  className={`${filterProducts === "electronics" && "bg-dark text-white"} btn btn-outline-dark btn-sm m-2`}
                  onClick={() => setFilterProducts("electronics")}
                >
                  Electronics
                </button>
              </div>
              {products.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}



export default Products;
