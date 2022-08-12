import React from "react";
import { TextField } from "mui-rff";
import {  
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";

const Summary = (values) => {
  const formFields = [
    {
      size: 2,
      field: <TextField label="기종명" name="model_name" margin="none" />,
    },
    {
      size: 2,
      field: <TextField label="일련번호" name="serial_no" margin="none" type="number" />,
    },
    {
      size: 2,
      field: <TextField label="형식번호" name="registration_no" margin="none" type="number" />,
    },
    {
      size: 2,
      field: <TextField label="변속기" name="gearbox" margin="none" placeholder="무변속"/>,
    },
    {
      size: 2,
      field: <TextField label="자체중량" name="operating_weight" type="number" margin="none"  InputProps={{endAdornment: <InputAdornment position="end">㎏</InputAdornment>}} />,
    },
    {
      size: 2,
      field: <TextField label="규격" name="machine_grade" margin="none" />,
    },
    {
      size: 2,
      field: <TextField label="붐" name="attachments.boom_length" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },    {
      size: 2,
      field: <TextField label="암" name="attachments.arm_length" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎜</InputAdornment>}} />,
    },    {
      size: 2,
      field: <TextField label="버켓 용량(평적)" name="attachments.bucket_struck" margin="none" type="number"  InputProps={{endAdornment: <InputAdornment position="end">㎥</InputAdornment>}} />,
    },    
    {
      size: 2,
      field: <TextField label="버켓 용량(산적)" name="attachments.bucket_heap" margin="none" type="number" InputProps={{endAdornment: <InputAdornment position="end">㎥</InputAdornment>}} />,
    },
    {
      size: 2,
      field: <TextField label="카운터웨이트" name="COG.counterWeight_weight" margin="none" type="number" InputProps={{endAdornment: <InputAdornment position="end">㎏</InputAdornment>}} />,
    },
    
  ];

  const ECNField = [
    {
      size: 3,
      field: <TextField label="주요 형식변경" name="ECN" margin="none" />,
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
            
          
            {values.ChangeModel && ECNField.map((item, idx) => (
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

export default Summary;
