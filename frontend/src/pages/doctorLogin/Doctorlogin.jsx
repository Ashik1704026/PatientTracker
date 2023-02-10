import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import Footer from "../footer/Footer";
import logimg from "../../assets/book.jpg";
import "./doctorLogin.css";
// import { Alert } from "bootstrap";
import Alert from "../Alert";
// import { useState } from "react";

const PORT = process.env.PORT || 4000;
console.log(PORT);

export default function Doctorlogin(props) {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  //for redirect
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:5002/api/auth/doctor/login`,
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
    // console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.token);
      history("/doctor", { state: { data: json } });
    } else {
      // showAlert("LogIn sccessfully!!","success")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Topbar />
      <Alert alert={alert} />
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
  );
}
