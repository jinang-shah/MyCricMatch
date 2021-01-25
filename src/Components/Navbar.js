
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'


function Navbar() {
    return (
        <AppBar position="static" >
            <Toolbar>
                <MenuIcon />
                <Typography style={{marginLeft:10}} variant="h6">MyCricMatch</Typography>
            </Toolbar>

        </AppBar>
    )
}

export default Navbar
