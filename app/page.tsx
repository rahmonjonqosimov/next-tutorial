import { Content, Hero, Sidebar } from '@/components';
import { BlogsType } from '@/interfaces/blog.interface';
import { BlogService } from '@/services/blog.service';
import { Box } from '@mui/material';
import * as React from 'react';



export default async function  Home() {
  const blogs = await BlogService.getAllBlogs();
    console.log(blogs);
    
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
