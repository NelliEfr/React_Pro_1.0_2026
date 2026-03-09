import { TextField } from '@mui/material';

import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import type { FormValues } from '../model';

export const LastName: FC = () => {
    const { control } = useFormContext<FormValues>();

    console.log('RHF LastName');

    return (
        <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState }) => (
                <TextField
                    {...field}
                    sx={{ mb: 2 }}
                    fullWidth
                    label="Фамилия"
                    variant="outlined"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                />
            )}
        />
    );
};
