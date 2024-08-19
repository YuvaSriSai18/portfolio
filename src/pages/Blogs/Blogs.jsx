import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import BlogCard from "../../components/Blogs/BlogCard";
import { BlogsData } from "../../Constants/BlogsData";
export default function Blogs() {
  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" fontWeight={600} marginRight={2} ml={1}>
          Blogs
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
      <Box rowGap={2} display={"flex"} flexDirection={"column"} mt={2}>
        {BlogsData.map((item, i) => (
          <BlogCard obj={item} key={i} index={i} />
        ))}
      </Box>
    </>
  );
}
