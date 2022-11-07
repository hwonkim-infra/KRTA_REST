import React, { useEffect, useState } from "react";

import { Edit as EditIcon } from "@mui/icons-material/";
import {
  Box, CircularProgress, IconButton
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getTCFs } from "../../actions/TCFs";
import TCFPrev from "../previews/TCFPrev";
import TabComponent from "../../components/TabComponent"

const TCFList = ({ currentID }) => {


  const TCFs = useSelector((state) => state.documentList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTCFs());
  }, [dispatch]);

  const TCFedit = (currentTCF) => (
    <IconButton href={"/TCF/edit/" + currentTCF._id}>
      <EditIcon />
    </IconButton>
  );

  const filteredTCFs = TCFs.filter(data => data.pscID === currentID);

  if (!TCFs) return <CircularProgress />;

  const handleDeleteRow = () => {
    window.alert("Delete row!");
  };

  const handleAddRow = () => {
    window.alert("Add row!");
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <TabComponent data={filteredTCFs} />
        
        {TCFs.filter((data) => data.pscID === currentID).map((data) => {
          return (
            <li key={data._id}>
              
              <TCFPrev data = {data} />
            </li>
          );
        })}
      </Box>
    </div>
  );
};

export default TCFList;
