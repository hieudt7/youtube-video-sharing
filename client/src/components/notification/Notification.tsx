'use client';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

import dayjs from 'dayjs';

import { useCommonDataContext } from '@/contexts';
import { DISPLAY_DATE_TIME_FORMAT } from '@/constants/time';

export default function Notification() {
    const { videoNotification } = useCommonDataContext();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton sx={{ color: '#fff' }} onClick={handleOpenMenu}>
                <Badge badgeContent={videoNotification.length > 0 ? videoNotification.length : null} color="secondary">
                    <CircleNotificationsIcon />
                </Badge>
            </IconButton>
            {videoNotification.length > 0 && (
                <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                    {videoNotification.map((data) => (
                        <MenuItem key={`${data.id}`} onClick={handleClose}>
                            <div className="flex flex-row p-4 gap-3">
                                <div className="avatar">
                                    <Avatar alt={data?.author?.username} src={data?.author?.avatar} />
                                </div>
                                <div>
                                    <div className="title">{data?.title}</div>
                                    <div className="title">
                                        <span>{data?.author?.username}</span>
                                        {' - '}
                                        <span>{dayjs(data?.createTime).format(DISPLAY_DATE_TIME_FORMAT)}</span>
                                    </div>
                                </div>
                            </div>
                        </MenuItem>
                    ))}
                </Menu>
            )}
        </div>
    );
}
