import { Grid, Paper } from "@mui/material";
import { TextField } from "mui-rff";
import React from "react";

const PSCInput = (values = {}) => {
  
  const formFields = [
    {
      size: 5,
      field: <TextField label="ITEM" name="item" margin="none" />,
    },
    {
      size: 7,
      field: <TextField label="Reference" name="reference" margin="none" />,
    },

    {
      size: 12,
      field: <TextField multiline label="requirements" name="requirements" margin="none" />,
    },
    {
      size: 12,
      field: <TextField multiline label="Compliance Statement" name="complyStatements" margin="none" />,
    },
        
  ];
  
  return (
    <>
      <div>
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

export default PSCInput;
