import { TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import type { FC } from 'react';
import type { FormValues } from '../model';

export const FirstName: FC = () => {
    const { values, errors, handleChange, handleBlur } = useFormikContext<FormValues>();

    console.log('FirstName');

    return (
        <TextField
            required
            value={values.firstName}
            type="text"
            name="firstName"
            sx={{ width: '100%' }}
            label="Имя"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.firstName}
            helperText={errors.firstName}
        />
    );
};
