'use client'
import { Avatar, Box, Typography } from '@mui/material'
import Image from 'next/image';
import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { format } from 'date-fns'
import "swiper/css";
import { BlogService } from '@/services/blog.service';

const data = [
	{
		image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
		title: 'Technical SEO with Hygraph',
		exerpt: 'Get started with your SEO implementation when using a Headless CMS',
		author: {
			name: 'Rahmonjon Qosimov',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
	{
		image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
		title: 'Union Types and Sortable Relations with Hygraph',
		exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
		author: {
			name: 'Rahmonjon Qosimov',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
];

const Hero:React.FC = () => {

  useEffect(() => {
    BlogService.getAllBlogs().then((res) => console.log(res))
  } , [])

  return (
    <Box width={'100%'} height={'70vh'}>

      <Swiper className="mySwiper">
        {
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <Box sx={{position: 'relative', width: '100%', height: '70vh'}}>
                <Image
                  src={item.image}
                  alt={item.author.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  />
                  <Box sx={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, width:'100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)'}}/>
                  <Box sx={{position: 'relative', top:'50%', transform: 'translateY(-50%)', paddingX: '20px', width:{ xs: '100%', md: '70%' }}} color={'white'}>
                    <Typography sx={{fontSize:{xs: '30px' , md: '50px'}}}>{ item.title }</Typography>
                    <Typography color={'gray'} sx={{fontSize:{xs: '20px' , md: '25px'}}}>{ item.exerpt }</Typography>
                    <Box sx={{display: "flex" , gap:'10px', marginTop: '20px', alignItems: 'center'}}>
                       <Avatar alt={ item.author.name } src={ item.author.image } />
                       <Box>
                          <Typography>{ item.author.name }</Typography>
                          <Box> { format(new Date, 'dd MMM, yyyy') } &#x2022; 10min read </Box>
                       </Box>
                    </Box>
                  </Box>
              </Box>
            </SwiperSlide>
          ))
        }
      </Swiper>
      
    </Box>
  )
}

export default Hero;