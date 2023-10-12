'use client';

import React from 'react';
import Image from 'next/image';

import { toast } from 'react-toastify';

import { styled, alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import LoginDialog from '@/components/authentication/LoginDialog';
import RegisterDialog from '@/components/authentication/RegisterDialog';
import ShareYoutubeVideoDialog from '@/components/shareYoutubeVideo/ShareYoutubeVideoDialog';
import Notification from '@/components/notification/Notification';
import logo from '@/public/images/logo-white.png';
import { headerStyles } from './variants';

import { useAuthContext } from '@/contexts';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
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
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  const { headerMenuMobile, headerMenuPc, headerWrapper, searchWrapper } =
    headerStyles();
  const { isAuthenticated, user, signOut } = useAuthContext();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <header className={headerWrapper()} data-testid="wrapp-header">
        <div className={headerMenuMobile()}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: '#fff' }}
          >
            <MenuIcon />
          </IconButton>
          <Image src={logo} alt="logo" className="w-[130px]" />
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: '#fff' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
        <div className={headerMenuPc()}>
          <Image src={logo} alt="logo" className="w-[130px]" />
        </div>
        <div className={searchWrapper()}>
          <FormControl
            fullWidth
            size="small"
            variant="outlined"
            className="group-search"
            sx={{ borderRadius: '30px', color: '#fff' }}
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              className="white-label"
            >
              Search
            </InputLabel>
            <OutlinedInput
              size="small"
              id="outlined-adornment-password"
              type={'text'}
              className="white-input"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      toast.info('Feature is coming soon');
                    }}
                    data-testid="header-search-icon"
                  >
                    <SearchIcon sx={{ color: '#fff' }} />
                  </IconButton>
                </InputAdornment>
              }
              label="Search"
              sx={{
                borderRadius: '30px',
                color: '#fff',
                borderColor: 'error.main',
              }}
            />
          </FormControl>
        </div>
        <div>
          <Stack spacing={2} direction="row" className="items-center">
            <div>
              <ShareYoutubeVideoDialog />
            </div>
            {isAuthenticated ? (
              <>
                <Notification />
                <Tooltip title="Account info">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleOpenUserMenu}
                    data-testid="authorized-menu"
                  >
                    <Avatar
                      alt="Admin"
                      src={user?.avatar ?? '/static/images/avatar/2.jpg'}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Avatar /> Hi, {user?.username}
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      signOut();
                    }}
                    data-testid="header-logout-button"
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleOpenUserMenu}
                    data-testid="unauthorized-menu"
                  >
                    <AccountCircleIcon sx={{ color: '#fff' }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  id="register-emnu"
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  keepMounted
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <LoginDialog closeMenuItem={handleCloseUserMenu} />
                  <RegisterDialog closeMenuItem={handleCloseUserMenu} />
                </Menu>
              </>
            )}
          </Stack>
        </div>
      </header>
    </>
  );
}
