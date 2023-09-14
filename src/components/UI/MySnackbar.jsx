import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MySnackbar({ buttonText, messageText }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{
          backgroundColor: "white",
          border: "1px solid black",
          color: "black",
          "&:hover": {color: "rgb(230, 230, 230)", border: "1px solid white"},
        }}
      >
        {buttonText}
      </Button>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {messageText}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

MySnackbar.propTypes = {
  buttonText: PropTypes.string.isRequired,
  messageText: PropTypes.string.isRequired,
};
