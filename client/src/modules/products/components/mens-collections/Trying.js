import React from "react";
import image1 from "../../../../assets/img/products/mens/men_1.jpg";
import image2 from "../../../../assets/img/products/mens/men_2.jpg";
import image3 from "../../../../assets/img/products/mens/men_3.jpg";
import image4 from "../../../../assets/img/products/mens/men_4.jpg";
import image5 from "../../../../assets/img/products/mens/men_5.jpg";

let Trying = () => {
  return (
    <React.Fragment>
      <section className="p-3 bg-heists">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3">Men's Collections</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid mt-3">
          <div className="row">
            {/* 1 */}
            <div className="col-md-3 mt-3">
              <div className="trying-product">
                <img src={image1} width="250px" height="250px" alt="" />
                <div className="trying-content">
                  <h3>
                    <a href="/">Product Name</a>
                  </h3>
                  <span>
                    <a href="/">500$</a>
                  </span>
                </div>
                <div className="trying-link">
                  <a href="/">Buy Now</a>
                  <a href="/">Add to Cart</a>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="col-md-3 mt-3">
              <div className="trying-product">
                <img src={image2} width="250px" height="250px" alt="" />
                <div className="trying-content">
                  <h3>
                    <a href="/">Product Name</a>
                  </h3>
                  <span>
                    <a href="/">500$</a>
                  </span>
                </div>
                <div className="trying-link">
                  <a href="/">Buy Now</a>
                  <a href="/">Add to Cart</a>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="col-md-3 mt-3">
              <div className="trying-product">
                <img src={image3} width="250px" height="250px" alt="" />
                <div className="trying-content">
                  <h3>
                    <a href="/">Product Name</a>
                  </h3>
                  <span>
                    <a href="/">500$</a>
                  </span>
                </div>
                <div className="trying-link">
                  <a href="/">Buy Now</a>
                  <a href="/">Add to Cart</a>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="col-md-3 mt-3">
              <div className="trying-product">
                <img src={image4} width="250px" height="250px" alt="" />
                <div className="trying-content">
                  <h3>
                    <a href="/">Product Name</a>
                  </h3>
                  <span>
                    <a href="/">500$</a>
                  </span>
                </div>
                <div className="trying-link">
                  <a href="/">Buy Now</a>
                  <a href="/">Add to Cart</a>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="col-md-3 mt-3">
              <div className="trying-product">
                <img
                  src="https://m.media-amazon.com/images/I/61oav6m1AqL._UL1500_.jpg"
                  width="250px"
                  height="250px"
                  alt=""
                />
                <div className="trying-content">
                  <h3>
                    <a href="/">Product Name</a>
                  </h3>
                  <span>
                    <a href="/">500$</a>
                  </span>
                </div>
                <div className="trying-link">
                  <a href="/">Buy Now</a>
                  <a href="/">Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Trying;
