import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: 1.5,
        borderTopRightRadius: "5px",
        borderTopLeftRadius: "5px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ textAlign: "center", color: "HighlightText", fontSize: 18 }}
      >
        designed and developed
        <span  style={{ marginLeft: "5px", marginRight: "5px", color: "pink"}}>
          Amamria Ilyess
        </span>
        by @2024
      </Typography>
    </Box>
  );
};

export default Footer;
