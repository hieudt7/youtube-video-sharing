'use client';
import React from 'react';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import logo from '@/public/images/logo-white.png';
import { headerStyles } from './variants';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


import LoginDialog from '@/components/authentication/LoginDialog';
import RegisterDialog from '@/components/authentication/RegisterDialog';

import { useAuthContext } from '@/contexts';

export default function Header() {
    const { headerWrapper, searchWrapper } = headerStyles();
    const { isAuthenticated,user } = useAuthContext();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <header className={headerWrapper()}>
                <div className="">
                    <Image src={logo} alt="logo" className="w-[130px]" />
                </div>
                <div className={searchWrapper()}>
                    <FormControl
                        fullWidth
                        size="small"
                        variant="outlined"
                        className="group-search"
                        sx={{ borderRadius: '30px', color: '#fff'}}
                    >
                        <InputLabel htmlFor="outlined-adornment-password" className="white-label">
                            Search
                        </InputLabel>
                        <OutlinedInput
                            size="small"
                            id="outlined-adornment-password"
                            type={'text'}
                            className='white-input'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" edge="end">
                                        <SearchIcon sx={{ color: '#fff' }} />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Search"
                            sx={{ borderRadius: '30px', color: '#fff', borderColor: 'error.main' }}
                        />
                    </FormControl>
                </div>
                <div>
                    <Stack spacing={2} direction="row">
                        <IconButton aria-label="toggle password visibility" edge="end">
                            <VideoCameraFrontOutlinedIcon sx={{ color: '#fff' }} />
                        </IconButton>
                        {isAuthenticated ? (
                            <>
                                <Tooltip title="Account info">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                        onClick={handleOpenUserMenu}
                                    >
                                        <Avatar alt="Admin" src={user?.avatar ?? '/static/images/avatar/2.jpg'} />
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
                                    <MenuItem>
                                        <Typography textAlign="center">Hi, {user?.nickname}</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Profile</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Logut</Typography>
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
                                    >
                                        <AccountCircleIcon sx={{ color: '#fff' }} />
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
                                    <LoginDialog />
                                    <RegisterDialog />
                                </Menu>
                            </>
                        )}
                    </Stack>
                </div>
            </header>
        </>
    );
}
