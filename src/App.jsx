import React from "react";
import Navbar from "./components/AppBar/Navbar";
import AllRoutes from "./AllRoutes";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";

function AppContent() {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:600px)");

  const noSidebarRoutes = ["/skills", "/projects", "/blogs"];

  const showSidebar = !noSidebarRoutes.some((route) =>
    location.pathname.includes(route)
  );

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
    >
      <Navbar />
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "space-between", sm: "space-around" }}
        p={2}
      >
        {isMobile ? (
          <>{showSidebar && <Sidebar />}</>
        ) : (
          <>
            <Sidebar />
          </>
        )}
        <Box
          width={{ xs: "100%", sm: "75%" }}
          border={"2px solid #000"}
          padding={3}
          borderRadius={"30px"}
          height={"80vh"}
          overflow={'hidden'}
          sx={{
            overflowY:'scroll'
          }}
          mt={{ xs: 2, md: 0 }}
        >
          <AllRoutes />
        </Box>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
