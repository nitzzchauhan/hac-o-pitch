import React from "react";
import "./maindesign.css"
import { Grid, TextField } from '@mui/material'
// import Icon from '@mui/material/Icon';



export default function Details() {
    return (
        <div className="body">
            <div className="midwin">
                <div className="center">Search by Case Number</div>
                <div className="top">
                    <TextField fullWidth className="textfield" id="outlined-basic" label="CourtComplex" variant="outlined" />
                </div>
                <div className="top">
                    <TextField fullWidth className="textfield" id="outlined-basic" label="Select Case Type" variant="outlined" />
                </div>
                <div className="top">

                    <TextField fullWidth className="textfield" id="outlined-basic" label="Enter Case Number" variant="outlined" />
                </div>
                <div className="top">

                    <TextField fullWidth className="textfield" id="outlined-basic" label="Enter Year" variant="outlined" />
                </div>

            </div>
            {/* ----------------------------------------search by filing number-------- */}
          
            {/* ----------------------------------------search by filing number-------- */}
            

        </div>
    )
}