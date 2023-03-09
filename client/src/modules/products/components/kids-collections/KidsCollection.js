import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PRODUCT_FEATURE_KEY} from "../../../../redux/products/product.reducer";
import {getKidsCollection} from "../../../../redux/products/product.actions";
import Spinner from "../../../layout/components/spinner/Spinner";
import {Link, useNavigate} from "react-router-dom";
import {addToCart} from "../../../../redux/orders/orders.actions";
let KidsCollections = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let productInfo = useSelector((state) => {
    return state[PRODUCT_FEATURE_KEY];
  });
  let {products, loading, errorMessage} = productInfo;

  useEffect(() => {
    dispatch(getKidsCollection());
  }, []);
  // clickAddToCart
  let clickAddToCart = (product) => {
    dispatch(addToCart(product, "1", navigate));
  };
  return (
    <React.Fragment>
      <section className="p-3 bg-heists">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">Kids Collections</p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {products.length > 0 && (
            <React.Fragment>
              <section>
                <div className="container-fluid mt-3">
                  <div className="row">
                    {products.map((product) => {
                      return (
                        <React.Fragment>
                          <div className="col-md-3 product-box mb-3">
                            <div className="product-card ">
                              <div className="imgBox">
                                <Link to={`/products/${product._id}`}>
                                  <img
                                    // src="https://m.media-amazon.com/images/I/61oav6m1AqL._UL1500_.jpg"
                                    src={product.image}
                                    alt={product.name}
                                    className="product"
                                  />
                                </Link>
                              </div>

                              <div className="contentBox">
                                <h3>{product.name}</h3>
                                <h2 className="price">
                                  <i className="fa fa-rupee-sign mr-2" />
                                  {product.price}
                                </h2>
                                <button
                                  className="buy"
                                  onClick={clickAddToCart.bind(this, product)}
                                >
                                  ADD TO CART
                                </button>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </section>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default KidsCollections;
