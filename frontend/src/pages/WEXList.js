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

import {Edit as EditIcon, Print as PrintIcon, Queue as QueueIcon, TextSnippet }  from "@mui/icons-material/";


import { DataGrid } from "@mui/x-data-grid";

import SpecSheetWX from "./previews/SpecSheetWX";
import CertPrev from "./previews/CertPrev";


const WEXList = () => {
  const [currentWEX, setCurrentWEX] = useState({});

  const WEXs = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWEXs());
  }, [dispatch]);

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "model_name", headerName: "기종명", width: 110 },
    { field: "registration_no", headerName: "형식", width: 70 },
    { field: "weight", headerName: "중량", width: 70 },
    { field: "boom", headerName: "Boom", width: 60,},
    { field: "arm", headerName: "Arm", width: 60, },
    { field: "bucket", headerName: "버켓", width: 60,},
    { field: "height", headerName: "높이", width: 60, },
    { field: "width", headerName: "너비", width: 60, },
    { field: "counterWeight", headerName: "CW", width: 50, },
    { field: "updated", headerName: "수정", width: 60 },    
    { field: "changeModel", headerName: "형식변경", width: 120 },
    { field: "result", headerName: "완료", width: 50 },
  ];

  const rows = WEXs?.map((WEX) => {
    return {
      id: WEX._id,
      model_name: WEX.model_name,
      registration_no: WEX.registration_no,
      weight: WEX.operating_weight,
      boom: WEX.attachments?.boom_length,
      arm: WEX.attachments?.arm_length,
      bucket: WEX.attachments?.bucket_heap,
      height: WEX.overall_height,
      width: WEX.overall_width,
      updated: (new Date(WEX.updatedAt)).toLocaleDateString('Ko-kr'),
      changeModel: WEX.ChangeModel ? WEX.ECN+" 변경" : " ",
      counterWeight: WEX.COG?.counterWeight_weight/1000 || '',
      result: WEX.approval_result ? "완료" : " ",
      ...WEX,
    };
  });

  return (
    <div>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div style={{ width: "100%", height: 1000 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                sorting: { sortModel: [{field: 'model_name', sort: 'asc'}]}
              }}
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

        <Grid item xs={4}>
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
              <Box>
              <Button
                sx={{m:1}}
                variant="outlined"
                startIcon={<EditIcon />}
                href={"/WEX/" + currentWEX?.id}                  
              >
                수정
              </Button>
              <Button
                sx={{m:1}}
                variant="contained"
                startIcon={<PrintIcon />}
                href={"/WEX/print/" + currentWEX?.id}
                target="_blank"
              >
                출력
              </Button>
              <Button
                sx={{m:1}}
                variant="text"
                startIcon={<TextSnippet />}
                href={"/WEX/specW/" + currentWEX?.id}
                target="_blank"
              >
                제원표
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
              <CertPrev values={currentWEX}></CertPrev>


            </Grid>
      </Grid>
    </div>
  );
};

export default WEXList;
