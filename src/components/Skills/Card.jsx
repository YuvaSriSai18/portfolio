import React from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
export default function Card({ obj }) {
  return (
    <Box>
      <Link to={obj.link || "#"} target="_blank">
        <Tooltip title={obj.name} placement="top">
          <Box
            mt={1}
            component={"img"}
            border={"2px solid #000"}
            borderRadius={6}
            p={2}
            width={"100px"}
            src={obj.icon}
          />
        </Tooltip>
      </Link>
    </Box>
  );
}
