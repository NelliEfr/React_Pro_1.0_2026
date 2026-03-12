import { Box, TextField, Typography } from '@mui/material';
import { useState, type FC } from 'react';
import { usePrevValue } from '6-shared/lib/usePrevValue';

export const Example2: FC = () => {
    const [value, setValue] = useState('');

    const prevValue = usePrevValue(value);

    const [value2, setValue2] = useState('');

    return (
        <Box>
            <Typography variant="h3" align="center" sx={{ mb: 6 }}>
                Предыдущее состояние
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <TextField
                    onChange={(e) => setValue(e.target.value)}
                    id="outlined-basic"
                    value={value}
                    label="Текст 1"
                    variant="outlined"
                />
            </Box>
            <Typography variant="body2" align="center" sx={{ mb: 6 }}>
                Предыдущее состояние: {prevValue}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <TextField
                    onChange={(e) => setValue2(e.target.value)}
                    id="outlined-basic"
                    value={value2}
                    label="Текст 2"
                    variant="outlined"
                />
            </Box>
        </Box>
    );
};
