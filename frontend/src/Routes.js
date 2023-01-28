import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Patientlogin from "./pages/patientLogin/Patientlogin";
import Doctorlogin from "./pages/doctorLogin/Doctorlogin";
import Doctor from "./pages/doctor/Doctor";
import Patient from "./pages/patient/Patient";
import Imagemodal from "./pages/Imagemodal";
import Demo from "./pages/Demo";
import { useState } from "react";
import  Alert  from "./pages/Alert";
import AddRecord from "./pages/addRecord/AddRecord";

export default function Routes() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
    <BaseRoutes>
      {/* <Route path="/"element={<Alert alert={alert}/>} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/doctorlogin" element={<Doctorlogin showAlert={showAlert} />}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/patient/:patientId" element={<Patient/>}/>
      <Route path="/demo" element={<Demo/>}/>
      <Route path="/imagemodal" element={<Imagemodal/>}/>
      <Route path="/addRecord" element={<AddRecord/>}/>

        {/* <Route index element={<Products />} />
        <Route path=":productId" element={<Product />} /> */}
      {/* </Route> */}
    </BaseRoutes>
  );
}
