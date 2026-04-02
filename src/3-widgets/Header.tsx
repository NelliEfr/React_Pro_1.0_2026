import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import type { FC } from 'react';

export const Header: FC = () => {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar>
                <Link href={'/'} variant="button">
                    <Typography variant="h6" component="h6">
                        Home
                    </Typography>
                </Link>

                <Box component="nav" sx={{ ml: 'auto' }}>
                    <Link href="/activity" sx={{ mx: 1 }}>
                        Activity
                    </Link>
                    <Link href="/useEffectEvent" sx={{ mx: 1 }}>
                        useEffectEvent
                    </Link>

                    <Link href="/useTransition" sx={{ mx: 1 }}>
                        useTransition
                    </Link>

                    <Link href="/useOptimistic" sx={{ mx: 1 }}>
                        useOptimistic
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
