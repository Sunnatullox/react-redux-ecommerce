import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/action/productsAction'

function ProductItem({product}) {
  const dispatch = useDispatch()

  const handleAddToCart = (prodItem) =>{
    dispatch(addToCart(prodItem))
  }

  return (
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top m-auto p-3 h-50 "
                style={{ maxWidth: "200px", maxHeight: "200px" }}
                alt="..."
              />
              <div className="card-body">
              {product.title.length > 25 ? (
                <h5 className="card-title">{product.title.slice(0,25)}...</h5>
                ) : (
                  <h5 className="card-title">{product.title}</h5>
              )}
              {product.description.length > 100 ? (
              <p className="card-text">{product.description.slice(0,100)}</p>
                ) : (
                  <p className="card-text">{product.description}</p>
              )}
                <div className="text-center d-flex">
                  <Link to={`/product/${product.id}`} className="btn btn-primary m-auto">Buy Now</Link>
                  <button onClick={() => handleAddToCart(product)}  className="btn btn-danger m-auto">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ProductItem
