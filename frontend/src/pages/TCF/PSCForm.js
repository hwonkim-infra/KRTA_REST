/* PSC Template Form */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createPSC, deletePSC, updatePSC } from "../../actions/PSCs";
import PSCService from "../../services/PSCServices";

import { Form, Field } from "react-final-form";
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'


import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Button, Grid, Stack, Typography } from "@mui/material";

import { Tab, Tabs } from "react-bootstrap";

import PSCInput from "../../components/TCF/PSCInputs";
import DetailInput from "../../components/TCF/PSCdetailInputs";
// import PSCTRiskReduction from "../../components/PSC/PSCTRiskReduction";

const PSCForm = () => {
  const [message, setMessage] = useState("");
  const [PSCData, setPSCData] = useState({});

  const { id } = useParams();

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const getPSC = (id) => {
    PSCService.get(id)
      .then((response) => {
        setPSCData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPSC(id);
  }, [id]);

  const onSubmit = (values) => {
    if (!id) {
      return create(values);
    }
    return update(id, values);
  };

  const create = async (values) => {
    await dispatch(createPSC(values))
      .then((response) => {
        console.log(response);
        navigate("/PSC");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  const update = async (id, values) => {
    await dispatch(updatePSC(id, values))
      .then((response) => {
        console.log(response);
        setMessage("This File updated successfully!");
        navigate("/PSC");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  const remove = async () => {
    if (window.confirm("이 문서를 삭제하시겠습니까")) {
      await dispatch(deletePSC(id))
        .then((response) => {
          console.log(response);
          setMessage("This File deleted successfully!");
          navigate("/PSC");
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    }
  };


  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={PSCData}
        mutators={{ ...arrayMutators }}
        render={({ handleSubmit, form: {mutators: {push, pop}}, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <PSCInput {...values} />
                <div className="buttons">
              <Button
                variant="outlined" size ="small"
                onClick={() => push('actions', undefined)}
              >
                Add Action
              </Button>
              <Button variant="outlined" size ="small" onClick={() => pop('actions')}>
                Remove Action
              </Button>
            </div>
            {/* <FieldArray name="actions">
              {({ fields }) =>
                fields.map((name, index) => (
                  <div key={name}>
                    <label>Detail Action. #{index + 1}</label>
                    <Field
                      name={`${name}.subItem`}
                      component="input"
                      placeholder="sub Item"
                    />
                    <Field
                      name={`${name}.subAction`}
                      component="input"
                      placeholder="sub Action"
                    />
                              
                    <span
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      ❌
                    </span>
                  </div>
                ))
              }
            </FieldArray> */}
            <DetailInput />
                <Typography>Risk Reduction</Typography>

                <Stack
                  direction="row"
                  spacing
                  alignItems="flex-end"
                  justifyContent="space-between"
                >
                  <Button
                    variant="outlined"
                    startIcon={<SaveIcon />}
                    type="submit"
                  >
                    저장
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={remove}
                  >
                    삭제
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                {/* <TCFview values={values} /> */}

                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </div>
  );
};

export default PSCForm;
