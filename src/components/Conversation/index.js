import React from 'react';
import { faker } from "@faker-js/faker";
import { Stack, Box, Avatar, Badge } from '@mui/material';
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

const Conversation = () => {
    return (
        <Stack height="100%" width="auto" maxHeight="100vh">
            {/* Chat Header */}
            <Box
                sx={{
                    height: 100,
                    width: "100%",
                    backgroundColor: "#fff", // Deep Blue Color
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", // Subtle Box Shadow
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ width: '100%', height: '100%' }}
                >
                    {/* Elements inside the header */}
                    <Stack direction="row" spacing={2}>
                        <Box>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                variant="dot"
                            >
                                <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                            </StyledBadge>
                        </Box>
                        {/* Add more elements if needed */}
                    </Stack>
                </Stack>
            </Box>

            {/* Messages */}
            <Box width="100%" sx={{ flexGrow: 1 }}>
                {/* Messages component */}
            </Box>

            {/* Chat Footer */}
            <Box
                sx={{
                    height: 100,
                    width: '100%',
                    backgroundColor: "#fff", // Rusty Red Color
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", // Subtle Box Shadow
                }}
            >
                {/* Footer content */}
            </Box>
        </Stack>
    );
};

export default Conversation;
