import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
        variant="extended"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        size="small"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
