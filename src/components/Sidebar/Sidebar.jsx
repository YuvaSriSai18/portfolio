import React from "react";
import { Box } from "@mui/material";
import avatar from "../../assets/avatar.png";
import avatar1 from '../../assets/avatar1.png'
import { Link } from "react-router-dom";
import { SocialHandles } from "../../Constants/SocialMedia";
export default function Sidebar() {
  return (
    <Box
      width={{ xs: "100%", sm: "18%" }}
      border={"2px solid #000"}
      padding={3}
      borderRadius={"30px"}
      height={{ xs: "fit-content" }}
    >
      <Box
        width={{ xs: "90%", sm: "100%" }}
        margin={{ xs: "auto" }}
        borderRadius={6}
        border={"2px solid #000"}
        // p={{ xs: 1, sm: 2 }}
        display="flex" // Ensure the Box container uses flexbox for alignment
        alignItems="center" // Vertically center the image within the Box
        justifyContent="center" // Horizontally center the image within the Box
      >
        <Box
          component={"img"}
          src={avatar1}
          sx={{
            maxWidth: "100%", // Image will not exceed the width of the parent Box
            maxHeight: "100%", // Image will not exceed the height of the parent Box
            objectFit: "contain", // Adjust the image to fit within the Box while maintaining aspect ratio
            borderRadius:6
          }}
          alt="Yuva Sai" // Add alt text for accessibility
        />
      </Box>

      <Box
        display="flex"
        flexWrap={"wrap"}
        justifyContent="space-around"
        mt={2}
        width={"100%"}
        height={"fit-content"}
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
              alt={item.name}
            />
          </Link>
        ))}
      </Box>
      <Link
        to={
          "https://drive.google.com/file/d/1uGYhe--UbG24r_4VYF3h-_SO83z_YIcX/view?usp=sharing"
        }
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <Box
          border="2px solid #000"
          p={1}
          mt={5}
          width={"100%"}
          borderRadius={5}
          textAlign={"center"}
        >
          View Resume
        </Box>
      </Link>
    </Box>
  );
}
