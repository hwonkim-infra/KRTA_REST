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

const DimensionsWheel = () => {

  const formFields = [
    {
      size: 2,
      field: <TextField label="축거" name="undercarriage.wheel_base" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },
    {
      size: 2,
      field: <TextField label="윤거(전축)" name="undercarriage.axle_track_front" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },    
    {
      size: 2,
      field: <TextField label="윤거(후축)" name="undercarriage.axle_track_rear" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },
    {
      size: 2,
      field: <TextField label="타이어 갯수" name="undercarriage.no_tires" margin="none" type="number"  InputProps={{endAdornment: <nputAdornment position="end"></nputAdornment>}} />,
    },    
    {
      size: 2,
      field: <TextField label="타이어 전축" name="undercarriage.tire_frontAxle" margin="none" type="string"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    }, 
    {
        size: 2,
        field: <TextField label="타이어 후축" name="undercarriage.tire_rearAxle" margin="none" type="string"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
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

export default DimensionsWheel;
