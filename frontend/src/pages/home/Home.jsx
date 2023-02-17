import React from "react";
import Footer from "../footer/Footer";
import Topbar from "../topbar/Topbar";
import "./home.css";
import { useNavigate } from 'react-router-dom';
import doc from "../../assets/doc2.jpg"
import patient from "../../assets/p_t.jpg"
import lab from "../../assets/lab2.png"
// import { useNavigate } from "react-router-dom";
export default function Home() {

  // let history = useHistory();
  // const navigateLogin = () => {
  //   history.push('/doctorlogin')
  // }

// const navigate = useNavigate();
// const navigatelog=()=>{
//   navigate('/doctorlogin');
// }


  return (
    <>
    <body>
      <header class="bgimage">
        <Topbar />
        <div class="container text">
          <h1>A place to meet good health...</h1>
        </div>
      </header>
        <div class="container text-center">
          <div class="row mt-5 ms-5 justify-content-center">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="cardhome card " style={{ width: "15rem",backgroundColor:"#e0feff",height:"15rem" }}>
                <div class="card-img">
                  <img src={doc} class="imgcard card-img-top img-fluid rounded-circle" alt="asja"/>
                </div>
                <div className="card-footer">
                {/* <a href="/doctorlogin">Doctor</a> */}
                <a href="/doctorlogin" class="btn btn-outline-primary" role="button" aria-pressed="true"><b>Doctor</b></a>
                {/* <button type="button"  href="/doctorlogin" class="btn btn-outline-primary"><b>Doctor</b></button> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="cardhome card" style={{ width: "15rem",height:"15rem", backgroundColor:"#e0feff"}}>
                <div class="card-img">
                  <img src={patient}class="imgcard card-img-top img-fluid rounded-circle" alt="asja"/>
                </div>
                <div className="card-footer">
                {/* <a href="/patientlogin">Patient</a> */}
                <a href="/patientlogin" class="btn btn-outline-primary" role="button" aria-pressed="true"><b>Patient</b></a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="cardhome card " style={{ width: "15rem",height:"15rem",backgroundColor:"#e0feff" }}>
                <div class="card-img">
                  <img src={lab}class="imgcard card-img-top img-fluid rounded-circle" alt="asja"/>
                </div>
                <div className="card-footer">
                {/* <a href="/labteclogin">Lab</a> */}
                <a href="/labteclogin" class="btn btn-outline-primary" role="button" aria-pressed="true"><b>LabTech</b></a>
                </div>
              </div>
            </div>
            
            </div>
        </div>
      <Footer/>
      </body>
    </>
  );
}
