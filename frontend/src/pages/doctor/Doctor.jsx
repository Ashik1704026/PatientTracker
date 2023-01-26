import React, { useState } from "react";
import Topbar from "../topbar/Topbar";
import "./doctor.css";
import Footer from "../footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";
// import docimg from `../../assets/${location.state.data.user.profile}`;
import docimg from "../../assets/doctor_avatar.jpg"

export default function Doctor() {
  // const a=useContext(doctorContext)
  const location = useLocation();
  // console.log(location.state.data.user.name)
  const [patientID, setPatientID] = useState({ patient_id: "", payload: null });
  const [data, setdata] = useState({});
  const [jsonData, setjsonData] = useState({ json: "" });
  const navigate = useNavigate();

  const onChange = (event) => {
    setPatientID({ ...patientID, [event.target.name]: event.target.value });
  };

  const handleClick = async (event) => {
    // const response = await fetch(`http://localhost:5001/api/history/?patientId=${patientID.patient_id}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     "auth-token": localStorage.getItem('token')
    //   }
    // });
    // const json = await response.json()
    // setPatientID({...patientID,payload:json},console.log("saved"))
    // history.push(`/patient/${patientID.patient_id}`);
    navigate(`/patient/${patientID.patient_id}`);
    //document.location.reload();
    // setdata(response.data)
  };

  return (
    <>
      <body>
        <header className="bg_image">
          <Topbar />
          <div className="container " style={{ marginTop: "100px" }}>
            <div
              className="carddoc card"
              style={{
                height: "230px",
                backgroundColor: "rgba(245, 245, 245, 0.4)",
              }}
            >
              <div className="row">
                <div className="col-md-5 mt-5 col-sm-12">
                  <h5 className="mx-5 my-2">
                    {location.state.data.user.name} 
                    <b>   {location.state.data.user.designation}</b>
                  </h5>

                  <span
                    className="ml-5 my-2 doc_in"
                    style={{ fontSize: "20px" }}
                  >
                    <b>Specialization: </b>
                  </span>
                  {location.state.data.user.specialization.map((val) => (
                    <span className="mx-1" style={{ fontSize: "20px" }}>
                      {val}
                    </span>
                  ))}
                  <h5 className="mx-5 my-2">
                    Worked at: {location.state.data.user.hospital}
                  </h5>
                </div>

                <div className="col-md-5 mt-5">
                  <h5 className="mx-5 my-2">
                    Email: {location.state.data.user.email}
                  </h5>
                  <h5 className="mx-5 my-2">
                    Phone: {location.state.data.user.phone}
                  </h5>
                  <h5 className="mx-5 my-2">
                    Address: {location.state.data.user.address}
                  </h5>
                </div>
                <div
                  className=" item col-md-2"
                  style={{ padding: "2px 15px 50px 5px" }}
                >
                  <img
                    // src={location.state.data.user.profile}
                    src={docimg}
                    className=" img-fluid rounded-circle card-img d-none d-lg-block "
                    style={{
                      padding: "12px 12px 12px 12px",
                      height: "230px",
                      border: "2px solid #555",
                      boxShadow: "1px 1px 1px 1px black",
                    }}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div>
          <div className="searchb container">
            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col-md-8">
                <div className="search">
                  <i className="fa fa-search"></i>
                  <input
                    value={patientID.id}
                    type="text"
                    className="form-control"
                    placeholder="Patient Id"
                    name="patient_id"
                    onChange={onChange}
                  />
                  <button className="btn btn-primary" onClick={handleClick}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
}
