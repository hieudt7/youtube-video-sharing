'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { toast } from 'react-toastify';

const leftMenu = [
    {
        label: 'Home',
        icon: <MailIcon />,
    },
    {
        label: 'Trending',
        icon: <InboxIcon />,
    },
    {
        label: 'Music',
        icon: <MailIcon />,
    },
    {
        label: 'LIVE',
        icon: <InboxIcon />,
    },
];

export default function LeftSideBar() {
    return (
        <div className="w-[350px] min-h-screen bg-white">
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
                <div className="px-4 py-4">
                    <p className="text-[15px] text-[#999] mb-4">Log in to view your "Followed" content.</p>
                    <Button variant="outlined" className="w-full">
                        Log in
                    </Button>
                </div>
            </Box>
        </div>
    );
}
