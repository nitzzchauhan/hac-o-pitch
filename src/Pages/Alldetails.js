import React from "react";
import "./maindesign.css"
import { Grid, TextField, Button } from '@mui/material'
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

// import Icon from '@mui/material/Icon';



export default function Alldetails() {
    var reset = ()=>{
       document.getElementById("outlined-basic").value = "";
    }
    return (
        
        <>
            <div >

                <h1 style={{backgroundColor:"#712cf9", textAlign:"center"}}>Smart Judicial Progress</h1>

            </div>
            <div className="bod bod1">


                <div className="midwin">
                    <Grid container>
                        <Grid item xs={12} >
                            <div className="center heading">Search Your Case <BalanceOutlinedIcon /></div>
                        </Grid>
                    </Grid>
                </div>

                <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <div className="midwin">
                            <div className="center">Search by Case Number</div>
                            <div className="top">
                                <TextField fullWidth className="textfield" id="outlined-basic" label="CourtComplex" variant="outlined" value={"JayendraGanj"} />
                            </div>
                            <div className="top">
                                <TextField fullWidth className="textfield" id="outlined-basic" label="Select Case Type" variant="outlined" value={"Special Case"}/>
                            </div>
                            <div className="top">

                                <TextField fullWidth className="textfield" id="outlined-basic" label="Enter Case Number" variant="outlined" value={70} />
                            </div>
                            <div className="top">

                                <TextField fullWidth className="textfield" id="outlined-basic" label="Enter Year" variant="outlined" value={2019}/>
                            </div>

                            <Button style={{ marginBottom: "10px" }} fullWidth variant="contained" href="Casestatus.jpeg" target="_blank">Submit</Button>
                            <Button fullWidth variant="contained">Reset</Button>
                        </div>

                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <div className="midwin">
                            <div className="center">Search by Filing Number</div>
                            <div className="top">
                                <TextField fullWidth className="textfield" id="outlined-basic" label="CourtComplex" variant="outlined" value={"JayendraGanj"}  />
                            </div>
                            <div className="top">
                                <TextField fullWidth className="textfield" id="outlined-basic" label="Filing Number" variant="outlined" value={"123456789"}/>
                            </div>
                            <div className="top">
                                <TextField fullWidth className="textfield" id="outlined-basic" label="Enter Year" variant="outlined" value={2019}/>
                            </div>
                            <Button style={{ marginBottom: "10px" }} fullWidth variant="contained" href="Casestatus.jpeg" target="_blank">Submit</Button>
                            <Button fullWidth variant="contained">Reset</Button>


                        </div>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <div className="midwin">
                            <div className="center">Search by FIR Number</div>
                            <div className="top">
                                <TextField fullWidth className="textfield" id="outlined-basic" label="CourtComplex" variant="outlined" value={"JayendraGanj"} />
                            </div>
                            <div className="top">
                                <TextField fullWidth className="textfield" id="outlined-basic" label="Select Police Station" variant="outlined" value={"Hazira"} />
                            </div>
                            <div className="top">
                                <TextField fullWidth className="textfield" id="outlined-basic" label="Enter Fir Number" variant="outlined" value={"22"} />
                            </div>
                            <div className="top">
                                <TextField fullWidth className="textfield" id="outlined-basic" label="Enter Year" variant="outlined" value={2019}/>
                            </div>
                            <Button style={{ marginBottom: "10px" }} fullWidth variant="contained" href="Casestatus.jpeg" target="_blank">Submit</Button>
                            <Button fullWidth onClick={reset} variant="contained">Reset</Button>
                        </div>
                    </Grid>
                </Grid>







            </div>
        </>
    )
}