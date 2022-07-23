import React, { useRef } from "react";
import {Box, Button, ButtonGroup, Modal } from '@mui/material';

import DrawingsExterior from "./Drawings/DrawingsExterior";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Drawings = () => {
  const [openExt, setOpenExt] = React.useState(false);
  const handleExteriorOpen = () => setOpenExt(true);
  const handleExteriorClose = () => setOpenExt(false);
  const [openBoom, setOpenBoom] = React.useState(false);
  const handleBoomOpen = () => setOpenBoom(true);
  const handleBoomClose = () => setOpenBoom(false);
  const [openArm, setOpenArm] = React.useState(false);
  const handleClose = () => setOpenArm(false);

  return (
    <div>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button onClick={handleExteriorOpen}>외관도</Button>
      <Button onClick={handleBoomOpen}>Boom</Button>
</ButtonGroup>
      <Modal
        open={openExt}
        onClose={handleExteriorClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            Exterior
            <DrawingsExterior></DrawingsExterior>
            
      <Button onClick={handleExteriorClose}>Close</Button>

        </Box>
      </Modal>

      <Modal
        open={openBoom}
        onClose={handleBoomClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            Boom Drawing
        </Box>
      </Modal>
    </div>
  );

};

export default Drawings;
