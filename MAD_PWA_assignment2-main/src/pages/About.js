import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          textAlign: "center",
          p: 11,
          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
          "& p": { textAlign: "justify" },
          "@media (max-width: 600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to Golden Spice House</Typography>
        <p>
          Welcome to Golden Spice House, where culinary excellence meets passion
          and innovation. Our journey began with a vision to redefine the dining
          experience in the heart of Mumbai. Rooted in a deep commitment to
          customer satisfaction and a love for culinary arts, we aim to deliver
          exceptional dishes and services that go beyond expectations.
          At Golden Spice House, our dedicated team of professionals is driven
          by a shared passion for quality, integrity, and continuous
          improvement. We believe in creating unforgettable dining moments by
          understanding our guests' unique preferences and crafting tailored
          culinary experiences that leave a lasting impression.
        </p>
        <br />
        <p>
          Beyond our culinary creations, we are committed to making a positive
          impact on our community and the environment. Through sustainable
          practices, social responsibility initiatives, and ethical business
          conduct, we strive to contribute meaningfully to society while
          ensuring a greener future for generations to come.
          Join us at Golden Spice House on this exciting journey as we continue
          to innovate, grow, and make a difference in the world, one delightful
          dish at a time. Thank you for choosing Golden Spice House for your
          dining experience. Cheers to good food, great memories, and a brighter
          tomorrow!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
