import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { alignProperty } from "@mui/material/styles/cssUtils";
import { dark } from '@mui/material/styles/createPalette';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link , Route, BrowserRouter as Router } from 'react-router-dom';
import  Login from '../Login-Screen/Login.js';







const Search = styled('div')(({ theme }) => ({

    main: '#0000',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.14),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.4),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({

    placeItems: 'center',
    color: 'Light',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '500px',


        },
    },
}));


export default function PrimarySearchAppBar() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorC, setAnchorC] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [mobileMoreAnchorC, setMobileMoreAnchorC] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isCategoryOpen = Boolean(anchorC);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isMobileMenuOpenC = Boolean(mobileMoreAnchorC);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCategory = (event) => {
        setAnchorC(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const CategoryClose = () => {
        setMobileMoreAnchorC(null);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const CategoryHandleCLose = () => {
        setMobileMoreAnchorC(null);
        CategoryClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleCategoryOpen = (event) => {
        setMobileMoreAnchorC(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',

            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Router>
            <MenuItem  onClick={handleMenuClose}><Link to='../Screnn-Log/Login.js'>Perfil</Link></MenuItem>
            <MenuItem onClick={handleMenuClose}>Opções</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sair da conta</MenuItem>
            </Router>
            <Router exact path='../Screnn-Log/Login.js'/>
        </Menu>


    );



    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 2 new mails" color="light">
                    <Badge badgeContent={2} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="Mostre 2 novas notificacoes"
                    color="dark"
                >
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notificacoes</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="dark"
                >
                    <AccountCircle />
                </IconButton>
                <p>Perfil</p>
            </MenuItem>


        </Menu>
    );



    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static" sx={{ backgroundColor: '#da70d6' }}>

                <Toolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="#FFFFFF"
                        aria-label="Home"
                        sx={{ mr: 2, cursor: 'pointer' }}
                    >

                        <HomeIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >

                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ cursor: 'pointer' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            style={{ paddingLeft: '410px' }}
                            placeholder="Buscar.."
                            inputProps={{ 'aria-label': 'Procurar' }}

                        />
                    </Search>


                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="dark">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 13 new notifications"
                            color="dark"
                        >
                            <Badge badgeContent={2} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="dark"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="FFFFFF   "
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>


                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}

        </Box>
    );

}


