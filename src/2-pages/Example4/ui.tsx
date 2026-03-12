import { Box, TextField, Typography } from '@mui/material';
import { useEffect, useState, type FC } from 'react';
import { useThrottle } from '6-shared/lib/useThrottle';

export const Example4: FC = () => {
    const [value, setValue] = useState('');

    const throttledValue = useThrottle(value, 1e3);

    useEffect(() => {
        console.log('Example4');
    }, [throttledValue]);

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
                Throttled value: {throttledValue}
            </Typography>
        </Box>
    );
};
