import { TextField } from "mui-rff";
import {
  AppBar,
  Box,
  Button,
  Grid,
  InputAdornment,
  Link,
  Paper,
  Typography,
} from "@mui/material";

const Swivel = () => {
  const formFields = [
    
    {
      size: 2,
      field: <TextField label="선회펌프 유량" name="swivel.pump_flow" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">l/min"</InputAdornment>}} />,
    },    
    {
      size: 2,
      field: <TextField label="선회 감속비" name="swivel.motor_displacement" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end"></InputAdornment>}} />,
    },    
    {
      size: 2,
      field: <TextField label="선회모터 용적" name="swivel.reduction" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">cc/rev</InputAdornment>}} />,
    },    {
      size: 2,
      field: <TextField label="선회모터 용적 효율" name="swivel.motor_eff" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end"></InputAdornment>}} />,
    },    
  ];

  return (
    <>
      
    <div className="input-group mb-1">
      <Paper style={{ padding: 16 }}>
        <Grid container alignItems="flex-start" spacing={2}>
          {formFields.map((item, idx) => (
            <Grid item xs={item.size} key={idx}>
              {item.field}
            </Grid>
          ))}
        </Grid>
      </Paper>

    </div>

    </>
  );
};

export default Swivel;
