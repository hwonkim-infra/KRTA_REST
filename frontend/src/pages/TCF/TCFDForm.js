/* TCF Description Each Model Form */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createTCF, deleteTCF, updateTCF } from "../../actions/TCFs";
import TCFService from "../../services/TCFServices";

import { Form } from "react-final-form";
import FlashMessage from "react-flash-message";


import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { Button, Grid, Stack, Typography } from "@mui/material";

import { Tab, Tabs } from 'react-bootstrap';

import Models from "../../components/TCF/Models";
import TCFhazardA from "../../components/TCF/TCFThazardA";
import TCFHead from "../../components/TCF/TCFTHead";
import TCFview from "../../components/TCF/TCFTview";
import TCFDescription from "../../components/TCF/TCFDescription";


const TCFDForm = () => {
  const [message, setMessage] = useState("");
  const [TCFData, setTCFData] = useState({})

  const { id } = useParams();

  const dispatch = useDispatch();
  let navigate = useNavigate();


  const getTCF = (id) => {
    TCFService.get(id).then((response) => {
      setTCFData(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  useEffect(() => {
    getTCF(id);
  }, [id]);

  const onSubmit = (values) => {
    if (!id) {
      return create(values);
    }
    return update(id, values);
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
      await dispatch(deleteTCF(id))
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
        initialValues={TCFData}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
                  
                  <Models />
                 {/*  <Tabs defaultActiveKey="hazard" className="mb-3">
                    <Tab eventKey="hazard" title="hazard">
                      <Typography>Hazard Description</Typography>
                      <TCFhazardA />
                    </Tab>

                    <Tab eventKey="complyState" title="compliance">
                    </Tab>

                    <Tab eventKey="description" title="description">
                    </Tab>


                  </Tabs> */}
                  <TCFDescription />

                  <Stack
            direction="row"
            spacing={3}
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


                  <p>{message}</p>
                  <FlashMessage duration={5000}></FlashMessage>
              </Grid>
        <Grid item xs={6}>
                  <TCFview values={values} />

                    <pre>{JSON.stringify(values, 0, 2)}</pre>

            </Grid>
      </Grid>
          </form>
        )}
      />
    </div>
  );
};

export default TCFDForm;
