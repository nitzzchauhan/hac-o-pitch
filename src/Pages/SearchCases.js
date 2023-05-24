import React from "react";
import "./maindesign.css"
import { Grid } from '@mui/material'
// import Icon from '@mui/material/Icon';

import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

export default function Smartcases() {
    return (
        <div className="midwin">
            <Grid container>
                <Grid item xs={12} >
                    <div className="center heading">Search Your Case <BalanceOutlinedIcon /></div>
                </Grid>
            </Grid>


            <Grid container>

                <Grid item xs={6} className="centers" >
                    <CreateNewFolderOutlinedIcon />
                    <div>Search By Case</div>
                </Grid>
                <Grid item xs={6} className="centers">
                    <ArticleOutlinedIcon />
                    <div>Search By Filing No.</div>
                </Grid>
                <Grid item xs={6} className="centers" >
                    <RecentActorsOutlinedIcon />
                    <div >Search By FIR</div>
                </Grid>
            </Grid>






        </div>
    )
}