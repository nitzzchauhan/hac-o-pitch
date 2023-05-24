import React from "react";
import "./maindesign.css"
import { Grid, TextField } from '@mui/material'
// import Icon from '@mui/material/Icon';



export default function Details2() {
    return (
        <div className="body">
           
            {/* ----------------------------------------search by filing number-------- */}
            <div className="midwin">
                <div className="center">Search by Filing Number</div>
                <div className="top">
                    <TextField fullWidth className="textfield" id="outlined-basic" label="CourtComplex" variant="outlined" />
                </div>
                <div className="top">
                    <TextField fullWidth className="textfield" id="outlined-basic" label="Filing Number" variant="outlined" />
                </div>
                <div className="top">
                    <TextField fullWidth className="textfield" id="outlined-basic" label="Enter Year" variant="outlined" />
                </div>


            </div>
            {/* ----------------------------------------search by filing number-------- */}
            

        </div>
    )
}