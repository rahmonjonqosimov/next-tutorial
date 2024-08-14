import { Content, Hero, Sidebar } from '@/components';
import { Box } from '@mui/material';
import * as React from 'react';



export default  function  Home() {
    
  return (
   <Box sx={{minHeight: '90vh'}}>
        <Hero/>
        <Box sx={{display: 'flex', gap: '20px', padding: '20px', flexDirection:{xs: "column" , md: "row"}}}>
          <Sidebar/>
          <Content/>
        </Box>
   </Box>
  );
}
