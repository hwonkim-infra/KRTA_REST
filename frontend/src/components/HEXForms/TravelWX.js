import { TextField } from "mui-rff";
import {
  FormGroup,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";

const TravelWX = () => {
  const formFieldsTravelSpeed = [
    {
      size: 2,
      field: (
        <TextField
          label="주행 펌프 용량"
          name="travel.pump_displacement_travel"
          margin="none"
          InputProps={{
            endAdornment: <InputAdornment position="end">l/min</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="타이어 동하중 반경"
          name="travel.tire_rolling_radius"
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
          label="주행모터 용적"
          name="travel.motor_displacement_travel"
          margin="none"
          InputProps={{
            endAdornment: <InputAdornment position="end">㏄/rev</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="주행모터 효율"
          name="travel.motor_eff_travel"
          margin="none"
          type="number"
          min="0"
          max="1"
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
          label="감속비: 미션"
          name="travel.TM_reduction"
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
          label="감속비: 액슬"
          name="travel.axle_reduction"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎜</InputAdornment>,
          }}
        />
      ),
    },
  ];

  const formFieldsTravelRadius = [
    {
      size: 2,
      field: (
        <TextField
          label="킹핀 간격"
          name="travel.kingpin_gap"
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
          label="킹핀 - 타이어 간격"
          name="travel.kingpin_offset"
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
          label="외륜최대조향각"
          name="travel.wheel_angle"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end"></InputAdornment>,
          }}
        />
      ),
    },
  ];

  const formFieldsTravelSlope = [
    {
      size: 2,
      field: (
        <TextField
          label="견인력"
          name="travel.traction_force"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎏f</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="브레이크 토크"
          name="travel.brake_torque_axle"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="지면마찰계수"
          name="travel.friction_surface"
          margin="none"
          type="number"
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
            label="주행저항계수"
            name="travel.running_resist"
            margin="none"
            type="number"
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
            label="기준등판각도"
            name="travel.engine_slope"
            margin="none"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
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
                주행 속도 관련
            <Paper style={{ padding: 10 }}>
              <FormGroup row>
                {formFieldsTravelSpeed.map((item, idx) => (
                  <Grid item xs={6} key={idx}>
                    {item.field}
                  </Grid>
                ))}
              </FormGroup>
            </Paper>
          </Grid>


          <Grid item xs={6}>
                등판 주행 제동 능력 관련
            <Paper style={{ padding: 10 }}>
              <FormGroup row>
                {formFieldsTravelSlope.map((item, idx) => (
                  <Grid item xs={6} key={idx}>
                    {item.field}
                  </Grid>
                ))}
              </FormGroup>
            </Paper>
          </Grid>

          <Grid item xs={6}>
                주행 최소 회전 반경
            <Paper style={{ padding: 10 }}>
              <FormGroup row>
                {formFieldsTravelRadius.map((item, idx) => (
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

export default TravelWX;
