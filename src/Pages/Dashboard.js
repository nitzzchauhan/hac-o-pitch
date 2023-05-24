import React from 'react'
// import { Grid } from '@mui/material'
import { Button } from '@mui/material'


export default function Dashboard() {
    return (
        <>
            <div className='bod1 bod'>
                <Button fullWidth variant="contained" href="https://drive.google.com/file/d/1cJwgP7vZjxX6fVbMGSabGGvPIUbYCuZD/view?usp=share_link" target='_blank' colour>FIR</Button>
                <Button fullWidth variant="contained" href="https://drive.google.com/file/d/13pgaew4eFIdYvxY-FJiQPIu3_SGhkwgl/view?usp=share_link" target='_blank' colour>Charge sheet</Button>
                <Button fullWidth variant="contained" href="https://drive.google.com/file/d/1_9z2BbB4VTALKz_KsZcuz4e4gxrn2x_Q/view?usp=share_link" target='_blank' colour>Progress Report</Button>
                <Button fullWidth variant="contained" href="https://drive.google.com/file/d/141CavEh-KA4O6q84OPaubs8WoEOPs2S4/view?usp=share_link" target='_blank' colour>Bails</Button>
                <Button fullWidth variant="contained" href="https://drive.google.com/file/d/1Kkz-SwQEDKrm9Jc7EHU99pWoAfTnmxWp/view?usp=share_link" target='_blank' colour>Miscellaneous Documents</Button>
            </div>
        </>
    )
}
