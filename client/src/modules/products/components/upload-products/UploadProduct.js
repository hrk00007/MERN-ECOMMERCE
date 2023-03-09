import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {uploadProduct} from "../../../../redux/products/product.actions";

let UploadProduct = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [product, setProduct] = useState({
    name: "",
    brand: "",
    image: "",
    price: "",
    qty: "",
    category: "",
    description: "",
    usage: "",
  });
  let handleInput = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  //convert image to base64 string
  // changeImage
  let changeImage = async (event) => {
    let imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.addEventListener("load", () => {
      if (reader.result) {
        setProduct({
          ...product,
          image: reader.result,
        });
      } else {
        alert("Error Occurred");
      }
    });
  };

  //submitProduct
  let submitProduct = (e) => {
    e.preventDefault();
    //console.log(product);
    dispatch(uploadProduct(product, navigate));
  };

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(product)}</pre> */}
      <section className="p-3 bg-heists">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <i className="fa fa-cloud-upload-alt">Upload Products</i>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-3 mb-5">
          <div className="card">
            <div className="card-header bg-dark text-heists">
              <p className="h4">Upload Here</p>
            </div>
            <div className="card-body bg-heists">
              <form onSubmit={submitProduct}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleInput}
                    className="form-control"
                    placeholder="Product Name"
                  />
                </div>
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      onChange={changeImage}
                      type="file"
                      alt=""
                      className="custom-file-input"
                      id="customFile"
                    />
                    <label htmlFor="customFile" className="custom-file-label">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt=""
                          width="20"
                          height="20"
                        />
                      ) : (
                        "Product Image"
                      )}
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="brand"
                    value={product.brand}
                    onChange={handleInput}
                    type="text"
                    className="form-control"
                    placeholder="Product Brand"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="price"
                    value={product.price}
                    onChange={handleInput}
                    type="Number"
                    className="form-control"
                    placeholder="Product Price"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="qty"
                    value={product.qty}
                    onChange={handleInput}
                    type="Number"
                    className="form-control"
                    placeholder="Product Qty"
                  />
                </div>
                <div className="form-group">
                  <select
                    name="category"
                    value={product.category}
                    onChange={handleInput}
                    className="form-control"
                  >
                    <option value="">SELECT</option>
                    <option value="MENS">Men's Collection</option>
                    <option value="WOMEN">Women's Collection</option>
                    <option value="KIDS">Kid's Collection</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="description"
                    value={product.description}
                    onChange={handleInput}
                    rows="4"
                    className="form-control"
                    placeholder="Product Description"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="usage"
                    value={product.usage}
                    onChange={handleInput}
                    rows="4"
                    className="form-control"
                    placeholder="Product Usage"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-dark text-heists btn-sm"
                    value="upload"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UploadProduct;
