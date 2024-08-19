import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Link } from "react-router-dom";
import "../../pages/Blogs/Blogs_Info/Blogs.css";
export default function BlogCard({ obj, index }) {
  return (
    <Link to={obj.link} style={{ textDecoration: "none" }}>
      <Box
        width={"100%"}
        // height={{xs:130}}
        borderRadius={5}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        border={"2px solid #000"}
        p={{ xs: 1, sm: 2 }}
        sx={{
          animation: `fadeSlideUp 1s ease-out`,
          animationDelay: `${index * 0.1}s`, // Use the index to stagger the animation
          animationFillMode: "both",
        }}
      >
        <Box display={"flex"} columnGap={{ xs: 1, sm: 5 }}>
          <Box
            borderRadius={4}
            component={"img"}
            width={{ xs: "60px", sm: 80 }}
            p={1}
            border={"1px solid #000"}
            src={obj.img}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
          >
            <Typography
              variant="p"
              fontWeight={600}
              fontSize={{ xs: "10px", sm: "16px" }}
              sx={{
                height: { xs: "30px", sm: "30px" },
                overflow: "scroll",
                textOverflow: "ellipsis",
              }}
            >
              {obj.name}
            </Typography>
            <Typography
              variant="p"
              fontWeight={400}
              sx={{
                height: { xs: "30px", sm: "50px" },
                overflow: "scroll",
                textOverflow: "ellipsis",
              }}
              fontSize={{ xs: "10px", sm: "16px" }}
            >
              {obj.desc}
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <ArrowForwardIosRoundedIcon fontSize="16px" />
        </Box>
      </Box>
    </Link>
  );
}
