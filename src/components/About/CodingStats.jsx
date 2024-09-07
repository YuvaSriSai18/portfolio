import { Box } from "@mui/material";
import React from "react";

export default function CodingStats() {
  return (
    <Box sx={{ width: '100%', height: { xs: '400px', sm: '600px', md: '800px' }, overflow: 'hidden' }}>
      <Box sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        clipPath: 'inset(3 5 0 0)' // Adjust the inset values to show only the part you want
      }}>
        <iframe
          src="https://codolio.com/profile/yuvasrisai18"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Coding Stats"
          style={{ border: 'none' }}
        ></iframe>
      </Box>
    </Box>
  );
}
