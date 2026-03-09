import AddIcon from '@mui/icons-material/Add';
import { Box, Checkbox, Container, Divider, FormControlLabel, IconButton, TextField, Typography } from '@mui/material';
import type { FC } from 'react';

export const Formik: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexFlow: 'column',
            }}
        >
            <Typography variant="h4" sx={{ mb: 4 }}>
                Formik form
            </Typography>
            <Container maxWidth="sm">
                <TextField sx={{ width: '100%' }} label="Имя" variant="outlined" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Отчество" />
                <TextField sx={{ width: '100%', mb: 2 }} label="Отчество" variant="outlined" />
                <TextField sx={{ width: '100%', mb: 4 }} label="Фамилия" variant="outlined" />
                <Divider variant="middle" sx={{ mb: 4 }} />
                <TextField sx={{ width: '100%', mb: 2 }} label="Навык" variant="outlined" />
                <IconButton color="primary">
                    <AddIcon />
                </IconButton>
            </Container>
        </Box>
    );
};
