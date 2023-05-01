import React from 'react'
import Grid from '@mui/material/Grid';
import { gridWrapperStyles } from './styles/GridStyles';


const GridWrapper = ({ children }) => {

    return (
        <Grid item xs={5} sx={gridWrapperStyles}>
            {children}
        </Grid>
    )
}

export default GridWrapper