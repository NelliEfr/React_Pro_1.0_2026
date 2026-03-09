import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import type { FC } from 'react';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import type { FormValues } from '../model';

export const MiddleName: FC = () => {
    const { control } = useFormContext();
    const isMiddleNameRequired = useWatch<FormValues>({ name: 'isMiddleNameRequired' });

    return (
        <>
            <Controller
                name="isMiddleNameRequired"
                control={control}
                render={({ field }) => (
                    <FormControlLabel
                        sx={{ mb: 2 }}
                        control={
                            <Checkbox
                                {...field}
                                checked={field.value}
                                onChange={(e) => field.onChange(e.target.checked)}
                            />
                        }
                        label="Требуется отчество"
                    />
                )}
            />

            {isMiddleNameRequired && (
                <Controller
                    name="middleName"
                    control={control}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label="Отчество"
                            fullWidth
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            sx={{ mb: 2 }}
                        />
                    )}
                />
            )}
        </>
    );
};
