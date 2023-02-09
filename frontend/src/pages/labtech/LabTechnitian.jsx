import React from 'react'
import Footer from '../footer/Footer'
import Topbar from '../topbar/Topbar'
import logimg from "../../assets/patient_login.jpg";

export default function LabTechnitian() {
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

            backgroundColor: "rgba(245, 245, 245, 0.4)",
          }}
        >
          
        </div>
      </div>
      <Footer />
    </body>       
  </div>
  )
}
