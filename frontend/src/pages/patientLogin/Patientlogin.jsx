import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import Footer from "../footer/Footer";
import logimg from "../../assets/patient_login.jpg";
import "./patientlogin.css";
import DoctorTopbar from "../topbar/DoctorTopbar";


export default function Patientlogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  //for redirect
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5002/api/auth/patient/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      navigate(`/patientinfo/${json.patientId}`);
    } 
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <div>
      <Topbar />
      <body className="bg_img_log opacity-75">
        <div className="container doclogform">
          <div
            class="card card-log"
            style={{
              width: "50rem",
              height: "350px",
              // width: "10%",
              backgroundColor: "rgba(245, 245, 245, 0.4)",
            }}
          >
            <div class="card-body">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="card-img">
                    <img
                      src={logimg}
                      className=" img-fluid"
                      style={{ height: "315px" }}
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-md-6  col-lg-6 ">
                  <div className="container mt-5">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label for="validationDefaultUsername">
                          Email address
                        </label>
                        <input
                          value={credentials.email}
                          onChange={onChange}
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          aria-describedby="emailHelp"
                          required
                        />
                        <div class="valid-feedback">Valid.</div>
                        <div class="invalid-feedback">
                          Please fill out this field.</div>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          value={credentials.password}
                          onChange={onChange}
                          name="password"
                          type="password"
                          className="form-control"
                          id="password"
                          required
                        />
                        <div class="valid-feedback">Valid.</div>
                        <div class="invalid-feedback">
                          Please fill out this field.</div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </body>       
    </div>
  )
}
