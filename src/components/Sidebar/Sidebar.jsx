import React from "react";
import { Box } from "@mui/material";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { SocialHandles } from "../../Constants/SocialMedia";
export default function Sidebar() {
  return (
    <Box
      width={{ xs: "100%", sm: "18%" }}
      border={"2px solid #000"}
      padding={3}
      borderRadius={"30px"}
      height={{ xs: "fit-content", sm: "80vh" }}
    >
      <Box
        width={{ xs: "90%", sm: "100%" }}
        margin={{ xs: "auto" }}
        borderRadius={8}
        border={"2px solid #000"}
        p={{ xs: 1, sm: 2 }}
      >
        <Box
          component={"img"}
          src={avatar}
          mr={1}
          ml={{ xs: 3, sm: 0 }}
          width={200}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        mt={2}
      >
        {SocialHandles.map((item, i) => (
          <Link key={i} to={item.link} style={{ color: "#c90a27" }}>
            <Box
              border={"2px solid #000"}
              p={1}
              borderRadius={3}
              component={"img"}
              width="45px"
              src={item.img}
            />
          </Link>
        ))}
      </Box>
      <Link
        to={
          "https://drive.google.com/file/d/1fmNzRPcobwRE4Bbd-VIVeBm2IEGwOWQ6/view?usp=drive_link"
        }
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <Box
          border="2px solid #000"
          p={1}
          mt={5}
          width={"100%"}
          borderRadius={8}
          textAlign={"center"}
        >
          View Resume
        </Box>
      </Link>
    </Box>
  );
}
