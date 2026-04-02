import { Box, TextField, Typography } from '@mui/material';
import { useEffect, useEffectEvent, useState, type FC } from 'react';

export const UseEffectEvent: FC = () => {
    const [value, setValue] = useState('');

    const cb = useEffectEvent((counter: number) => {
        console.log({
            counter,
            value,
        });
    });

    useEffect(() => {
        let counter = 1;

        const intervalId = setInterval(() => cb(counter++), 1e3);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Typography align="center" variant="h3" sx={{ mb: 4 }}>
                useEffectEvent
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="FIO"
                    id="outlined-basic"
                    label="FIO"
                    variant="outlined"
                />
            </Box>
        </>
    );
};
