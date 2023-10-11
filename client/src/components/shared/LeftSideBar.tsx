'use client';

import React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import { toast } from 'react-toastify';

import LoginDialog from '@/components/authentication/LoginDialog';

import { useAuthContext } from '@/contexts';

const leftMenu = [
    {
        label: 'Home',
        icon: <CameraIndoorIcon />,
    },
    {
        label: 'Trending',
        icon: <WhatshotIcon />,
    },
    {
        label: 'Music',
        icon: <QueueMusicIcon />,
    },
    {
        label: 'LIVE',
        icon: <LiveTvIcon />,
    },
];

export default function LeftSideBar() {
    const { isAuthenticated } = useAuthContext();

    return (
        <div className="w-[350px] min-h-screen bg-white sticky top-0 desktop-view">
            <Box role="presentation" sx={{ width: '100%' }}>
                <List>
                    {leftMenu.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    toast.info('Feature is coming soon');
                                }}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                {!isAuthenticated && (
                    <div className="px-4 py-4">
                        <p className="text-[15px] text-[#999] mb-4">Log in to view your "Followed" content.</p>
                        <LoginDialog isPrimaryButton={true} />
                    </div>
                )}
            </Box>
        </div>
    );
}
