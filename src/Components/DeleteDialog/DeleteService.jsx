import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: "0 4px 12px",
  p: 4,
  borderRadius: "8px",
};

export default function DeleteService({ handleDisableClick }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleYesClick = () => {
    handleClose();
    handleDisableClick();
  };

  return (
    <div>
      <Button
        variant='outlined'
        startIcon={<DeleteIcon />}
        onClick={handleOpen}
        style={{ borderColor: '#f5a02c', color: '#f5a02c', borderRadius: '8px' }} >
        Delete
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure to disable this service ?
          </Typography>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              mt: 2,
              float: "right",
              color: "gray",
              "&:hover": {
                backgroundColor: "white", // Màu khi di chuột qua
              },
              "&:active": {
                backgroundColor: "white", // Màu khi nút được nhấn
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleYesClick}
            sx={{
              mt: 2,
              float: "right",
              color: "#f5a02c",
              "&:hover": {
                backgroundColor: "white", // Màu khi di chuột qua
              },
              "&:active": {
                backgroundColor: "white", // Màu khi nút được nhấn
              },
            }}
            autoFocus
          >
            Yes
          </Button>
        </Box>
      </Modal>
    </div>
  );
}