import React from "react";
import Footer from "../footer/Footer";
import Topbar from "../topbar/Topbar";
import logimg from "../../assets/patient_login.jpg";
import { useState,useEffect } from "react";
import { useSearchParams, useParams, Link } from "react-router-dom";
import LabTechinitianTopbar from "../topbar/LabTechinitianTopbar";

let flag = true;
let ind = 0;

export default function LabTechnitian() {
  const [tecPayload, setPayload] = useState();
  const [disable, setDisable] = React.useState(false);
  const { patientId } = useParams();
  console.log(patientId)
  // flag = true;
  const apiCall = async () => {
    const response = await fetch(
      `http://localhost:5002/api/history/diagnosis/?patientId=${patientId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //   "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setPayload(json);
    console.log(json);
    if(json){
      console.log("hiiiiii");
      flag = false;
    }
    // setPayload(json);
  };

  useEffect(() => {
    apiCall();
  }, [patientId]);

  return (
    <div>
      <LabTechinitianTopbar />
      <body className="bg_img_log opacity-75">
        <div className="container " style={{ marginTop: "100px" }}>
          {tecPayload != null
            ? tecPayload.DiagnosisHistory.map((val, index1) => (
                // <p>{val.referenceId}</p>
                <div
                  className="carddoc card"
                  style={{
                    height: "230px",
                    backgroundColor: "rgba(245, 245, 245, 0.4)",
                  }}
                >
                  <div className="row">
                    <div className="col-md-2 mt-5 col-sm-12 my-2 ">
                      <h5 className="mx-3 text-center ">
                        RefId:{val.referenceId}
                      </h5>
                    </div>

                    <div className="col-md-10 mt-5">
                      <div className="row">
                        {val.diagnosis.map((val2, index2) => (
                          <form class="row g-3">
                            <div className="col-md-2">
                              <h5>{val2.name}:</h5>
                            </div>
                            <div className="col-md-4">
                              <input
                                class="form-control"
                                type="text"
                                placeholder="Default input"
                              ></input>
                            </div>
                            <div className="col-md-4">
                              <input class="form-control" type="file"></input>
                            </div>
                            <div className="col-md-2">
                              <button key={index2} disabled={disable} onClick={() => setDisable(true)}>
                                Submit
                              </button>
                            </div>
                          </form>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
        <Footer />
      </body>
    </div>
  );
}
