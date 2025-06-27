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
          I’m a passionate full stack developer and tech enthusiast with a deep
          curiosity for how things work and a constant drive to learn and innovate.
          My journey in the digital world has been a blend of creativity, logic,
          and exploration—bridging human-centered design with cutting-edge technology.
        </Typography>
        <Typography
  component={"p"}
  ml={{ xs: 0, sm: 3 }}
  color={"#000"}
  fontSize={{ xs: "16px", sm: "19px" }}
  mt={1}
  mb={1}
>
  I have a solid foundation in{" "}
  <span style={{ fontWeight: 600 }}>Data Structures and Algorithms</span>{" "}
  (C++), which has sharpened my problem-solving abilities. Over time, I’ve
  transitioned into{" "}
  <span style={{ fontWeight: 600 }}>modern full stack development</span>,
  working with technologies like{" "}
  <span style={{ fontWeight: 600 }}>React, Next.js (with TypeScript)</span>,{" "}
  <span style={{ fontWeight: 600 }}>Node.js</span>, and{" "}
  <span style={{ fontWeight: 600 }}>Redis</span>. I’ve also explored{" "}
  <span style={{ fontWeight: 600 }}>Web Sockets</span> to build
  real-time, dynamic applications.
</Typography>

        <Typography
          component={"p"}
          ml={{ xs: 0, sm: 3 }}
          color={"#000"}
          fontSize={{ xs: "16px", sm: "19px" }}
          mt={0.5}
          mb={1}
        >
          I also enjoy working with low-code platforms like{" "}
          <span style={{ fontWeight: 600 }}>FlutterFlow</span> and{" "}
          <span style={{ fontWeight: 600 }}>Wix</span>, which allow me to quickly
          build and deploy intuitive applications without compromising on functionality.
        </Typography>
        <Typography
          component={"p"}
          ml={{ xs: 0, sm: 3 }}
          color={"#000"}
          fontSize={{ xs: "16px", sm: "19px" }}
          mt={0.5}
        >
          I strive to blend innovation with practicality, and I’m always eager
          to take on challenges that push me to grow. As I continue to explore
          the ever-evolving tech landscape, I look forward to building meaningful
          solutions that leave a positive impact.
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
      {/* <CodingStats /> */}
    </>
  );
}
