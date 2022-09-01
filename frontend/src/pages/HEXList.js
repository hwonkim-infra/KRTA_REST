import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHEXs } from "../actions/HEXs";
import {
  Grid,
  Box,
  Button,
  Stack,
  styled,
} from "@mui/material";

import {Edit as EditIcon, Print as PrintIcon, Queue as QueueIcon, TextSnippet }  from "@mui/icons-material/";

import { DataGrid } from "@mui/x-data-grid";

import SpecSheet from "./previews/SpecSheet";
import CertPrev from "./previews/CertPrev";


const HEXList = () => {
  const [currentHEX, setCurrentHEX] = useState({});

  const HEXs = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHEXs());
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
    { field: "shoe", headerName: "shoe", width: 60, },
    { field: "counterWeight", headerName: "CW", width: 50, },
    { field: "updated", headerName: "수정", width: 60 },    
    { field: "changeModel", headerName: "형식변경", width: 120 },
    { field: "result", headerName: "완료", width: 50 },
  ];

  const rows = HEXs?.map((HEX) => {
    return {
      id: HEX._id,
      model_name: HEX.model_name,
      registration_no: HEX.registration_no,
      weight: HEX.operating_weight,
      boom: HEX.attachments?.boom_length,
      arm: HEX.attachments?.arm_length,
      bucket: HEX.attachments?.bucket_heap,
      height: HEX.overall_height,
      width: HEX.overall_width,
      updated: (new Date(HEX.updatedAt)).toLocaleDateString('Ko-kr'),
      shoe: HEX.undercarriage?.shoe_width,
      changeModel: HEX.ChangeModel ? HEX.ECN+" 변경" : " ",
      counterWeight: HEX.COG?.counterWeight_weight/1000 || '',
      result: HEX.approval_result ? "완료" : " ",
      ...HEX,
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
                setCurrentHEX(selectedRowData[0]);
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
              {currentHEX?.model_name}
            </Box>
            <Box component="span" sx={{ p: 1, border: "1px" }}>
              {currentHEX?.serial_no}
            </Box>

            {currentHEX.model_name && (
              <Box>
                <Button
                  sx={{m:1}}
                  variant="outlined"
                  startIcon={<EditIcon />}
                  href={"/HEX/" + currentHEX?.id}                  
                >
                  수정
                </Button>
                <Button
                  sx={{m:1}}
                  variant="contained"
                  startIcon={<PrintIcon />}
                  href={"/HEX/print/" + currentHEX?.id}
                  target="_blank"
                >
                  출력
                </Button>
                <Button
                  sx={{m:1}}
                  variant="text"
                  startIcon={<TextSnippet />}
                  href={"/HEX/specW/" + currentHEX?.id}
                  target="_blank"
                >
                  제원표
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
              <CertPrev values={currentHEX}></CertPrev>


            </Grid>
      </Grid>
    </div>
  );
};

export default HEXList;
