import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { serviceId } = useParams();
  const [Project, setProject] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const FindProject = data.find((d) => d.id === serviceId);
        setProject(FindProject);
      });
  }, [serviceId]);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    toast.success("Course added successfully");
    // reset();
    // <Link to="/checkout">
    //   <button className="btn btn-primary">Proceed Checkout</button>
    // </Link>;
    navigate(`/checkout/${serviceId}`);
  };

  return (
    <Container fluid="md">
      <Row className="justify-content-md-center mt-5">
        <Col lg="8" className="text-center mb-5">
          <img className="w-100" src={Project?.img} alt="" />
          <h2 className="pt-3">{Project?.name}</h2>
          <h3>One Time Payment ${Project?.price}</h3>
          <p>{Project?.description}</p>
        </Col>
        <Col lg="4" className="text-center mb-5">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={user?.displayName}
                className="checkOut-input"
                {...register("customerName", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={user?.email}
                className="checkOut-input"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <input
                type="number"
                placeholder="Your Phone Number"
                className="checkOut-input"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone is Required",
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <textarea
                type="textarea"
                placeholder="Your Address"
                className="checkOut-input"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is Required",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <input className="checkOut-btn" type="submit" value="Check out" />
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
export default ServiceDetail;
