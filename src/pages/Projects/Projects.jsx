import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { ProjectsData } from "../../Constants/ProjectsData";
import ProjectCard from "../../components/Projects/ProjectCard";

export default function Projects() {
  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" fontWeight={600} marginRight={2} ml={1}>
          Projects
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
        display={"flex"}
        // justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        columnGap={{ xs: 0, sm: 2 }}
        // rowGap={4}
        gap={3}
        ml={{ xs: 2.3, sm: 3 }}
        mt={3}
      >
        {ProjectsData.map((item, i) => (
          <ProjectCard obj={item} key={i} index={i} />
        ))}
      </Box>
    </>
  );
}
