import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ORDER_FEATURE_KEY} from "../../../../redux/orders/orders.reducers";
import Spinner from "../../../layout/components/spinner/Spinner";

let OrderSuccess = () => {
  let orderInfo = useSelector((state) => {
    return state[ORDER_FEATURE_KEY];
  });

  let {order, loading} = orderInfo;

  // calc Grand Total
  let calculateGrandTotal = () => {
    let total = 0;
    if (order.items?.length > 0) {
      for (let item of order.items) {
        total += item.qty * item.price;
      }
    }
    return total + order.tax;
  };

  // Take Print of Doc
  let takePrint = (e) => {
    e.preventDefault();
    return window.print();
  };

  return (
    <React.Fragment>
      <section className="p-3 bg-heists">
        <div className="container ">
          <div className="row animated flipInY">
            <div className="col">
              <p className="h3">
                <i className="fa fa-check-circle" /> Order Success
              </p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className="mt-3 p-3">
            {Object.keys(order).length > 0 ? (
              <React.Fragment>
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 m-auto">
                      <div className="card">
                        <div className="card-header bg-info text-white">
                          <p className="h3">Order Summary</p>
                        </div>
                        <div className="card-body">
                          <ul className="list-group">
                            <li className="list-group-item">
                              Order ID : {order._id}
                            </li>
                            <li className="list-group-item">
                              NAME : {order.name}
                            </li>
                            <li className="list-group-item">
                              Email : {order.email}
                            </li>
                            <li className="list-group-item">
                              Mobile : {order.mobile}
                            </li>
                            <li className="list-group-item">
                              DATE : {new Date(order.created).toLocaleString()}
                            </li>
                          </ul>
                          <table className="table table-hover text-left table-striped table-light">
                            <thead>
                              <tr>
                                <th>SNO</th>
                                <th>Item Name</th>
                                <th>Item Qty</th>
                                <th>Item Price</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order.items?.length > 0 ? (
                                <React.Fragment>
                                  {order.items?.map((item, index) => {
                                    return (
                                      <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.qty}</td>
                                        <td>&#8377;{item.price}</td>
                                        <td>
                                          &#8377;
                                          {(item.price * item.qty).toFixed(2)}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </React.Fragment>
                              ) : null}
                              <tr>
                                <td colSpan="4" />
                                <td>
                                  Tax : &#8377;
                                  <span className="text-danger font-weight-bold">
                                    {order.tax?.toFixed(2)}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="4" />
                                <td>
                                  Grand Total : &#8377;
                                  <span className="text-primary">
                                    {calculateGrandTotal().toFixed(2)}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p className="h5">
                            NOTE : Your shipment will be delivered within 3
                            business days
                          </p>
                          <button
                            onClick={takePrint}
                            className="btn btn-info btn-sm"
                          >
                            Print Doc
                          </button>
                          <Link
                            to="/"
                            className="btn btn-heists text-dark btn-sm"
                          >
                            Done
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p className="h3">Please select some items</p>
              </React.Fragment>
            )}
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default OrderSuccess;
