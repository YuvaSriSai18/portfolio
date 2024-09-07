import React from "react";
import { Box, Typography } from "@mui/material";
export default function InterestCard({ obj }) {
  return (
    <>
      <Box
        border="2px solid #000"
        borderRadius={8}
        width={{ xs: "120px", sm: "180px" }}
        display="flex"
        flexDirection="column"
        justifyContent={{ xs: "space-around" }}
        alignItems="center"
        p={2}
      >
        <Box
          component={"img"}
          src={obj.img}
          alt={obj.name}
          width="60%"
          mb={1}
          display={"70%"}
        />
        <Typography
          textAlign="center"
          display={"30%"}
          fontWeight={500}
          m={{ xs: 0.1, sm: 0 }}
        >
          {obj.name}
        </Typography>
      </Box>
    </>
  );
}
