import { TextField } from '@mui/material';

import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import type { FormValues } from '../model';

export const FirstName: FC = () => {
    const { control } = useFormContext<FormValues>();

    console.log('RHF FirstName');

    return (
        <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState }) => (
                <TextField
                    {...field}
                    sx={{ mb: 2 }}
                    fullWidth
                    label="Имя"
                    variant="outlined"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                />
            )}
        />
    );
};
