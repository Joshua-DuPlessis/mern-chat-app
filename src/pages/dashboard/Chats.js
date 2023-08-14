import React from 'react';
import { Avatar, Box, Stack, Typography, IconButton, InputBase, Divider, Button, Badge } from '@mui/material';
import { CircleDashed, MagnifyingGlass, ArchiveBox } from 'phosphor-react';
import { styled, alpha, useTheme} from '@mui/material/styles';
import {ChatList} from "../../data";
import { faker } from "@faker-js/faker";
import {SimpleBarStyle} from "../../components/Scrollbar";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
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
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    const theme =useTheme()
    return (
        <Box
            sx={{
                width: '100%',
                borderRadius: 1,
                backgroundColor: theme.palette.mode === "light" ?'#fff': theme.palette.background.default ,
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
            }}
        >
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: '100%' }}
            >
                <Stack direction="row" spacing={2}>
                    {online ?<StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        variant="dot"
                    >
                        <Avatar src={faker.image.avatar()} />
                    </StyledBadge> :                         <Avatar src={faker.image.avatar()} />
                    }

                    <Box>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="subtitle2" sx={{ color: "#000" }}>
                                {name}
                            </Typography>
                            <Typography sx={{ fontWeight: 600, color: "#000" }} variant="caption">
                                {time}
                            </Typography>
                        </Stack>
                        <Typography variant="caption" sx={{ color: "#000" }}>
                            {msg}
                        </Typography>
                    </Box>
                </Stack>
                <Badge color="primary" badgeContent={unread} sx={{ marginLeft: 'auto' }}>
                    <Typography variant="caption">{unread}</Typography>
                </Badge>
            </Stack>
        </Box>
    );
};

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));

const Chats = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: 'relative',
                width: 320,
                backgroundColor: theme.palette.mode === "light" ? '#F8FAFF': theme.palette.background.paper,
                boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
            }}
        >
            <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="h5">Chats</Typography>
                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                    <Stack sx={{ width: '100%' }}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color="#709CE6" />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Stack>
                </Stack>
                <Stack
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <ArchiveBox size={24} />
                    <Button>Archive</Button>
                </Stack>
                <Divider />
                <Stack direction="column" sx={{ flexGrow: 1, overflow: 'scroll', height: '100%' }}>
                    <SimpleBarStyle timeout={500} clickOnTrack={false}>
                        <Stack spacing={2.4}>
                            <Typography variant="subtitle2" sx={{ color: '#000' }}>
                                Pinned
                            </Typography>
                            {ChatList.filter((el) => el.pinned).map((el) => (
                                <ChatElement
                                    key={el.id}
                                    img={el.img}
                                    name={el.name}
                                    msg={el.msg}
                                    time={el.time}
                                    unread={el.unread}
                                    pinned={el.pinned}
                                    online={el.online}
                                />
                            ))}
                        </Stack>
                        <Stack spacing={2.4}>
                            <Typography variant="subtitle2" sx={{ color: '#000' }}>
                                All Chats
                            </Typography>
                            {ChatList.filter((el) => !el.pinned).map((el) => (
                                <ChatElement
                                    key={el.id}
                                    img={el.img}
                                    name={el.name}
                                    msg={el.msg}
                                    time={el.time}
                                    unread={el.unread}
                                    pinned={el.pinned}
                                    online={el.online}
                                />
                            ))}
                        </Stack>
                    </SimpleBarStyle>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Chats;