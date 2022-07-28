import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {getHEX} from "../../actions/HEXs";
import { useDispatch, useSelector } from "react-redux";
import '../style/pages.css'

import HEXSpec from "./HEXSpec";
import WorkingRange from "./WorkingRange";
import GrossWeights from "./GrossWeights";
import CompareChange from "./CompareChange";
import QCouplr from "./QCouplr";
import GroundPressure from "./GroundPressure";
import SwivelSpeed from "./SwivelSpeed";
import TravelSpecHX from "./TravelSpecHX";
import TravelSlope from "./TravelSlope";
import StabilityHX from "./StabilityHX";
import Drawings from "./Drawings";
import Transportation from "./Transportation";

const HEXprint = () => {
  
  const {id} = useParams();
    const dispatch = useDispatch();
    const HEXdata = useSelector(state => state.productDetails);
    
    
    useEffect(() => {
      console.log(id);
      dispatch(getHEX(id));
      
  }, []);

  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$$", "$$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };

    return (
    <div>
      <HEXSpec values={HEXdata} />
      {HEXdata.ChangeModel && <CompareChange values={HEXdata} />}
      <Drawings values={HEXdata}  />
      <WorkingRange values={HEXdata} />
      <QCouplr values={HEXdata} />
      <GrossWeights values={HEXdata} />
      <GroundPressure values={HEXdata} config={config} />
      <SwivelSpeed values={HEXdata} config={config} />
      <TravelSpecHX values={HEXdata} config={config} />
      <TravelSlope values={HEXdata} config={config} />
      <StabilityHX values={HEXdata}  />
      <Transportation values={HEXdata}  />

      
    </div>
  );
};

export default HEXprint;
