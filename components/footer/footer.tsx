import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
        <Box padding={'20px'} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#141414", color:"white"}}>
            <Typography variant='subtitle1'>Copyright @2024. All Rights Reserved.</Typography>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
                >
                <Button sx={{backgroundColor: "#141414"}}>
                    <TelegramIcon/>
                </Button>
                <Button sx={{backgroundColor: "#141414"}}>
                    <InstagramIcon/>
                </Button>
                <Button sx={{backgroundColor: "#141414"}}>
                    <YouTubeIcon/>
                </Button>
            </ButtonGroup>
        </Box>
    </>
  )
}

export default Footer