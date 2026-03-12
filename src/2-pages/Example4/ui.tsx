import { Box, TextField, Typography } from '@mui/material';
import { useState, type FC } from 'react';

export const Example4: FC = () => {
    const [value, setValue] = useState('');

    return (
        <Box>
            <Typography variant="h3" align="center" sx={{ mb: 6 }}>
                useThrottle
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                    sx={{ mb: 4 }}
                    id="outlined-basic"
                    label="Текст"
                    variant="outlined"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Box>

            <Typography variant="body2" align="center" sx={{ mb: 2 }}>
                Value length: {value.length}
            </Typography>

            <Typography variant="body2" align="center" sx={{ mb: 6 }}>
                Throttled value:
            </Typography>
        </Box>
    );
};
