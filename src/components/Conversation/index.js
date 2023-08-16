import React from 'react';
import { CaretDown, VideoCamera, Phone } from 'phosphor-react'; // Added imports
import { useTheme } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { faker } from '@faker-js/faker';
import { Stack, Box, Avatar, Badge, Typography, IconButton, TextField, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MagnifyingGlass } from 'phosphor-react';

const StyledInput = styled(TextField)(({ theme }) => ({
    // Custom input styles...
    "& .MuiInputBase-input" : {
        paddingTop: "12px",
        paddingBottom: "12px",


    }
}));

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
            <CaretDown />
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
                    width: '100%',
                    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#333',
                    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
                    padding: '10px',
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ width: '100%', height: '100%' }}
                >
                    {/* Header elements */}
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
            <Box width="100%" sx={{ flexGrow: 1, overflowY: 'scroll', padding: '10px' }}>
                {/* Sample Messages */}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    marginBottom="10px"
                >
                    <Avatar alt="User" src={faker.image.avatar()} sx={{ width: 32, height: 32, marginRight: '8px' }} />
                    <Box
                        backgroundColor={theme.palette.primary.main}
                        color={theme.palette.primary.contrastText}
                        borderRadius="8px"
                        padding="8px 12px"
                    >
                        This is a message from the user.
                    </Box>
                </Box>
                {/* Add more messages */}
            </Box>

            {/* Text Input */}

            <Box
                p={2}
                sx={{
                    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#333',
                    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
                    padding: '10px',
                }}
            >
                <StyledInput
                    fullWidth
                    variant="filled"
                    placeholder="Type a message..."
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton>
                                    <AttachFileIcon /> {/* Attach File Icon */}
                                </IconButton>
                                <IconButton>
                                    <EmojiEmotionsIcon /> {/* Emoji Icon */}
                                </IconButton>
                                <IconButton>
                                    <SendIcon /> {/* Send Message Icon */}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {/* Chat Footer */}
            <Box
                sx={{
                    height: 100,
                    width: '100%',
                    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#333',
                    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
                    padding: '10px',
                }}
            >
                {/* Footer content */}
            </Box>
        </Stack>
    );
};

export default Conversation;

