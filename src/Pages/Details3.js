import React from "react";
import "./maindesign.css"
import { Grid, TextField } from '@mui/material'
// import Icon from '@mui/material/Icon';



export default function Details() {
    return (
        <div className="body">
            
            <div className="midwin">
                <div className="center">Search by FIR Number</div>
                <div className="top">
                    <TextField fullWidth className="textfield" id="outlined-basic" label="CourtComplex" variant="outlined" />
                </div>
                <div className="top">
                    <TextField fullWidth className="textfield" id="outlined-basic" label="Select Police Station" variant="outlined" />
                </div>
                <div className="top">
                    <TextField fullWidth className="textfield" id="outlined-basic" label="Enter Fir Number" variant="outlined" />
                </div>
                <div className="top">
                    <TextField fullWidth className="textfield" id="outlined-basic" label="Enter Year" variant="outlined" />
                </div>
            </div>

        </div>
    )
}