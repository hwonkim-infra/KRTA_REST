/* TCF Template Form */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createTCF, deleteTCF, updateTCF } from "../../actions/TCFs";
import TCFService from "../../services/TCFServices";
import PSCService from "../../services/PSCServices";

import { Form } from "react-final-form";

import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Button, Grid, Stack, Typography } from "@mui/material";

import { Tab, Tabs } from "react-bootstrap";

import TCFInput from "../../components/TCF/TCFInputs";
// import TCFTRiskReduction from "../../components/TCF/TCFTRiskReduction";

const TCFForm = () => {
  const [message, setMessage] = useState("");
  const [TCFData, setTCFData] = useState({});
  const [PSCData, setPSCData] = useState({});

  let { PSCId, TCFId } = useParams();


  const dispatch = useDispatch();
  let navigate = useNavigate();

  const getTCF = (id) => {
    TCFService.get(id)
      .then((response) => {
        setTCFData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getPSC = (id) => {
    PSCService.get(id)
      .then((response) => {
        delete response.data._id 
        setPSCData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTCF(TCFId);
    getPSC(PSCId);

  }, [TCFId, PSCId]);

  const onSubmit = (values) => {
    if (!TCFId) {
      return create(values);
    }
    return update(TCFId, values);
  };

  const create = async (values) => {
    await dispatch(createTCF(values))
      .then((response) => {
        console.log(response);
        navigate("/TCF");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  const update = async (id, values) => {
    await dispatch(updateTCF(id, values))
      .then((response) => {
        console.log(response);
        setMessage("This File updated successfully!");
        navigate("/TCF");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  const remove = async () => {
    if (window.confirm("이 문서를 삭제하시겠습니까")) {
      await dispatch(deleteTCF(TCFId))
        .then((response) => {
          console.log(response);
          setMessage("This File deleted successfully!");
          navigate("/TCF");
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
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TCFInput {...values} />
                <Typography>Risk Reduction</Typography>
                {/* <TCFTRiskReduction /> */}

                <Stack
                  direction="row"
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

export default TCFForm;
