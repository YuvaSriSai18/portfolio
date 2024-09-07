import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import InterestCard from "./InterestCard";
import { Interests } from "../../Constants/Interests";
export default function InterestsAbout() {
  return (
    <>
      <Box mt={3}>
        <Box display="flex" alignItems="center">
          <Typography variant="h5" fontWeight={600} marginRight={2} ml={1}>
            Interests
          </Typography>
          <Divider
            sx={{
              width: { xs: "130px", sm: "400px" },
              height: "3.5px",
              borderRadius: "12px",
              backgroundColor: "#484545",
            }}
          />
        </Box>
        <Box
          mt={3}
          ml={{ xs: 2, sm: 3 }}
          display="flex"
          flexWrap="wrap"
          gap={2}
        >
          {Interests.map((item, index) => (
            <InterestCard obj={item} key={index} />
          ))}
        </Box>
      </Box>
    </>
  );
}
