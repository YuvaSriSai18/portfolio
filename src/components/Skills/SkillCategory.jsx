import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import Card from "./Card";
export const SkillCategory = ({ title, skills }) => (
  <>
    <Box display="flex" alignItems="center">
      <Typography variant="h5" fontWeight={600} marginRight={2} ml={1}>
        {title}
      </Typography>
      <Divider
        sx={{
          width: { xs: "130px", sm: "400px" },
          height: "4px",
          borderRadius: "12px",
          backgroundColor: "#484545",
        }}
      />
    </Box>
    <Box
      mb={1}
      mt={3}
      ml={{ xs: 0, sm: 3 }}
      display="flex"
      justifyContent={{ xs: "space-around", sm: "left" }}
      flexWrap="wrap"
      gap={2}
    >
      {skills.map((item, i) => (
        <Card key={i} obj={item} />
      ))}
    </Box>
  </>
);
