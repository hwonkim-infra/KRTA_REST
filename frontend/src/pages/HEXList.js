import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHEXs } from "../actions/HEXs";
import {
  Grid,
  Box,
  Button,
  Stack,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import PrintIcon from "@mui/icons-material/Print";
import QueueIcon from "@mui/icons-material/Queue";

import { DataGrid } from "@mui/x-data-grid";

import SpecSheet from "./previews/SpecSheet";
import Navbar from "../components/Navbar";

/* const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3,2),
    display: 'flex',
    justifyContent: 'center'
  }
})) */

const HEXList = () => {
  const [currentHEX, setCurrentHEX] = useState({});

  const HEXs = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  // const classes = useStyles();

  useEffect(() => {
    dispatch(getHEXs());
  }, []);

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "model_name", headerName: "기종명", width: 110 },
    { field: "changeModel", headerName: "변경", width: 30 },
    {
      field: "boom",
      headerName: "Boom",
      type: "number",
      width: 70,
      sortable: false,
    },
    {
      field: "arm",
      headerName: "Arm",
      type: "number",
      width: 70,
      sortable: false,
    },
    {
      field: "bucket",
      headerName: "bucket",
      type: "number",
      width: 70,
      sortable: false,
    },
    {
      field: "shoe",
      headerName: "shoe",
      type: "number",
      width: 70,
      sortable: false,
    },
    {
      field: "counterWeight",
      headerName: "CW",
      type: "number",
      width: 70,
      sortable: false,
    },
    { field: "updated", headerName: "수정", width: 100 },
    { field: "result", headerName: "완료", width: 50 },
  ];

  const rows = HEXs?.map((HEX) => {
    return {
      id: HEX._id,
      model_name: HEX.model_name,
      boom: HEX.attachments?.boom_length,
      arm: HEX.attachments?.arm_length,
      bucket: HEX.attachments?.bucket_heap,
      updated: HEX.updatedAt,
      shoe: HEX.undercarriage?.shoe_width,
      changeModel: HEX.ChangeModel ? "변경" : " ",
      counterWeight: HEX.COG?.counterWeight_weight/1000 || '',
      result: HEX.description?.approval_result ? "완료" : " ",
      ...HEX,
    };
  });

  return (
    <div>
      <Navbar></Navbar>

      <Grid container spacing={2}>
        <Grid item xs={7}>
          <div style={{ width: "100%", height: 1000 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              disableMultipleSelection={true}
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRowData = rows.filter((row) =>
                  selectedIDs.has(row.id.toString())
                );
                setCurrentHEX(selectedRowData[0]);
              }}
            />
          </div>
        </Grid>

        <Grid item xs={5}>
          <Stack
            direction="row"
            spacing={3}
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <Box component="span" sx={{ fontSize: "h4.fontSize" }}>
              {" "}
              {currentHEX?.model_name}
            </Box>
            <Box component="span" sx={{ p: 1, border: "1px" }}>
              {currentHEX?.serial_no}
            </Box>

            {currentHEX.model_name && (
              <Box >
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  href={"/HEX/" + currentHEX?.id}
                >
                  수정
                </Button>
                <Button
                  variant="contained"
                  startIcon={<PrintIcon />}
                  href={"/HEX/print/" + currentHEX?.id}
                  target="_blank"
                >
                  출력
                </Button>
              </Box>
            )}
          </Stack>

          {(!currentHEX.ChangeModel && currentHEX.model_name) && (
            <Box>
              <Button
                variant="compromised"
                startIcon={<QueueIcon />}
                
              >
                <Link to={{
                  pathname: `/HEX/addChange/${currentHEX?.id}`,
                  isChangeModel: true,
                }}>변경형식</Link>
                
              </Button>
            </Box>
          )}
              <SpecSheet values={currentHEX}></SpecSheet>


            </Grid>
      </Grid>
    </div>
  );
};

export default HEXList;
