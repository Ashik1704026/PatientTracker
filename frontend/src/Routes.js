import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Patientlogin from "./pages/patientLogin/Patientlogin";
import Doctorlogin from "./pages/doctorLogin/Doctorlogin";
import Doctor from "./pages/doctor/Doctor";
import Patient from "./pages/patient/Patient";
import Imagemodal from "./pages/Imagemodal";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/doctorlogin" element={<Doctorlogin/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/patient/:patientId" element={<Patient/>}/>
      <Route path="/demo" element={<Imagemodal/>}/>
        {/* <Route index element={<Products />} />
        <Route path=":productId" element={<Product />} /> */}
      {/* </Route> */}
    </BaseRoutes>
  );
}
