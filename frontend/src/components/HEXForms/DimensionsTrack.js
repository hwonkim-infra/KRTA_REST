import { TextField } from "mui-rff";
import {
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";

const DimensionsTrack = () => {

  const formFields = [
    {
      size: 2,
      field: <TextField label="슈폭" name="undercarriage.shoe_width" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },
    {
      size: 2,
      field: <TextField label="트랙길이" name="undercarriage.track_length" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },    
    {
      size: 2,
      field: <TextField label="트랙높이" name="undercarriage.track_height" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },
    {
      size: 2,
      field: <TextField label="트랙중심간거리" name="undercarriage.track_gap" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },    
    {
      size: 2,
      field: <TextField label="텀블러간격" name="undercarriage.tumbler_distance" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
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

export default DimensionsTrack;
