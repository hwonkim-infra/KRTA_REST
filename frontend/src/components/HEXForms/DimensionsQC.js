import { TextField } from "mui-rff";
import {
  FormGroup,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";

const DimensionsQC = () => {
  const formFieldsQC = [
    {
      size: 2,
      field: (
        <TextField
          label="퀵커플러(1)"
          name="attachments.quick_coupler_1"
          margin="none"
          InputProps={{
            endAdornment: <InputAdornment position="end"> </InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="커플러 중량"
          name="attachments.quick_coupler_weight_1"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎏</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="퀵커플러(2)"
          name="attachments.quick_coupler_2"
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
          label="커플러 중량"
          name="attachments.quick_coupler_weight_2"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎏</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="높이 woQC"
          name="overall_height_woQC"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎜</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="길이 woQC"
          name="overall_length_woQC"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎜</InputAdornment>,
          }}
        />
      ),
    },
  ];

  const formFieldsWR = [
    {
      size: 2,
      field: (
        <TextField
          label="최대굴착반경"
          name="attachments.digging_reach"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎜</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="최대굴착반경 woQC"
          name="attachments.digging_reach_woqc"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎜</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="최대굴착깊이"
          name="attachments.digging_depth"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎜</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="최대굴착깊이 woQC"
          name="attachments.digging_depth_woqc"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎜</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="최대덤프높이"
          name="attachments.loading_height"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎜</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="최대덤프높이 woQC"
          name="attachments.loading_height_woqc"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎜</InputAdornment>,
          }}
        />
      ),
    },
  ];

  return (
    <>
      <div className="input-group mb-1">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper style={{ padding: 10 }}>
              <FormGroup row>
                {formFieldsQC.map((item, idx) => (
                  <Grid item xs={6} key={idx}>
                    {item.field}
                  </Grid>
                ))}
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ padding: 10 }}>
              <FormGroup row>
                {formFieldsWR.map((item, idx) => (
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

export default DimensionsQC;
