import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Link} from '@mui/material';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="inherit">HEXs List</Link>
            {/* <Link href="/WEX" color="inherit">WEXs List</Link> */}
        
          </Typography>
          <Button color="inherit"><Link href="/HEX/new" sx={{color: 'white'}} >New File</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
