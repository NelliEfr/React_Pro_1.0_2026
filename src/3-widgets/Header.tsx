import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import type { FC } from 'react';
// import { useAuthContext } from '6-shared/lib/authContext';

interface HeaderLink {
    href: `/${string}`;
    name: string;
}

const authorizedLinks: HeaderLink[] = [
    {
        href: '/profile',
        name: 'Профиль',
    },
    {
        href: '/signOut',
        name: 'SignOut',
    },
];

const unauthorizedLinks: HeaderLink[] = [
    {
        href: '/signUp',
        name: 'SignUp',
    },
    {
        href: '/signIn',
        name: 'SignIn',
    },
];

export const Header: FC = () => {
    const accessToken = 'alskdjfalskdjf';

    const links = accessToken ? authorizedLinks : unauthorizedLinks;

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
                    {links.map((link) => (
                        <Link key={link.name} href={link.href} sx={{ mx: 1 }}>
                            {link.name}
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
