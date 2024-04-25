import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": { fontSize: "60px", cursor: "pointer", mr: 2 },
            "& svg:hover": {
              transition: "transform 1s ease-in-out",
              color: "#fff48d",
              transform: "scale(1.1)", 
              
            },
          }}
        >
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
              "flex-direction": "column",
            },
          }}
        >
          All Rights Reserved &copy; Dhruuv Naik
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
