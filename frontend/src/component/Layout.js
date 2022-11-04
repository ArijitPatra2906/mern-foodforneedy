import React, { useState } from 'react'
import { AppBar, Box, Menu, IconButton, MenuItem, Toolbar, Typography, Tooltip, Avatar, ListItemText, Divider, List, ListItem, ListItemButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import "../Styles/Layout.css"

const drawerWidth = 240;

const settings = ['Profile', 'Logout'];

function Layout({ children }, props) {
    const { window } = props;

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <Typography mt={2} display="flex" textAlign="center" alignItems="center" justifyContent="center" variant="h6" pb={1}>
                FFD
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton className='mobile-nav' sx={{ textAlign: 'center', display: "flex", flexDirection: "column", gap: "20px", fontSize: 20 }}>
                        <Link to="/">
                            <ListItemText primary="Home" />
                        </Link>
                        <Link to="/ngolist">
                            <ListItemText className='nav-item' primary="Ngo List" />
                        </Link>
                        <Link to="/post">
                            <ListItemText primary="Post" />
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <header>
                <Box sx={{ display: 'flex' }}>
                    <AppBar component="nav" sx={{ backgroundColor: "white", color: "grey" }} >
                        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Link className='link' to="/">
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ display: { xs: 'block', sm: 'block' } }}
                                    color="grey"
                                >
                                    Food for needy
                                </Typography>
                            </Link>

                            <Box className="nav" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/ngolist">Ngo List</a>
                                    </li>
                                    <li>
                                        <a href="/post">Post</a>
                                    </li>
                                </ul>
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Arijit" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Box component="nav">
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box component="main">
                        <Toolbar />

                    </Box>
                </Box>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h2>2022 All rights reserved © Arijit Patra</h2>
            </footer>
        </div>
    )
}

export default Layout