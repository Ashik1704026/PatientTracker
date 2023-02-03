import * as React from 'react';
import Footer from "../footer/Footer";
import Topbar from "../topbar/Topbar";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { MuiChipsInput } from 'mui-chips-input'
import { useParams } from "react-router-dom";

export default function MultilineTextFields() {

    const [vitalInfo, setVitalInfo] = useState({});
    const onChange = (onChangeValue) => {
        setVitalInfo({ ...vitalInfo, [onChangeValue.target.name]: onChangeValue.target.value });
        console.log(vitalInfo);
    };

    const [symtomsChips, setsymtomsChips] = React.useState([]);
    const handleSymtomsChange = (newChips) => {
        setsymtomsChips(newChips)
    }

    // dynamic Input
    const [val, setVal] = useState([{}]);

    const handleDynamicAdd = () => {
        const abc = [...val, {}]
        setVal(abc)
    }

    const handleDynamicChange = (onChangeValue, i) => {
        let param = onChangeValue.target.name + "";
        let inputdata = [...val];
        inputdata[i][param] = onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDynamicDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }
    // console.log(val, "data-")


    // dynamic diagnosis
    const [diagnosisVal, setdiagnosisVal] = useState([{}]);

    // const handleDiagnosisAdd = () => {
    //     const abc = [...diagnosisVal, {}]
    //     setdiagnosisVal(abc)
    // }

    // const handleDiagnosiChange = (onChangeValue, i) => {
    //     let param = onChangeValue.target.name + "";
    //     let inputdata = [...diagnosisVal];
    //     inputdata[i][param] = onChangeValue.target.value;
    //     setdiagnosisVal(inputdata)
    // }
    // const handleDiagnosisDelete = (i) => {
    //     const deletVal = [...diagnosisVal]
    //     deletVal.splice(i, 1)
    //     setdiagnosisVal(deletVal)
    // }
    // console.log(diagnosisVal, "data-")


    // diagnosis
    const [diagnosisChips, setdiagnosisChips] = React.useState([]);
    const handleDiagnosisChange = (newChips) => {
        setdiagnosisChips(newChips)
    }
    console.log(diagnosisChips);

    const { patientId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = { symtomsChips, val, diagnosisChips };

        let mappedDiagnosisChips = diagnosisChips.map((data) => {
            return {
                "name": data
            }
        })

        // const id=localStorage.getItem('p_id')
        const doctorToken = localStorage.getItem('token');

        const finalObj = {
            "doctorToken": doctorToken,
            "patientId": patientId,
            "symptoms": symtomsChips,
            "medicines": val,
            "vitalInfo": vitalInfo,
            "diagnosis": mappedDiagnosisChips,
        }
        console.log(finalObj)
        const response = await fetch(
            "http://localhost:5002/api/history/createHistory",

            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(finalObj),
            }
        );
        const json = await response.json();

        console.log(json);
    }




    return (
        <>
        <body>
        <Topbar/>
        <header class="bgimage">
        </header>
        <div className='container my-5'>
            <div className="text-center mt-2">
                <form action="" onSubmit={handleSubmit}>

                    <div className='row'>
                        {/* <div className='col-lg-12 my-3'>
                            Vital Information
                        </div> */}
                        <div className='col-lg-3 col-sm-12'>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Sugar Level</span>
                                <input type="text" className="form-control" placeholder="7.0" aria-label="Username" aria-describedby="basic-addon1" value={vitalInfo.sugarLevel} onChange={onChange} name="sugarLevel" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Blood Pressure</span>
                                <input type="text" className="form-control" placeholder="80-120" aria-label="Username" aria-describedby="basic-addon1" value={vitalInfo.BP} onChange={onChange} name="BP" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Height</span>
                                <input type="text" className="form-control" placeholder="170cm" aria-label="Username" aria-describedby="basic-addon1" value={vitalInfo.height} onChange={onChange} name="height" />
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-12'>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Weight</span>
                                <input type="text" className="form-control" placeholder="65kg" aria-label="Username" aria-describedby="basic-addon1" value={vitalInfo.weight} onChange={onChange} name="weight" />
                            </div>
                        </div>

                    </div>

                    <div className="row my-3">
                        {/* <div className='col-lg-12 my-3'>
                            Prescription
                        </div> */}
                        <div className="col-lg-6 col-sm-12">
                            <div className='row'>
                                <div className='col-lg-2 col-sm-12'>
                                    Symtomps:
                                </div>
                                <div className='col-lg-10 col-sm-12'>
                                    <div>
                                        <MuiChipsInput
                                            sx={{
                                                width: '50ch',

                                            }}
                                            variant="outlined"
                                            placeholder="Add Symtoms"
                                            id="AddSymtoms"
                                            name='AddSymtoms'
                                            value={symtomsChips}
                                            onChange={handleSymtomsChange}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className='row'>
                                <div className='col-lg-3 col-sm-12'>
                                    Diagnosis Test:
                                </div>
                                <div className='col-lg-9 col-sm-12'>
                                    <div>
                                        <MuiChipsInput
                                            sx={{
                                                width: '50ch',
                                            }}
                                            variant="outlined"
                                            placeholder="Add Diagnosis Test"
                                            id="AddDiagnosis"
                                            name='AddDiagnosis'
                                            value={diagnosisChips}
                                            onChange={handleDiagnosisChange}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-2 d-grid col-sm-12'>
                            <button className="btn btn-outline-primary" type="button" onClick={() => handleDynamicAdd()}>
                                Add Medicine
                            </button>
                        </div>
                        <div className='col-lg-10'>
                            {val.map((data, i) => {
                                return (
                                    <div className='row'>
                                        <div className='col-lg-3 my-1'>
                                            <div className='input-group'>
                                                <span className="input-group-text" id="basic-addon1">Name</span>
                                                <input className="form-control" placeholder="Napa" value={data.name} name="name" onChange={e => handleDynamicChange(e, i)} />
                                            </div>
                                        </div>
                                        <div className='col-lg-2'>
                                            <div className='input-group my-1'>
                                                <span className="input-group-text" id="basic-addon1">Days</span>
                                                <input className="form-control" placeholder="15 Days" value={data.days} name="days" onChange={e => handleDynamicChange(e, i)} />
                                            </div>
                                        </div>
                                        <div className='col-lg-2'>
                                            <div className='input-group my-1'>
                                                <span className="input-group-text" id="basic-addon1">Time</span>
                                                <input className="form-control" placeholder="1-0-1" value={data.time} name="time" onChange={e => handleDynamicChange(e, i)} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='input-group my-1'>
                                                <span className="input-group-text" id="basic-addon1">Direction</span>
                                                <input  className="form-control" placeholder="After Meal" value={data.direction} name="direction" onChange={e => handleDynamicChange(e, i)} />
                                            </div>
                                        </div>
                                        <div className='col-lg-1 my-1'>
                                            <button className='btn btn-outline-danger' onClick={() => handleDynamicDelete(i)}>Close</button>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-5'></div>
                        <div className='col-lg-2 text-center d-grid'>
                            <button type="submit" className="btn btn-outline-success my-3"> Submit </button>
                        </div>
                        <div className='col-lg-5'></div>
                    </div>
                </form>

            </div>

        </div>
        
        
        <Footer/>
        </body>
        </>
    );
}