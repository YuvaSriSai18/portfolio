import React from "react";
import { Box, Typography, Divider, IconButton, Tooltip } from "@mui/material";
import { Skill } from "../../Constants/Skills";
import Card from "../../components/Skills/Card";
export default function Skills() {
  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" fontWeight={600} marginRight={2} ml={1}>
          Languages
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
        {Skill.Languages.map((item, i) => (
          <Card key={i} obj={item} />
        ))}
      </Box>

      <Box display="flex" alignItems="center">
        <Typography variant="h5" fontWeight={600} marginRight={2} ml={1}>
          FrameWorks
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
        {Skill.FrameWorks.map((item, i) => (
          <Card key={i} obj={item} />
        ))}
      </Box>

      <Box display="flex" alignItems="center">
        <Typography variant="h5" fontWeight={600} marginRight={2} ml={1}>
          Databases
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
        {Skill.Databases.map((item, i) => (
          <Card key={i} obj={item} />
        ))}
      </Box>

      <Box display="flex" alignItems="center">
        <Typography variant="h5" fontWeight={600} marginRight={2} ml={1}>
          Low Code
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
        {Skill.LowCodeTools.map((item, i) => (
          <Card key={i} obj={item} />
        ))}
      </Box>

      <Box display="flex" alignItems="center">
        <Typography variant="h5" fontWeight={600} marginRight={2} ml={1}>
          Tools
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
        {Skill.Tools.map((item, i) => (
          <Card key={i} obj={item} />
        ))}
      </Box>
    </>
  );
}
