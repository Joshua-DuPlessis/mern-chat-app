import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';

const DashboardLayout = () => {
    return (
        <Stack direction="row">
            <SideBar />
            <Outlet />
        </Stack>
    );
};

export default DashboardLayout;
