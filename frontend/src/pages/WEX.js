import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import WEXService from "../services/WEXServices";
import WEXForm from "../components/WEXForm";


const initialWEXState = {
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
    upperStructure_longitudinal: null}
};

const WEX = (props) => {
  const [currentWEX, setCurrentWEX] = useState(initialWEXState);
  const [message, setMessage] = useState("");

  

  const dispatch = useDispatch();

  const getWEX = (id) => {
    WEXService.get(id)
      .then((response) => {
        setCurrentWEX(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    getWEX(id);
  }, [id]);



  return (
    <div>
      <WEXForm WEXData = {currentWEX}></WEXForm>
      <p>{message}</p>
    </div>
  );
};

export default WEX;
