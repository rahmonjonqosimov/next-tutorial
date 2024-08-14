'use client'
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { navItem } from '@/config/constants';
import CloseIcon from '@mui/icons-material/Close';
import AdjustIcon from '@mui/icons-material/Adjust';

interface Props {
    window?: () => Window;
  }



const Navbar:React.FC = ( props: Props ) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' , alignItems: 'center', paddingX: "20px" }}>
            <Typography variant="h6" sx={{ my: 2, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AdjustIcon/>
                <Typography variant="h6"> RQ</Typography>
            </Typography>
            <CloseIcon/>
        </Box>
        <Divider />
        <List>
          {navItem.map((item) => (
            <Fragment key={item.id}>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            </Fragment>
          ))}
        </List>
      </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
  

  return (
    <>
        <AppBar sx={{backgroundColor: "#141414"}} component="nav">
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '10px' }}
          >
             <AdjustIcon/>
             RQ
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItem.map((item) => (
              <Fragment key={item.id}>
                  <Button sx={{ color: '#fff' }}>
                    {item.label}
                  </Button>
              </Fragment>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'flex', sm: 'none' },
            justifyContent: 'space-between',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  )
}

export default Navbar