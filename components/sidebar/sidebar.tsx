import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { navItem } from '@/config/constants';
import Image from 'next/image';
import { format } from 'date-fns'


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

const Sidebar:React.FC = () => {
  return (
    <Box width={{xs: "100%" , md: "30%"}}>
      <Box position={"sticky"} top={"80px"} sx={{transition: "all .3s ease "}} >
           <Box padding={'20px'} border={"1px solid gray"} borderRadius={"8px"} >
            <Typography variant='h5'>Latest Blog</Typography>
            <Box sx={{display:"flex" , flexDirection:"column", marginTop:'20px'}}>
              {
                data.map((item, index) => (
                  <Fragment key={index}>
                      <Box mt={'20px'} >
                        <Box sx={{display:"flex" , gap:"20px", alignItems:'center'}}>
                          <Image alt={item.title} src={item.image} width={100} height={100} style={{objectFit:"cover", borderRadius:"8px"}}/>
                          <Box sx={{display:"flex" , flexDirection:"column", gap:"5px"}}>
                            <Typography variant='body1'> {item.title}</Typography>
                            <Box sx={{display: "flex" , gap:'10px', alignItems: 'center'}}>
                              <Avatar alt={ item.author.name } src={ item.author.image } />
                              <Box>
                                  <Typography variant='body2'>{ item.author.name }</Typography>
                                  <Box sx={{opacity:'0.6', fontSize:'12px'} }> { format(new Date, 'dd MMM, yyyy') } &#x2022; 10min read </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Divider sx={{marginTop:'20px'}}/>
                      </Box>
                  </Fragment>
                ))
              }
            </Box>
          </Box>
          <Box padding={'20px'} border={"1px solid gray"} borderRadius={"8px"} mt={"20px"}>
            <Typography variant='h5'>Category</Typography>
            <Box sx={{display:"flex" , flexDirection:"column", marginTop:'20px'}}>
                {
                  navItem.map((nav) => (
                    <Fragment key={nav.id}>
                      <Button fullWidth sx={{justifyContent:"flex-start", height:'50px'}} >{ nav.label }</Button>
                      <Divider/>
                    </Fragment>
                  ))
                }
            </Box>
          </Box>
      </Box>
    </Box>
  )
}

export default Sidebar