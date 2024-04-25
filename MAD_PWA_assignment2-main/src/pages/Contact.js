import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout  sx={{
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "align-items": "center",
    }}>
      <Box sx={{ "margin":"5rem", "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>
          We are thrilled to hear from you. Whether you have questions, feedback, or simply want to say hello, please don't hesitate to reach out. Your thoughts and inquiries are valuable to us, and we are committed to providing you with the best possible experience. Feel free to fill out the form below or contact us directly via email or phone. We look forward to connecting with you and assisting in any way we can.
        </p>
      </Box>
      <Box
        sx={{
          m: 10,
          width: "600px",
          "@media (max-width:700px)": {
            "display": "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "align-items": "center",            
          "width": "80%",
          "margin":"10%",
          },
        }}
      >
        

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <Button type="dark" variant="contained" color="primary" sx={{ "background-color": "black", "color": "white" }} >
            Submit
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default Contact;
