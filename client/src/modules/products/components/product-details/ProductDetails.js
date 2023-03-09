import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../../../redux/products/product.actions";
import {PRODUCT_FEATURE_KEY} from "../../../../redux/products/product.reducer";
import {Link} from "react-router-dom";
import {addToCart} from "../../../../redux/orders/orders.actions";
let ProductDetails = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let productId = useParams().id;

  let [productQty, setProductQty] = useState("");
  let selectedProductInfo = useSelector((state) => {
    return state[PRODUCT_FEATURE_KEY];
  });

  let {selectedProduct, loading} = selectedProductInfo;
  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId]);

  let clickAddToCart = () => {
    //dispatch an action selectedProduct,qty,navigate
    dispatch(addToCart(selectedProduct, productQty, navigate));
  };
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(productQty)}</pre> */}
      {/* <pre>{JSON.stringify(productId)}</pre> */}
      {/* <pre>{JSON.stringify(selectedProduct)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="details-pd-wrap">
              <div className="container">
                <div className="details-heading-section">
                  {/* <h2>Product Details</h2> */}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div
                      id="slider"
                      className="details-owl-carousel details-product-slider"
                    >
                      <div className="details-item">
                        <img width="480px" src={selectedProduct.image} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="details-product-dtl">
                      <div className="details-product-info">
                        <div className="details-product-name">
                          {selectedProduct.name}
                        </div>
                        <div className="details-reviews-counter">
                          <div className="details-rate">
                            <input
                              type="radio"
                              id="star5"
                              name="rate"
                              value="5"
                              checked
                            />
                            <label for="star5" title="text">
                              5 stars
                            </label>
                            <input
                              type="radio"
                              id="star4"
                              name="rate"
                              value="4"
                              checked
                            />
                            <label for="star4" title="text">
                              4 stars
                            </label>
                            <input
                              type="radio"
                              id="star3"
                              name="rate"
                              value="3"
                              checked
                            />
                            <label for="star3" title="text">
                              3 stars
                            </label>
                            <input
                              type="radio"
                              id="star2"
                              name="rate"
                              value="2"
                            />
                            <label for="star2" title="text">
                              2 stars
                            </label>
                            <input
                              type="radio"
                              id="star1"
                              name="rate"
                              value="1"
                            />
                            <label for="star1" title="text">
                              1 star
                            </label>
                          </div>
                          <span>3 Reviews</span>
                        </div>
                        <div className="details-product-price-discount">
                          <span>
                            {" "}
                            <i className="fa fa-rupee-sign mr-2" />{" "}
                            {selectedProduct.price?.toFixed(2)}
                          </span>
                          <span className="details-line-through">
                            &#8377;590.00
                          </span>
                        </div>
                      </div>
                      <p>{selectedProduct.usage}</p>
                      <form className="form-inline">
                        <div className="form-group">
                          <select
                            value={productQty}
                            onChange={(e) => setProductQty(e.target.value)}
                            className="form-control"
                          >
                            <option value="">Select Qty</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </form>
                      <div>
                        <button
                          className="details-round-black-btn"
                          onClick={clickAddToCart}
                        >
                          Add to Cart
                        </button>
                      </div>
                      {/* <div className="details-product-count form-inline">
                   <label for="size">Quantity</label>
                  <form action="#" className="details-display-flex">
                    <div className="details-qtyminus">-</div>
                    <input
                      type="text"
                      name="quantity"
                      value="1"
                      className="details-qty"
                    />
                    <div className="details-qtyplus">+</div>
                  </form> 
                
                  
                    <Link to="#" className="details-round-black-btn">
                      Add to Cart
                    </Link>
                  
                </div> */}
                    </div>
                  </div>
                </div>
                <div className="details-product-info-tabs">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="description-tab"
                        data-toggle="tab"
                        href="#description"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                    {/*        <li className="nav-item">
          <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
        </li> */}
                  </ul>
                  <div className="details-tab-content" id="myTabContent">
                    <div
                      className="details-tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      {selectedProduct.description}
                    </div>
                    <div
                      className="details-tab-pane fade"
                      id="review"
                      role="tabpanel"
                      aria-labelledby="review-tab"
                    >
                      <div className="details-review-heading">REVIEWS</div>
                      <p className="details-mb-20">There are no reviews yet.</p>
                      <form className="details-review-form">
                        <div className="form-group">
                          <label>Your rating</label>
                          <div className="details-reviews-counter">
                            <div className="details-rate">
                              <input
                                type="radio"
                                id="star5"
                                name="rate"
                                value="5"
                              />
                              <label for="star5" title="text">
                                5 stars
                              </label>
                              <input
                                type="radio"
                                id="star4"
                                name="rate"
                                value="4"
                              />
                              <label for="star4" title="text">
                                4 stars
                              </label>
                              <input
                                type="radio"
                                id="star3"
                                name="rate"
                                value="3"
                              />
                              <label for="star3" title="text">
                                3 stars
                              </label>
                              <input
                                type="radio"
                                id="star2"
                                name="rate"
                                value="2"
                              />
                              <label for="star2" title="text">
                                2 stars
                              </label>
                              <input
                                type="radio"
                                id="star1"
                                name="rate"
                                value="1"
                              />
                              <label for="star1" title="text">
                                1 star
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Your message</label>
                          <textarea
                            className="form-control"
                            rows="10"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name=""
                                className="form-control"
                                placeholder="Name*"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name=""
                                className="form-control"
                                placeholder="Email Id*"
                              />
                            </div>
                          </div>
                        </div>
                        <button className="details-round-black-btn">
                          Submit Review
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
