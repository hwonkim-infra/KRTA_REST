import { TextField } from "mui-rff";
import {
  FormGroup,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";

const TransPortation = (values) => {
    // const transportation_1_weight = values.operating_weight - values.transportation.transportation_2_weight;
    
    const formFields = [
    {
      size: 10,
      field: (
        <TextField
          label="분해수송 (1)"
          name="transport.transport_1"
          margin="none"
          placeholder="본체"
          InputProps={{
            endAdornment: <InputAdornment position="end"></InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="분해수송 중량"
          name="transport.transport_1_weight"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">ton</InputAdornment>,
          }}
          disabled
        />
      ),
    },
    {
        size: 10,
        field: (
          <TextField
            label="분해수송"
            name="transport.transport_2"
            margin="none"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
          />
        ),
      },
      {
        size: 2,
        field: (
          <TextField
            label="분해수송 중량"
            name="transport.transport_2_weight"
            margin="none"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">ton</InputAdornment>,
            }}
          />
        ),
      },
      {
        size: 10,
        field: (
          <TextField
            label="분해수송"
            name="transport.transport_3"
            margin="none"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
          />
        ),
      },
      {
        size: 2,
        field: (
          <TextField
            label="분해수송 중량"
            name="transport.transport_3_weight"
            margin="none"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">ton</InputAdornment>,
            }}
          />
        ),
      },
      {
        size: 10,
        field: (
          <TextField
            label="분해수송"
            name="transport.transport_4"
            margin="none"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
            }}
          />
        ),
      },
      {
        size: 2,
        field: (
          <TextField
            label="분해수송 중량"
            name="transport.transport_4_weight"
            margin="none"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">ton</InputAdornment>,
            }}
          />
        ),
      },
  ];

  return (
    <>
      <div classname="input-group mb-1">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper style={{ padding: 10 }}>
              <FormGroup row>
                {formFields.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
              </FormGroup>
            </Paper>
          </Grid>

        </Grid>
        중량1: {(values.operating_weight - values.transport?.transport_2_weight)}
      </div>
    </>
  );
};

export default TransPortation;
