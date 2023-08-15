import React from 'react';
import { useTheme } from '@mui/material';
import { faker } from '@faker-js/faker';
import { Stack, Box, Avatar, Badge, Typography, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { VideoCamera, Phone, MagnifyingGlass } from 'phosphor-react'; // Replace with actual icon imports

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const ActionButtons = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton>
                <VideoCamera />
            </IconButton>
            <IconButton>
                <Phone />
            </IconButton>
            <IconButton>
                <MagnifyingGlass />
            </IconButton>
            <Divider orientation="vertical" flexItem />
        </Stack>
    );
};

const Conversation = () => {
    const theme = useTheme();

    return (
        <Stack height="100vh" width="auto">
            {/* Chat Header */}
            <Box
                sx={{
                    height: 100,
                    width: '100%',
                    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#333', // Light and Dark mode colors
                    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', // Subtle Box Shadow
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ width: '100%', height: '100%' }}
                >
                    {/* Elements inside the header */}
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            variant="dot"
                        >
                            <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                        </StyledBadge>
                        <Stack>
                            <Typography variant="subtitle2">
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant="caption">
                                Online
                            </Typography>
                        </Stack>
                        {/* Add more elements if needed */}
                        <ActionButtons /> {/* Adding ActionButtons component */}
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
                    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#333', // Light and Dark mode colors
                    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', // Subtle Box Shadow
                }}
            >
                {/* Footer content */}
            </Box>
        </Stack>
    );
};

export default Conversation;
