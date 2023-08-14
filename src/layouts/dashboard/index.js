import React, { useState } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import {
    Box,
    Stack,
    Divider,
    IconButton,
    Typography,
    Avatar,
    Switch,
} from '@mui/material';
import { Gear } from 'phosphor-react';
import { Outlet } from 'react-router-dom';
import { Nav_Buttons } from '../../data';
import Logo from '../../assets/Images/logo.ico';
import { faker } from '@faker-js/faker';
import useSettings from '../../hooks/useSettings';

// Styles for the AntSwitch
const AntSwitch = styled(Switch)(({ theme }) => ({
    // AntSwitch styles...
}));

const DashboardLayout = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings(); // Fetch onToggleMode function from useSettings

    const handleItemClick = (index) => {
        setSelected(index);
    };

    return (
        <Box display="flex">
            <Box width={100} p={2} boxShadow="0px 0px 2px rgba(0, 0, 0, 0.25)">
                <Stack direction="column" alignItems="center" spacing={3}>
                    <Stack alignItems="center" spacing={4}>
                        <Box
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                height: 64,
                                width: 64,
                                borderRadius: 1.5,
                            }}
                        >
                            <img src={Logo} alt="Chat app logo" />
                        </Box>
                        <Divider sx={{ width: '48px' }} />
                        <Stack
                            sx={{ width: 'max-content' }}
                            direction="column"
                            alignItems="center"
                            spacing={3}
                        >
                            {Nav_Buttons.map((el) => (
                                <Box
                                    key={el.index}
                                    sx={{
                                        backgroundColor:
                                            el.index === selected
                                                ? theme.palette.primary.main
                                                : 'transparent',
                                        borderRadius: 1.5,
                                    }}
                                >
                                    <IconButton
                                        onClick={() => handleItemClick(el.index)}
                                        sx={{
                                            width: 'max-content',
                                            color: el.index === selected ? '#000' : '#fff',
                                        }}
                                    >
                                        {el.icon}
                                    </IconButton>
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                    {selected === 3 ? (
                        <Box
                            p={1}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: 1.5,
                            }}
                        >
                            {/* Add content for selected tab */}
                        </Box>
                    ) : (
                        <IconButton onClick={() => handleItemClick(3)}>
                            <Gear />
                        </IconButton>
                    )}
                </Stack>
                <Stack sx={{ marginTop: 'auto', marginBottom: 3, alignItems: 'center' }}>
                    {/* Use onChange event to call onToggleMode when the switch is toggled */}
                    <AntSwitch onChange={onToggleMode} defaultChecked={theme.palette.mode === 'dark'} />
                    <Avatar src={faker.image.avatar()} />
                </Stack>
            </Box>
            <Box flexGrow={1} p={2}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Dashboard Layout
                </Typography>
                <Outlet />
            </Box>
        </Box>
    );
};

export default DashboardLayout;
