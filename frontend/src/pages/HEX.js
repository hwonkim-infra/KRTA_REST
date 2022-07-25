import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateHEX, deleteHEX } from "../actions/HEXs";
import HEXService from "../services/HEXServices";
import HEXForm from "../components/HEXForm";


const initialHEXState = {
  engine: { engine_name: null },
  undercarriage: { ground_clearance: null },
  attachments: { bucket_struck: null },
  swivel: {
    pump_flow: null,
    
  },
  travel: {
    pump_displacement: null,
  },
  drawings: {
    exterior: null,
  },
  description: {
    swing_reduction: null
  },
  COG: {
    upperStructure_longitudinal: null
  },
  transport: {
    transport_1: "본체",
    transport_1_weight: null,

  }
};

const HEX = (props) => {
  const [currentHEX, setCurrentHEX] = useState(initialHEXState);
  const [message, setMessage] = useState("");

  

  const dispatch = useDispatch();

  const getHEX = (id) => {
    HEXService.get(id)
      .then((response) => {
        setCurrentHEX(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    getHEX(id);
  }, [id]);



  return (
    <div>
      <HEXForm HEXData={currentHEX}></HEXForm>
      <p>{message}</p>
    </div>
  );
};

export default HEX;
