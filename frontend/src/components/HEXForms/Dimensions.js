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
import { FormSpy } from 'react-final-form'

const Dimensions = () => {
  const formFields = [

    {
      size: 2,
      field: <TextField label="길이" name="overall_length" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },    {
      size: 2,
      field: <TextField label="너비" name="overall_width" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },    {
      size: 2,
      field: <TextField label="높이" name="overall_height" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },    {
      size: 2,
      field: <TextField label="최저지상고" name="undercarriage.ground_clearance" margin="none" type="number" InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },
    {
      size: 2,
      field: <TextField label="후방선회반경" name="rear_swing_radius" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },
    {
      size: 2,
      field: <TextField label="배토판너비x높이" name="undercarriage.dozer_size" margin="none"   InputProps={{endAdornment: <InputAdornment position="end">㎜ ㎜</InputAdornment>}} />,
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

export default Dimensions;
