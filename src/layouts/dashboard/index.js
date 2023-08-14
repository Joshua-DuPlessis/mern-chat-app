// Assuming Nav_Buttons is an array of objects with 'icon' property containing ReactNode
// For example: { icon: <SomeIconComponent /> }

import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import { Nav_Buttons } from "../../data";
import Logo from "../../assets/Images/logo.ico";
import { IconButton } from "@mui/material";

const DashboardLayout = () => {
    const theme = useTheme();

    console.log(theme);

    return (
        <>
            Dashboard Layout
            <Outlet />
            <Box
                p={2}
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    height: "100vh",
                    width: 100,
                }}
            >
                <Stack
                    direction="column"
                    alignItems={"center"}
                    sx={{ width: "100%" }}
                >
                    <Box
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: 64,
                            width: 64,
                            borderRadius: 1.5,
                        }}
                    >
                        <img src={Logo} alt={"Chat app logo"} />
                    </Box>
                    <Stack spacing={3}>
                        {Nav_Buttons.map((el) => (
                            <IconButton key={el.index}>
                                {el.icon} {/* Assuming 'el.icon' is a ReactNode */}
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default DashboardLayout;
