import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
export default function Loginsignup() {
    return (
        <div >
            <div className="bod bod1">
                <div className='midwin'>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h1 style={{textAlign:"center"}}>Login to see certified progress report</h1>
                        </Grid>
                        <Grid item style={{ marginBottom: "10px" }} xs={12} lg={12}>
                            <TextField fullWidth className="textfield" id="outlined-basic" label="Email/Mobile No." variant="outlined" value={"7678276904"} />
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <TextField fullWidth className="textfield" id="outlined-basic" label="Password" variant="outlined" value={"***********"} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h1 style={{textAlign:"center"}}>If not registered? <span>Sign up</span></h1>
                        </Grid>
                        <Button style={{ marginBottom: "10px" }} fullWidth variant="contained" href="<Dashboard/>" target="_blank">Login</Button>
                        <Button fullWidth variant="contained">Reset</Button>

                    </Grid>
                </div>
            </div>


        </div>
    )
}
