import {
  FormGroup,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";
import { TextField } from "mui-rff";
import React from "react";

const EngineFields = () => {
  const formFields = [
    {
      size: 2,
      field: <TextField label="엔진형식" name="engine.engine_name" margin="none" InputProps={{endAdornment: <InputAdornment position="end"> </InputAdornment>}} />,
    },
    {
      size: 2,
      field: <TextField label="엔진제작사" name="engine.supplier" margin="none" InputProps={{endAdornment: <InputAdornment position="end"></InputAdornment>}} />,
    },    
    {
      size: 2,
      field: <TextField label="출력(정격)" name="engine.power" margin="none" type="number" InputProps={{endAdornment: <InputAdornment position="end">ps</InputAdornment>}} />,
    },
    {
      size: 2,
      field: <TextField label="" name="engine.nominal_rev" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">rpm</InputAdornment>}} />,
    },    
    {
      size: 2,
      field: <TextField label="최대 토크" name="engine.torque" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">kgf m</InputAdornment>}} />,
    },    {
      size: 2,
      field: <TextField label="" name="engine.torque_rev" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">rpm</InputAdornment>}} />,
    }, 
    {
      size: 2,
      field: <TextField label="" name="engine.cylinder" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">기통</InputAdornment>}} />,
    },   
    
  ];
  
    return (
      <>


<div className="input-group mb-1">
      <Paper style={{ padding: 16 }}>
        <Grid container /* alignItems="flex-start" */ spacing={2}>
          <Grid container item xs={6} spacing={2} >

          <FormGroup row>

          {formFields.map((item, idx) => (
            <Grid item xs={6} key={idx}>
              {item.field}
            </Grid>
          ))}
        </FormGroup>
          </Grid>


        </Grid>
      </Paper>

    </div>
    </>
    )
};

export default EngineFields;
