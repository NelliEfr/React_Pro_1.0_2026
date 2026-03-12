import { Box, Typography } from '@mui/material';
import { useState, type FC } from 'react';
import { DayPickerWrapper } from '6-shared/ui/DayPicker';

export const Example3: FC = () => {
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);

    const startDateHandler = (newDate: Date | undefined) => {
        setStartDate(newDate);
    };

    return (
        <Box>
            <Typography variant="h3" align="center" sx={{ mb: 6 }}>
                Работа с Dom
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <DayPickerWrapper label="Дата начала" selectedDay={startDate} onSelect={startDateHandler} />
                <DayPickerWrapper label="Дата окончания" selectedDay={endDate} onSelect={setEndDate} />
            </Box>
        </Box>
    );
};
