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
                    <Link href="/example1" sx={{ mx: 1 }}>
                        Пример 1
                    </Link>
                    <Link href="/example2" sx={{ mx: 1 }}>
                        Пример 2
                    </Link>
                    <Link href="/example3" sx={{ mx: 1 }}>
                        Пример 3
                    </Link>
                    <Link href="/example4" sx={{ mx: 1 }}>
                        Пример 4
                    </Link>
                    <Link href="/example5" sx={{ mx: 1 }}>
                        Пример 5
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
