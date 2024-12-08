import React, { useState } from "react";
import { Box, Button, Divider, Typography, Modal } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "100%",
    sm: 400,
  },
  bgcolor: "background.paper",
  boxShadow: 48,
  borderRadius: 3,
  p: 4,
};

export default function ProjectCard({ obj, index }) {
  // Accept the index prop
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      width={{ xs: 270, sm: 230, lg: 250 }}
      borderRadius={8}
      border={"1px solid #000"}
      display={"flex"}
      flexDirection={"column"}
      sx={{
        transition: "transform 0.3s ease-in-out",
        animation: `fadeSlideUp 1s ease-out`,
        animationDelay: `${index * 0.1}s`, // Use the index to stagger the animation
        animationFillMode: "both",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Box
        border={"1px solid #bfbdb8"}
        p={2}
        width={"90%"}
        height={140}
        ml={1.5}
        mt={1.5}
        mb={1.5}
        borderRadius={6}
        component={"img"}
        src={obj.img}
        alt={obj.title}
      />
      <Box display={"flex"} justifyContent={"space-evenly"}>
        <Link
          to={obj.gitUrl}
          style={{ textDecoration: "none", display: "flex" }}
          target="_blank"
        >
          <Box
            display={"flex"}
            border={"1px solid #000"}
            p={0.5}
            borderRadius={2}
            ml={1}
            mb={1}
          >
            <Typography mr={1}>Github</Typography>
            <LaunchIcon fontSize="16px" sx={{ marginTop: 0.6 }} />
          </Box>
        </Link>

        <Box
          display={"flex"}
          border={"1px solid #000"}
          p={0.5}
          borderRadius={2}
          ml={1}
          mb={1}
          onClick={handleOpen}
          sx={{ cursor: "pointer" }}
        >
          <Typography mr={1} p={0.1}>
            View Details
          </Typography>
        </Box>
      </Box>

      <Divider />
      <Typography
        textAlign={"center"}
        component={"p"}
        width={"100%"}
        height={"20px"}
        mt={1}
        mb={4}
        fontWeight={600}
      >
        {obj.title}
      </Typography>

      {/* Modal Code */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="project-modal-title" variant="h6" component="h2">
            {obj.title}
          </Typography>
          <Typography id="project-modal-description" sx={{ mt: 2 , textAlign:'justify' }}>
            {obj.projectDesc} {/* Display detailed description here */}
          </Typography>
          <Typography>
            <b>Tech stack: </b>
            {obj.techStack.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </Typography>
          {obj.demoUrl ? (
            <>
              <Box mt={1} mb={1}>
                <Link to={obj.demoUrl} target="_blank">
                  Demo Link
                </Link>
              </Box>
            </>
          ) : (
            <></>
          )}
          <Button
            onClick={handleClose}
            sx={{ mt: 2, color: "#000", border: "1px solid grey" }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
