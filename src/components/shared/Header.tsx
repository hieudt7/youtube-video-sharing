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

export default function Header() {
    const { headerWrapper, searchWrapper } = headerStyles();
    return (
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
                    sx={{ borderRadius: '30px', color: '#fff', borderColor: 'error.main' }}
                >
                    <InputLabel htmlFor="outlined-adornment-password" className="white-label">
                        Search
                    </InputLabel>
                    <OutlinedInput
                        size="small"
                        id="outlined-adornment-password"
                        type={'text'}
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
                    <IconButton aria-label="toggle password visibility" edge="end">
                        <AccountCircleIcon sx={{ color: '#fff' }} />
                    </IconButton>
                </Stack>
            </div>
        </header>
    );
}
