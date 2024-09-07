import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import InterestsAbout from "../../components/About/InterestsAbout";
import CodingStats from "../../components/About/CodingStats";

export default function About() {
  return (
    <>
      <Box>
        <Box display="flex" alignItems="center">
          <Typography variant="h5" fontWeight={600} marginRight={2} ml={1}>
            About Me
          </Typography>
          <Divider
            sx={{
              width: { xs: "130px", sm: "400px" },
              height: "3px",
              borderRadius: "12px",
              backgroundColor: "#484545",
            }}
          />
        </Box>
        <Typography
          component={"p"}
          ml={5}
          color={"#000"}
          fontSize={{ xs: "16px", sm: "21px" }}
          mt={0.5}
        >
          Hey there, I'm{" "}
          <span style={{ fontWeight: 600 }}>Yuva Sri Sai 👋</span>!
        </Typography>
        <Typography
          component={"p"}
          ml={{ xs: 0, sm: 3 }}
          color={"#000"}
          fontSize={{ xs: "16px", sm: "19px" }}
          mt={0.5}
        >
          A passionate tech enthusiast, I am driven by an insatiable curiosity
          and a love for continuous learning. My journey in the digital realm
          has been a thrilling exploration of the intricate dance between human
          creativity and technological innovation.
        </Typography>
        <Typography
          component={"p"}
          ml={{ xs: 0, sm: 3 }}
          color={"#000"}
          fontSize={{ xs: "16px", sm: "19px" }}
          mt={1}
          mb={1}
        >
          Throughout my academic journey, I've developed an intermediate
          foundation in{" "}
          <span style={{ fontWeight: 600 }}>
            Data Structures and Algorithms
          </span>
          , particularly in C++, which has sharpened my problem-solving skills.
          More recently, I've expanded my expertise into the{" "}
          <span style={{ fontWeight: 600 }}>MERN Stack</span>, delving deep into
          the world of full-stack development. My exploration into the workings
          of <span style={{ fontWeight: 600 }}>Web Sockets</span> has further
          broadened my understanding of real-time communication and dynamic web
          applications.
        </Typography>
        <Typography
          component={"p"}
          ml={{ xs: 0, sm: 3 }}
          color={"#000"}
          fontSize={{ xs: "16px", sm: "19px" }}
          mt={0.5}
          mb={1}
        >
          In addition to coding, I am well-versed in low-code tools like{" "}
          <span style={{ fontWeight: 600 }}>FlutterFlow</span> and{" "}
          <span style={{ fontWeight: 600 }}>Wix</span>, which I've used to build
          several applications, enabling rapid development and deployment
          without sacrificing functionality.
        </Typography>
        <Typography
          component={"p"}
          ml={{ xs: 0, sm: 3 }}
          color={"#000"}
          fontSize={{ xs: "16px", sm: "19px" }}
          mt={0.5}
        >
          In this ever-evolving field, I strive to blend creativity with logic,
          innovation with tradition, and technology with the human spirit. As I
          continue to grow and learn, I am excited about the endless
          possibilities that the future holds.
        </Typography>
      </Box>
      <Box mt={3}>
        <Box display="flex" alignItems="center">
          <Typography variant="h5" fontWeight={600} marginRight={2} ml={1}>
            Education
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
          border={"2px solid #000"}
          width={{ xs: "100%", sm: "fit-content" }}
          mt={2}
          borderRadius={5}
          p={2}
          ml={{ xs: 0, sm: 3 }}
        >
          <Box
            p={2}
            width={{ xs: 250, sm: 300 }}
            borderRadius={3}
            component={"img"}
            src="https://indiaeducationdiary.in/wp-content/uploads/2020/12/srm.png"
            alt="SRM University"
          />
          <Divider />
          <Typography component={"p"} fontWeight={600} mt={1}>
            Computer Science and Engineering
          </Typography>
          <Typography component={"p"} fontWeight={500} mt={0.1}>
            2022 - 2026
          </Typography>
        </Box>
      </Box>
      <InterestsAbout />
      {/* <CodingStats/> */}
    </>
  );
}
