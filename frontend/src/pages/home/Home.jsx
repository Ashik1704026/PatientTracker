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
              <div class="cardhome card " style={{ width: "15rem",backgroundColor:"#cbf5e8",height:"15rem" }}>
                <div class="card-img">
                  <img src={doc} class="imgcard card-img-top img-fluid rounded-circle" alt="asja"/>
                </div>
                <div className="card-footer">
                <a href="/doctorlogin">Doctor</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="cardhome card" style={{ width: "15rem",height:"15rem", backgroundColor:"#cbf5e8"}}>
                <div class="card-img">
                  <img src={patient}class="imgcard card-img-top img-fluid rounded-circle" alt="asja"/>
                </div>
                <div className="card-footer">
                <a href="/patientlogin">Patient</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class="cardhome card " style={{ width: "15rem",height:"15rem",backgroundColor:"#cbf5e8" }}>
                <div class="card-img">
                  <img src={lab}class="imgcard card-img-top img-fluid rounded-circle" alt="asja"/>
                </div>
                <div className="card-footer">
                <p>Lab</p>
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
