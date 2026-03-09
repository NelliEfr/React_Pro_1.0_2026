import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, TextField } from '@mui/material';
import type { FC } from 'react';
import { Controller, useFieldArray, useFormContext, useFormState, useWatch } from 'react-hook-form';
import type { FormValues } from '../model';

export const Skills: FC = () => {
    const { control } = useFormContext<FormValues>();
    const {
        fields: skillsValues,
        append: skillAppend,
        remove: skillRemove,
    } = useFieldArray<FormValues>({
        name: 'skills',
    });

    const { errors } = useFormState<FormValues>({
        name: 'skills',
    });

    const skills = useWatch({ name: 'skills', control });

    return (
        <>
            {skillsValues.map((skill, index) => (
                <Box key={skill.id} sx={{ display: 'flex', mb: 2, alignItems: 'flex-start' }}>
                    <Controller
                        name={`skills.${index}.value` as const}
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                sx={{ mb: 2 }}
                                fullWidth
                                label={`Навык ${index + 1}`}
                                variant="outlined"
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />

                    {!!index && (
                        <IconButton
                            onClick={() => skillRemove(index)}
                            sx={{ ml: 2, mt: '12px' }}
                            color="error"
                            size="small"
                        >
                            <DeleteIcon />
                        </IconButton>
                    )}
                </Box>
            ))}

            <Button
                disabled={!!errors.skills || skills.some((skill) => !skill.value.trim())}
                onClick={() => skillAppend({ value: '' })}
                color="primary"
                sx={{ mb: 4 }}
                startIcon={<AddIcon />}
            >
                Добавить навык
            </Button>
        </>
    );
};
