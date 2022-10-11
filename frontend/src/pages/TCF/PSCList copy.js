import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Box, Collapse, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPSCs } from "../../actions/PSCs";
import PSCTable from "../../components/TCF/PSCTable";


const PSCList = () => {
  const [TCFwindow, setTCFwindow] = useState(false);

  const PSCs = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPSCs());
  }, [dispatch]);

  return (
    <div>
      <Grid container spacing={2}>
          <Grid item xs={8}>
        <Paper elevation={2} style={{ padding: "5px" }}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell width="5%"> </TableCell>
                    <TableCell>ITEM</TableCell>
                    <TableCell align="right">reference</TableCell>
                    <TableCell align="right">requirements</TableCell>
                    <TableCell align="right" width="5%" height="10px">
                      Edit
                    </TableCell>
                    <TableCell align="right" width="5%">
                      TCF
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {PSCs.map((row) => (
                    <PSCTable row={row} key={row._id} onClick={() => console.log(row._id )} />
                  ))}
                  <TableRow>
                    <TableCell align="center" colSpan={4}>
                      <Link to={"/PSC/new"}>Add</Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
        </Paper>
          </Grid>
      </Grid>
    </div>
  );
};

export default PSCList;
