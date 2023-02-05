import React, { useEffect, useRef } from "react";
import Footer from "../footer/Footer";
import DoctorTopbar from "../topbar/DoctorTopbar";
import { useState } from "react";
import { useSearchParams, useParams, Link } from "react-router-dom";
import "./patient.css";
import pimg from "../../assets/patient_avatar.png";
import Modal_demo from "./Modal_demo";
import { useNavigate} from "react-router-dom";
// import AddRecord from "./pages/addRecord/AddRecord";


export default function Patient() {
  const ref = useRef(null);
  const [patientPayload, setPayload] = useState();
  const navigate = useNavigate();
  const { patientId } = useParams();

  const apiCall = async () => {
    const response = await fetch(
      `http://localhost:5002/api/history/?patientId=${patientId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setPayload(json);
    console.log(json)
  };

  useEffect(() => {
    apiCall();
  }, [patientId]);

  return (
    <div>
      <>
        <body>
          <header className="bg_image">
            <DoctorTopbar />
            <div className="container" style={{ marginTop: "100px" }}>
              <div
                className="carddoc card"
                style={{
                  height: "230px",
                  backgroundColor: "rgba(245, 245, 245, 0.4)",
                }}
              >
                <div className="row">
                  <div className="col-md-2 text-center">
                    <Link to={`/addrecord/${patientId}`}>
                      <button id = "newRecordButton" style={{ marginTop: "50%" }}><i className="fa-solid fa-user-plus" ></i> New Record </button></Link>
                  </div>
                  <div className="col-md-4 mt-5">
                    <h5 className="mx-5 my-3">
                      Id:{" "}
                      {patientPayload != null
                        ? patientPayload.patientInfo._id
                        : ""}{" "}
                    </h5>
                    <h5 className="mx-5 my-3">
                      Name:{" "}
                      {patientPayload != null
                        ? patientPayload.patientInfo.name
                        : ""}{" "}
                    </h5>
                    <h5 className="mx-5 my-3">
                      Gender:{" "}
                      {patientPayload != null
                        ? patientPayload.patientInfo.gender
                        : ""}{" "}
                    </h5>
                  </div>

                  <div className="col-md-4 d-none d-lg-block mt-5">
                    <h5 className="mx-5 my-3">
                      Address:
                      {patientPayload != null
                        ? patientPayload.patientInfo.address
                        : ""}
                    </h5>
                    <h5 className="mx-5 my-3">
                      Email:
                      {patientPayload != null
                        ? patientPayload.patientInfo.email
                        : ""}
                    </h5>
                    <h5 className="mx-5 my-3">
                      Phone:
                      {patientPayload != null
                        ? patientPayload.patientInfo.phone
                        : ""}
                    </h5>
                  </div>
                  <div
                    className=" item col-md-2"
                    style={{ padding: "2px 15px 50px 5px" }}
                  >
                    {/* {patientPayload != null? patientPayload.patientInfo.profile: ""} */}
                    <img
                      src={pimg}
                      className=" img-fluid rounded-circle card-img d-none d-lg-block "
                      style={{
                        padding: "12px 12px 12px 12px",
                        height: "230px",
                        border: "2px solid #555",
                        boxShadow: "2px 2px 1px 1px black",
                      }}
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* card start here */}

          <div className="container  my-4  mt-4">
            <div className="overflow-scroll card pcard1">
              {/* <h1>Patient info</h1> */}
              {patientPayload != null
                ? patientPayload.history.map((val) => (
                    <div
                      className="card my-2 mx-2"
                      style={{ boxShadow: "2px 2px 1px 1px black" }}
                    >
                      <div className="row">
                        <div className="col-md-2">
                          <p className="text-center my-2 fw-bold">
                            {val.referenceId}
                          </p>
                        </div>
                        <div className="col-md-2">
                          <p className="fw-bold my-2">Symptoms</p>
                          {val.symptoms.map((val1) => (
                            <p>{val1}</p>
                          ))}
                        </div>

                        {/* /////////medicine///////// */}

                        <div className="col-md-2">
                          <p className="fw-bold my-2">Medicine</p>
                          {val.medicines.map((val3) => (
                            // console.log(val3)
                            <div className="dropdown mx-0 my-2">
                              <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {val3.name}
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Name:{val3.name}
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Days:{val3.days}
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Time:{val3.time}
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Direction:{val3.direction}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* /////diagnosis////// */}

                        <div className="col-md-2 my-2">
                          <p className="fw-bold">Diagnosis</p>
                          {val.diagnosis.map((val3) => (
                            // console.log(val3)
                            <div className="dropdown mx-0 my-2">
                              <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {val3.name}
                              </button>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Name:{val3.name}
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Result:{val3.result}
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    ResultDocumet
                                  </a>
                                  <ul className="dropdown-item dropdown-submenu">
                                    {val3.resultDoc.map((val4) =>(
                                      <li>
                                        <Modal_demo val={val4}/>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* ///////info/////// */}

                        <div className="col-md-2 my-2">
                          <p className="fw-bold">Info</p>
                          <p>SugarLevel:{val.vitalInfo.sugarLevel}</p>
                          <p>BP:{val.vitalInfo.BP}</p>
                          <p>Height:{val.vitalInfo.height}</p>
                          <p>Weight:{val.vitalInfo.weight}</p>
                        </div>
                        {/* /////////doctor//////// */}

                        <div className="col-md-2 my-2">
                          <p className="fw-bold">Time:{val.createdAt}</p>
                          <p>Prescribed by</p>
                          <p>Name: {val.doctorInfo.name}</p>
                          <p>Hospital: {val.doctorInfo.hospital}</p>
                          <p>Designation: {val.doctorInfo.designation}</p>
                        </div>

                        {/* <hr /> */}
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
          <Footer />
        </body>
      </>
    </div>
  );
}
