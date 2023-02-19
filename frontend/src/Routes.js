import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Patientlogin from "./pages/patientLogin/Patientlogin";
import Doctorlogin from "./pages/doctorLogin/Doctorlogin";
import Doctor from "./pages/doctor/Doctor";
import Patient from "./pages/patient/Patient";
import Imagemodal from "./pages/Imagemodal";
import Demo from "./pages/Demo";
import AddRecord from "./pages/addRecord/AddRecord";
import PatientInfo from "./pages/patient_Info/PatientInfo";
import Labtec from "./pages/labtecLogin/Labtec";
import LabTechnitian from "./pages/labtech/LabTechnitian";
import LabtechSearch from "./pages/labtecsearch/LabtechSearch";

export default function Routes() {
  // const [alert,setAlert]=useState(null);
  // const showAlert=(message,type)=>{
  //   setAlert({
  //     message:message,
  //     type:type
  //   })
  //   setTimeout(()=>{
  //     setAlert(null);
  //   },1500);
  
  return (
    <BaseRoutes>
      {/* <Route path="/"element={<Alert alert={alert}/>} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/doctorlogin" element={<Doctorlogin/>}/>
      <Route path="/patientlogin" element={<Patientlogin/>}/>
      <Route path="/labteclogin" element={<Labtec/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/labtechnitian/:patientId" element={<LabTechnitian/>}/>
      <Route path="/labtechnitiansearch" element={<LabtechSearch/>}/>
      <Route path="/patient/:patientId" element={<Patient/>}/>
      <Route path="/patientinfo/:patientId" element={<PatientInfo/>}/>

      <Route path="/demo" element={<Demo/>}/>
      <Route path="/imagemodal" element={<Imagemodal/>}/>
      <Route path="/addrecord/:patientId" element={<AddRecord/>}/>

        {/* <Route index element={<Products />} />
        <Route path=":productId" element={<Product />} /> */}
      {/* </Route> */}
    </BaseRoutes>
  );
}
