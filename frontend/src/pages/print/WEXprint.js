import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWEX } from "../../actions/WEXs";
import { useDispatch, useSelector } from "react-redux";
import "../style/pages.css";

import WEXSpec from "./WEXSpec";
import WorkingRange from "./WorkingRange";
import GrossWeights from "./GrossWeights";
import AxleAndLoad from "./AxleAndLoad";
import CompareChangeWX from "./CompareChangeWX";
import QCouplr from "./QCouplr";
import SwivelSpeed from "./SwivelSpeed";
import TravelSpecHW from "./TravelSpecHW";
import TravelSlopeWX from "./TravelSlopeWX";
import TravelBrakingWX from "./TravelBrakingWX";
import Drawings from "./Drawings";
import AppendixDrawings from "./AppendixDrawings";

const WEXprint = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const WEXdata = useSelector((state) => state.productDetails);

  useEffect(() => {
    console.log(id);
    dispatch(getWEX(id));
  }, [dispatch, id]);

  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$$", "$$"],
        ["\\(", "\\)"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
      ],
    },
  };
  
  return (
    <div contenteditable="true">
      <WEXSpec {...WEXdata} />
      {WEXdata.ChangeModel && <CompareChangeWX values={WEXdata} />}
      <Drawings values={WEXdata}  />
      <AppendixDrawings values={WEXdata}  />
      <WorkingRange values={WEXdata} />
      <QCouplr values={WEXdata} />
      <GrossWeights values={WEXdata} />
      <AxleAndLoad values={WEXdata} />
      <SwivelSpeed values={WEXdata} config={config} />
      <TravelSpecHW values={WEXdata} config={config} />
      <TravelSlopeWX values={WEXdata} config={config} />
      <TravelBrakingWX values={WEXdata} config={config} />
      {/*       
      <StabilityHX values={WEXdata}  />
      <Transportation values={WEXdata}  /> */}
    </div>
  );
};

export default WEXprint;
