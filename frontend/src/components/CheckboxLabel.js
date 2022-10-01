import { Grid, Typography } from '@mui/material'
import React from 'react'

const CheckboxLabel = ({label, size}) => {

  return (
    <Grid container>
        <Grid item xs={size}>
            <Typography>{label}</Typography>
        </Grid>
    </Grid>
  )
}

export default CheckboxLabel