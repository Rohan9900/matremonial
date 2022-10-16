import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import basicImage from "../assets/images/basic.png";
import free from "../assets/images/free.png";
import premium from "../assets/images/premium.png";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  p: 4,
};

const boxStyle = {
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Plan(props) {
  console.log(props, "props");

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ color: "white", textAlign: "center" }}
          >
            Select Plan
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box sx={boxStyle}>
                <img
                  src={free}
                  style={{ height: "80px", width: "100%", textAlign: "center" }}
                />
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{ textAlign: "center" }}
                >
                  Free
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
                <Button
                  style={{
                    marginTop: "40px",
                    alignItems: "center",
                    width: "100%",
                  }}
                  variant="contained"
                >
                  Select
                </Button>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={boxStyle}>
                <img
                  src={basicImage}
                  style={{
                    height: "80px",
                    width: "100%",
                    alignItems: "center",
                  }}
                />
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{ textAlign: "center" }}
                >
                  Basic
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
                <Button
                  style={{
                    marginTop: "40px",
                    alignItems: "center",
                    width: "100%",
                  }}
                  variant="contained"
                >
                  Select
                </Button>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={boxStyle}>
                <img
                  src={premium}
                  style={{
                    height: "80px",
                    width: "100%",
                    alignItems: "center",
                  }}
                />
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{ textAlign: "center" }}
                >
                  Premium
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
                <Button
                  style={{
                    marginTop: "40px",
                    alignItems: "center",
                    width: "100%",
                  }}
                  variant="contained"
                >
                  Select
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
