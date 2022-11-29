import { TextField } from "mui-rff";
import {
  AppBar,
  Box,
  Button,
  FormGroup,
  Grid,
  InputAdornment,
  Link,
  Paper,
  Typography,
} from "@mui/material";

const TravelHX = () => {
  const formFields = [
    // 주행속도
    {
      size: 2,
      field: (
        <TextField
          label="주행펌프 유량"
          name="travel.pump_displacement"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">l/min"</InputAdornment>
            ),
          }}
        />
      ),
    },

    {
      size: 2,
      field: (
        <TextField
          label="주행모터 용적(1)"
          name="travel.TM_flow_1"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">cc/rev</InputAdornment>
            ),
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="주행모터 용적(2)"
          name="travel.TM_flow_2"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">cc/rev</InputAdornment>
            ),
          }}
        />
      ),
    },

    {
      size: 2,
      field: (
        <TextField
          label="모터 용적 효율"
          name="travel.TM_mv"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                (μ<sub>mv</sub>)
              </InputAdornment>
            ),
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="스프로켓 반경"
          name="travel.sprocket_radius"
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
          label="주행감속비"
          name="travel.reduc"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end"></InputAdornment>,
          }}
        />
      ),
    },
  ];

  const formFields2 = [
    // 견인력

    {
      size: 2,
      field: (
        <TextField
          label="주행펌프 압력"
          name="travel.pump_pressure"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">(P, bar)</InputAdornment>
            ),
          }}
        />
      ),
    },
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
          label="모터 기계 효율"
          name="travel.TM_mt"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                (μ<sub>mt</sub>)
              </InputAdornment>
            ),
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="동력 전달 효율"
          name="travel.TM_r"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                (μ<sub>r</sub>)
              </InputAdornment>
            ),
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="구동 점착 계수"
          name="travel.surface_drag"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                (μ<sub>mv</sub>)
              </InputAdornment>
            ),
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="주행 저항 계수"
          name="travel.drag"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">(η)</InputAdornment>,
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
          label="기준등판각도"
          name="travel.greadability_ref"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">°</InputAdornment>,
          }}
        />
      ),
    },
    {
      size: 2,
      field: (
        <TextField
          label="브레이크 토크"
          name="travel.brake_torque"
          margin="none"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">㎏m</InputAdornment>,
          }}
        />
      ),
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

      <Grid container spacing={2}>

      <Grid item xs={6}>
          주행속도 관련
          <Paper style={{ padding: 10 }}>
            <FormGroup row>
              {formFields.map((item, idx) => (
                <Grid item xs={6} key={idx}>
                  {item.field}
                </Grid>
              ))}
            </FormGroup>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          등판 능력 관련
          <Paper style={{ padding: 10 }}>
            <FormGroup row>
              {formFields2.map((item, idx) => (
                <Grid item xs={6} key={idx}>
                  {item.field}
                </Grid>
              ))}
            </FormGroup>
          </Paper>
        </Grid>
{/*         <Grid item xs={6}>
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
        </Grid> */}
      </Grid>
    </>
  );
};

export default TravelHX;
