'use client';

import React from 'react';
import Box from '@mui/material/Box';

export default function RightSideBar() {
    return (
        <div className="w-[350px]">
            <Box role="presentation" sx={{ width: '100%',padding:'10px' }}>
                <iframe
                    src="https://www.youtube.com/embed/bGpFGBLRmws?autoplay=1&mute=1"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                />
            </Box>
        </div>
    );
}
