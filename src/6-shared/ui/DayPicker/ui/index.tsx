import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { useState, type FC } from 'react';
import { DayPicker } from 'react-day-picker';
import styles from './styles.module.scss';

interface Props {
    onSelect: (newDate: Date | undefined) => void;
    selectedDay: Date | undefined;
    label: string;
}

export const DayPickerWrapper: FC<Props> = ({ label, onSelect, selectedDay }) => {
    const [showDayPicker, setShowDayPicker] = useState(false);

    const clickHandler = () => {
        setShowDayPicker(true);
    };

    const selectHandler = (newDate: Date) => {
        onSelect(newDate);

        closeDayPickerHandler();
    };

    const closeDayPickerHandler = () => {
        setShowDayPicker(false);
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="dayPickerButton">{label}</InputLabel>
                <OutlinedInput
                    onClick={clickHandler}
                    id="dayPickerButton"
                    value={selectedDay ? selectedDay.toDateString() : ''}
                    type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <CalendarMonthIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label={label}
                    sx={{ mb: 2 }}
                />
            </FormControl>
            {showDayPicker && (
                <DayPicker
                    className={styles.dayPicker}
                    required
                    mode="single"
                    selected={selectedDay}
                    onSelect={selectHandler}
                />
            )}
        </Box>
    );
};
