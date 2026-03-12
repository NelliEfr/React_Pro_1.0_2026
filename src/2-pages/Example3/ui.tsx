import { Box, Typography } from '@mui/material';
import { useRef, useState, type FC } from 'react';
import { DayPickerWrapper } from '6-shared/ui/DayPicker';

export const Example3: FC = () => {
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);

    const inputRef = useRef<HTMLInputElement>(null);

    const startDateHandler = (newDate: Date | undefined) => {
        setStartDate(newDate);
        inputRef.current?.click();
    };

    return (
        <Box>
            <Typography variant="h3" align="center" sx={{ mb: 6 }}>
                Работа с DOM
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <DayPickerWrapper label="Дата начала" selectedDay={startDate} onSelect={startDateHandler} />
                <DayPickerWrapper
                    inputRef={inputRef}
                    label="Дата окончания"
                    selectedDay={endDate}
                    onSelect={setEndDate}
                />
            </Box>
        </Box>
    );
};
