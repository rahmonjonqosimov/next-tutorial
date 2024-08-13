import { Hero } from '@/components';
import { Box } from '@mui/material';
import * as React from 'react';

export default function Home() {
  return (
   <Box sx={{minHeight: '90vh'}}>
        <Hero/>
   </Box>
  );
}