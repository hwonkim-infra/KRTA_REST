import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getWEXs } from "../actions/WEXs";
import {
  Grid,
  Box,
  Button,
  Stack,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import PrintIcon from "@mui/icons-material/Print";
import QueueIcon from "@mui/icons-material/Queue";

import { DataGrid } from "@mui/x-data-grid";

import SpecSheetWX from "./previews/SpecSheetWX";


const WEXList = () => {
  const [currentWEX, setCurrentWEX] = useState({});

  const WEXs = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWEXs());
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

  const rows = WEXs?.map((WEX) => {
    return {
      id: WEX._id,
      model_name: WEX.model_name,
      boom: WEX.attachments?.boom_length,
      arm: WEX.attachments?.arm_length,
      bucket: WEX.attachments?.bucket_heap,
      updated: WEX.updatedAt,
      shoe: WEX.undercarriage?.shoe_width,
      changeModel: WEX.ChangeModel ? "변경" : " ",
      counterWeight: WEX.COG?.counterWeight_weight/1000 || '',
      result: WEX.description?.approval_result ? "완료" : " ",
      ...WEX,
    };
  });

  return (
    <div>

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
                setCurrentWEX(selectedRowData[0]);
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
              {currentWEX?.model_name}
            </Box>
            <Box component="span" sx={{ p: 1, border: "1px" }}>
              {currentWEX?.serial_no}
            </Box>

            {currentWEX.model_name && (
              <Box >
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  href={"/WEX/" + currentWEX?.id}
                >
                  수정
                </Button>
                <Button
                  variant="contained"
                  startIcon={<PrintIcon />}
                  href={"/WEX/print/" + currentWEX?.id}
                  target="_blank"
                >
                  출력
                </Button>
              </Box>
            )}
          </Stack>

          {(!currentWEX.ChangeModel && currentWEX.model_name) && (
            <Box>
              <Button
                variant="compromised"
                startIcon={<QueueIcon />}
                
              >
                <Link to={{
                  pathname: `/WEX/addChange/${currentWEX?.id}`,
                  isChangeModel: true,
                }}>변경형식</Link>
                
              </Button>
            </Box>
          )}
              <SpecSheetWX values={currentWEX}></SpecSheetWX>


            </Grid>
      </Grid>
    </div>
  );
};

export default WEXList;
