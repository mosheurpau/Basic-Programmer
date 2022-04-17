import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  return (
    <div>
      <h2>This is ServiceDetail {serviceId}</h2>
      <Link to="/checkout">
        <button className="btn btn-primary">Proceed Checkout</button>
      </Link>
    </div>
  );
};
export default ServiceDetail;
