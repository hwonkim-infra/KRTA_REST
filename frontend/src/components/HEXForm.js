import React, { useState, } from "react";
import { useDispatch } from "react-redux";
import {
  updateHEX,
  createHEX,
  deleteHEX,
  createHEXChange,
} from "../actions/HEXs";
import { useNavigate, useParams } from "react-router-dom";

import { Form, FormSpy } from "react-final-form";
import FlashMessage from "react-flash-message";

import Summary from "./HEXForms/Summary";
import EngineFields from "./EngineFields";
import Dimensions from "./HEXForms/Dimensions";
import DimensionsTrack from "./HEXForms/DimensionsTrack";
import DimensionsQC from "./HEXForms/DimensionsQC";
import Swivel from "./HEXForms/Swivel";
import TravelHX from "./HEXForms/TravelHX";
import AddDrawings from "./HEXForms/Drawings/AddDrawings";
import StabilityCOG from "./HEXForms/StabilityCOG";
import TransPortation from "./HEXForms/TransPortation";
import TAResult from "./HEXForms/TAResult";

import {
  Grid,
  Button,
  Stack,
  
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import {Tab, Tabs,  } from 'react-bootstrap'
import SpecSheet from "../pages/previews/SpecSheet";
import CompareSheet from "../pages/previews/CompareSheet";
import { useLocation } from "react-router-dom";

import HEXCalc from "./HEXCalc";

const HEXForm = (HEXData) => {
  const [message, setMessage] = useState("");

  const { id } = useParams();

  const dispatch = useDispatch();
  let navigate = useNavigate();

  let location = useLocation();


  const onSubmit = (values) => {
    if (location.pathname.includes("addChange")) {
      
      values.origin = values._id;
      delete values._id;

      return createChange(values);
    } else {
      if (!id) {
        return create(values);
      }
      return update(id, values);
    }
  };

  const create = async (values) => {
    await dispatch(createHEX(values))
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  const createChange = async (values) => {
    await dispatch(createHEXChange(values))
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  const update = async (id, values) => {
    await dispatch(updateHEX(id, values))
      .then((response) => {
        console.log(response);
        setMessage("This Product updated successfully!");
        navigate("/");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  const remove = async () => {
    if (window.confirm("이 모델을 삭제하시겠습니까")) {
      await dispatch(deleteHEX(id))
        .then((response) => {
          console.log(response);
          setMessage("This Product deleted successfully!");
          navigate("/");
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
        initialValues={HEXData.HEXData || ""}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
                  {HEXCalc(values)}
                  <Summary {...values}/>
                  <Tabs defaultActiveKey="dimension" className="mb-3">
                    <Tab eventKey="dimension" title="외관 제원">
                      <Dimensions values={values} />
                      <DimensionsTrack />
                      <DimensionsQC />

                    </Tab>

                    <Tab eventKey="travel" title="주행 선회">
                      <Swivel />
                      <TravelHX />
                    </Tab>

                    <Tab eventKey="drawings" title="외관도">
                      <AddDrawings />
                    </Tab>

                    <Tab eventKey="stability" title="안정도">
                      <StabilityCOG {...values} />
                    </Tab>

                    <Tab eventKey="engine" title="엔진 사양">
                      <EngineFields {...values} />
                    </Tab>

                    <Tab eventKey="transportation" title="분해 수송">
                      <TransPortation {...values} />
                    </Tab>

                    <Tab eventKey="result" title="승인서">
                      <TAResult />
                    </Tab>
                  </Tabs>

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
        <Grid item xs={5}>
                  {values.ChangeModel && <CompareSheet values={values} />}
                  <FormSpy subscription={{ values: true }}>
                  {({ values }) => (

                    <SpecSheet values={values} />
                    )}

                  </FormSpy>
                    {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}

            </Grid>
      </Grid>
          </form>
        )}
      />
    </div>
  );
};

export default HEXForm;
