import React from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
export default function Card({ obj }) {
  return (
    <Box
      sx={{
        cursor:'pointer',
        transition: "transform 0.3s ease-in-out", // Smooth transition effect
        "&:hover": {
          transform: "scale(1.2)", // Scale up the image by 1.2 times
        },
      }}
    >
      <Tooltip title={obj.name} placement="top">
        <Box
          mt={1}
          component={"img"}
          border={"2px solid #000"}
          borderRadius={6}
          p={2}
          width={"100px"}
          src={obj.icon}
          sx={{cursor:'pointer'}}
        />
      </Tooltip>
    </Box>
  );
}
