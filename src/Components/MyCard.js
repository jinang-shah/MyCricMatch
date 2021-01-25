import { Button, Card, CardActionArea, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid,  Typography } from '@material-ui/core'
import React from 'react'
import {getMatchDetail} from '../Api/Api'
import {useState} from 'react'

function MyCard({match}) {

    const [openDialog, setopenDialog] = useState(false)
    const [detail, setdetail] = useState({})

    const handleClose=()=>{
        setopenDialog(false)
    }

    const handleOpen=()=>{
       setopenDialog(true)
    }

    const getDialog=()=>{ return(
        <Dialog open={openDialog} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Detail"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                      <Typography>{detail.stat}</Typography>
                      <Typography>
                          Match :
                          <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                              {detail.matchStarted?"Started":"Still Not Started"}
                          </span>
                      </Typography>
                      <Typography>
                          Score : 
                          <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                              {detail.score}
                          </span>
                      </Typography>
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
    }

    const showMatchDetail=(id)=>{
        getMatchDetail(id)
        .then((data)=>{setdetail(data); console.log(data)})
        .catch((err)=>console.log(err))  
        handleOpen()      
    }

    return (
        <div>
            <Card style={{marginTop:20}} justify="center">
                <CardContent>
                    <Grid container justify="center" spacing={10} alignItems="center">
                        <Grid item>
                            <Typography variant="h5">{match['team-1']}</Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="h1">VS</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{match['team-2']}</Typography>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActionArea style={{marginBottom:15}} >
                    <Grid container justify="center">
                        <Button onClick={()=>{showMatchDetail(match.unique_id)}} style={{marginRight:10}} variant="contained" color="primary" >Show Details</Button>
                        <Button variant="contained" color="primary">{new Date(match.date).toLocaleString() }</Button>
                    </Grid>    
                </CardActionArea>
            </Card>
            {getDialog()}
        </div>
        
    )
}

export default MyCard
