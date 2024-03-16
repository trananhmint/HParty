import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import './Condition.css'
import signature from '../Assets/signature.png'; 


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '90%',
  bgcolor: "background.paper",
  borderColor: 'white',
  boxShadow: 24,
  p: 4,
  maxHeight: '100vh', // Set max height to create a scrollable area
  overflowY: 'auto', // Add vertical scrollbar if content exceeds max height
};

export default function Condition() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <span style={{color: 'black', width: 'max-content'}}>Enter "Proceed to checkout" to agree with </span>
      <span sx={{ color: "orange", width: '100%', textDecoration: "underline" }} onClick={handleOpen}>
        Condition of HParty
      </span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h4" fontWeight={600} align="center" gutterBottom>
              Terms and Conditions for Booking Children's Birthday Party
              Services

            </Typography>
            <Paper elevation={3} style={{ padding: "20px", height: '100%' }}>
              <Typography variant="h5" fontWeight={550}>1. Decoration Rental:</Typography><br/>
              <Typography>
                <p>
                  - Provide event decoration services according to the renter's
                  requirements.
                </p><br/>
                <p>
                  -The setup and teardown time for decorations will be agreed
                  upon in advance.
                </p><br/>
                <p>
                  - The renter must carefully preserve the decorations to avoid
                  damage and return them intact after the event.
                </p><br/>
              </Typography>

              <Typography variant="h5" fontWeight={550}>2. Waitstaff Rental:</Typography><br/>
              <Typography>
                <p>- Provide a team of professional and friendly waitstaff.
                </p><br/>
                <p>
                  -The quantity and specific requirements for waitstaff will be
                  agreed upon in advance.
                </p><br/>
                <p>
                  - The renter must ensure favorable working conditions for the
                  waitstaff.
                </p><br/>
              </Typography>
              
              <Typography variant="h5" fontWeight={550}>3. Food and Drinks Ordering:</Typography><br/>
              <Typography>
                <p>
                  - Offer a diverse and extensive menu from partner restaurants.
                </p><br/>
                <p>
                  - Specific requests regarding the menu and beverages must be
                  submitted at least 3 days prior to the event date.
                </p><br/>
                <p>
                  - The renter is responsible for proper food and beverage
                  storage to ensure safety and quality.
                </p><br/>
              </Typography>
              
              <Typography variant="h5" fontWeight={550} >4. Venue Rental:</Typography><br/>
              <Typography>
                <p>
                  - Provide luxurious and convenient event venues for birthday
                  parties.
                </p><br/>
                <p>
                  - Payment of at least 50% of the total cost must be made prior
                  to the event date.
                </p><br/>
                <p>
                  - Adhere to the venue's regulations and terms regarding usage
                  and equipment.
                </p><br/>
              </Typography>
              
              <Typography variant="h5" fontWeight={550}>
                5. Payment and Cancellation Policy:
              </Typography><br/>
              <Typography>
                <p>
                  - The renter agrees to make full and timely payments as per
                  the agreement between both parties.
                </p><br/>
                <p>
                  - Services can be canceled up to 3 days before the event date.
                  In case of late cancellation, the renter is liable for
                  cancellation fees.
                </p><br/>
              </Typography>
              
              <Typography variant="h5" fontWeight={550}>
                6. Warranty and Customer Care:
              </Typography><br/>
              <Typography>
                <p>
                  - The service provider commits to delivering quality services
                  and supporting customers throughout the event organization
                  process.
                </p><br/>
                <p>
                  - Warranty coverage for decorations and other services will be
                  based on the agreement between both parties.
                </p><br/>
              </Typography>
              
              <Typography variant="h5" fontWeight={550}>7. Legal Regulations:</Typography><br/>
              <Typography>
                <p>
                  - Any disputes arising from this contract will be resolved
                  according to the prevailing laws of the country/community.
                </p><br/>
              </Typography>
              
              <Typography variant="h5" fontWeight={550}>8. Contract Validity:</Typography><br/>
              <Typography>
                <p>
                  - This contract is effective from the date of signing and
                  remains in effect until the completion of the agreed-upon
                  services or cancellation according to the stipulated terms.
                </p><br/>
              </Typography>
            </Paper>
            <br/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", float: "right"}}>
            <Typography variant="h5" fontWeight={550} sx={{}}>System Provider (Signature)</Typography><br/>
            <img src={signature} alt="" style={{width: "50%", height: "50%", marginLeft: 10}} /><br/>
            <Typography variant="h5" fontWeight={550} sx={{}}>HParty</Typography><br/>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
