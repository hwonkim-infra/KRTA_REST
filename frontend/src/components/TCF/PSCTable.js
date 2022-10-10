import NewspaperIcon from "@mui/icons-material/Newspaper";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import { Box, Button, Checkbox, Chip, Collapse, IconButton, Stack, Table, TableBody, TableCell, TableHead, styled, TableRow, Typography, Modal,Paper} from "@mui/material";
import React, { Fragment, useState } from "react";

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const chipData = 
[
  { key: 0, label: 'Angular' },
  { key: 1, label: 'jQuery' },
  { key: 2, label: 'Polymer' },
  { key: 3, label: 'React' },
  { key: 4, label: 'Vue.js' },
]


const PSCTable = ({ row }) => {
  console.log("🚀 ~ file: PSCTable.js ~ line 68 ~ PSCTable ~ row", row);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Fragment>
      <TableRow
        key={row.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        onClick={() => setOpen(!open)}
      >
        <TableCell padding="checkbox">
          <Checkbox color="primary" />
        </TableCell>
        <TableCell>{row.item}</TableCell>
        <TableCell align="right">{row.reference}</TableCell>
        <TableCell align="right">{row.requirements}</TableCell>
        <TableCell>
          <IconButton href={"/PSC/edit/" + row._id}>
            <EditIcon />
          </IconButton>
        </TableCell>

        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Button onClick={handleModalOpen}>Open modal</Button>
              <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Details in a modal
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    PSC Item detail requirements
                    {row.riskReduct}
                  </Typography>
                </Box>
              </Modal>
              <Typography variant="h6" gutterBottom component="div">
                TCFs 
              </Typography>
              <Stack direction="row" spacing={1}>
      <Chip label="HX140" component="a" href={`/TCF/edit/`} clickable />
      <Chip label="Clickable" variant="outlined"  />
    </Stack>
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;



        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
            />
          </ListItem>
        );
      })}
    </Paper>
              <IconButton href={"/TCF/new/"}>
                <NewspaperIcon />
                New
              </IconButton>
              <IconButton href={"/TCF/edit/:id"}>
                <ModeEditOutlineOutlinedIcon />
                EditTCF
              </IconButton>

         
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default PSCTable;
