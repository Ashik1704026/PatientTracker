import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MuiChipsInput } from 'mui-chips-input'
import { Container, Grid } from '@mui/material';
import { useParams } from "react-router-dom";

export default function MultilineTextFields() {
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
    console.log(val, "data-")


    // dynamic diagnosis
    const [diagnosisVal, setdiagnosisVal] = useState([{}]);

    const handleDiagnosisAdd = () => {
        const abc = [...diagnosisVal, {}]
        setdiagnosisVal(abc)
    }

    const handleDiagnosiChange = (onChangeValue, i) => {
        let param = onChangeValue.target.name + "";
        let inputdata = [...diagnosisVal];
        inputdata[i][param] = onChangeValue.target.value;
        setdiagnosisVal(inputdata)
    }
    const handleDiagnosisDelete = (i) => {
        const deletVal = [...diagnosisVal]
        deletVal.splice(i, 1)
        setdiagnosisVal(deletVal)
    }
    console.log(diagnosisVal, "data-")


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

        console.log(mappedDiagnosisChips)
       
        // const id=localStorage.getItem('p_id')
        const doctorId = localStorage.getItem('token');
        
        const finalObj = {
            "doctorId" : doctorId,
            "patientId": patientId,
            "symptoms": symtomsChips,
            "medicines": val,
            "vitalInfo": {
                "sugarLevel": "high",
                "BP": "120/80",
                "height": "170cm",
                "weight": "60kg"
            },
            "diagnosis": mappedDiagnosisChips
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
        <div>
            <div class="container text-center mt-2">
                <form action=""  onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col">
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
                        <div class="col ">
                            <div class="d-grid">
                                <button class="btn btn-primary" type="button" onClick={() => handleDynamicAdd()}>
                                    Add Medicine
                                </button>
                                {val.map((data, i) => {
                                    return (
                                        <div>
                                            <input value={data.name} name="name" onChange={e => handleDynamicChange(e, i)} />
                                            <input value={data.days} name="days" onChange={e => handleDynamicChange(e, i)} />
                                            <input value={data.time} name="time" onChange={e => handleDynamicChange(e, i)} />
                                            <input value={data.direction} name="direction" onChange={e => handleDynamicChange(e, i)} />
                                            <button onClick={() => handleDynamicDelete(i)}>x</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* <div class="col bg-secondary">
                        <div class="d-grid">
                            <button class="btn btn-primary" type="button" onClick={() => handleDiagnosisAdd()}>
                                Add Diagnosis
                            </button>
                            {diagnosisVal.map((data, i) => {
                                return (
                                    <div>
                                        <input value={data.day} name="day" onChange={e => handleDiagnosisChange(e, i)} />
                                        <input value={data.time} name="time" onChange={e => handleDiagnosisChange(e, i)} />
                                        <input value={data.name} name="name" onChange={e => handleDiagnosisChange(e, i)} />
                                        <input value={data.direction} name="direction" onChange={e => handleDiagnosisChange(e, i)} />
                                        <button onClick={() => handleDiagnosisDelete(i)}>x</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div> */}
                        <div class="col">
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
                    <button type="submit" class="btn btn-primary"> Submit </button>
                </form>

            </div>

        </div>

    );
}