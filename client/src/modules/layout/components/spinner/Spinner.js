import React from "react";
let Spinner = () => {
  return (
    <React.Fragment>
      <div className="spinner">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
          alt=""
          className="img-fluid"
        />
      </div>
    </React.Fragment>
  );
};

export default Spinner;
