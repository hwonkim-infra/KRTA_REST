import { TextField } from "mui-rff";
import {
  Grid,
  InputAdornment,
  FormGroup,
  Paper,
} from "@mui/material";

const DimensionsWheel = () => {
  const formFieldsAxle = [
    {
      size: 2,
      field: <TextField label="축거" name="undercarriage.wheel_base" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },
    {
      size: 2,
      field: <TextField label="전축 중심 간격" name="undercarriage.frontAxle_center" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end"></InputAdornment>}} />,
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
      field: <TextField label="허용하중 (전축)" name="undercarriage.axle_weight_front_limit" margin="none" type="string"  InputProps={{endAdornment: <InputAdornment position="end">㎏</InputAdornment>}} />,
    }, 
    {
        size: 2,
        field: <TextField label="허용하중 (후축)" name="undercarriage.axle_weight_rear_limit" margin="none" type="string"  InputProps={{endAdornment: <InputAdornment position="end">㎏</InputAdornment>}} />,
      }, 
  ];

  const formFieldsTire = [
    {
      size: 2,
      field: <TextField label="타이어 전축" name="undercarriage.tire_frontAxle" margin="none" type="string"  InputProps={{endAdornment: <InputAdornment position="end"></InputAdornment>}} />,
    }, 
    {
        size: 2,
        field: <TextField label="타이어 후축" name="undercarriage.tire_rearAxle" margin="none" type="string"  InputProps={{endAdornment: <InputAdornment position="end"></InputAdornment>}} />,
      }, 

      {
        size: 2,
        field: <TextField label="허용하중 (정지)" name="undercarriage.tire_load_limit" margin="none" type="string"  InputProps={{endAdornment: <InputAdornment position="end">㎏</InputAdornment>}} />,
      }, 
      {
          size: 2,
          field: <TextField label="허용하중 (주행)" name="undercarriage.tire_load_limit_running" margin="none" type="string"  InputProps={{endAdornment: <InputAdornment position="end">㎏</InputAdornment>}} />,
        }, 
  

      {
        size: 2,
        field: <TextField label="타이어 갯수" name="undercarriage.no_tires" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end"></InputAdornment>}} />,
      },    
      
  ];

  return (
    <>

      <div className="input-group mb-1">
      <Grid container spacing={2}>
          <Grid item xs={6}>
            액슬 제원
            <Paper style={{ padding: 10 }}>
              <FormGroup row>
                {formFieldsAxle.map((item, idx) => (
                  <Grid item xs={6} key={idx}>
                    {item.field}
                  </Grid>
                ))}
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            타이어 제원
            <Paper style={{ padding: 10 }}>
              <FormGroup row>
                {formFieldsTire.map((item, idx) => (
                  <Grid item xs={6} key={idx}>
                    {item.field}
                  </Grid>
                ))}
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>

    </div>

    </>
  );
};

export default DimensionsWheel;
