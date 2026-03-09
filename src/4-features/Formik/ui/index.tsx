import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControlLabel,
    IconButton,
    TextField,
    Typography,
} from '@mui/material';
import { Field, FieldArray, Form, Formik } from 'formik';
import { useMemo, type FC } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FORMS_LS_KEY } from '6-shared/config';
import { getMessageFromError } from '6-shared/lib/common';
import { formHandler } from '6-shared/lib/forms';
import { clearLS, loadFromLS } from '6-shared/lib/localStorage';
import { FORM_LS_KEY } from '../config';
import { validationSchema, type FormValues } from '../model';
import { createInitialsValues } from '../model';
import { AutoSave } from './AutoSave';
import { FirstName } from './FirstName';
import { LostDataModal } from './LostDataModal';

export const FormikForm: FC = () => {
    const navigate = useNavigate();
    const initialValues = useMemo(() => {
        const valuesFromLS = loadFromLS<FormValues>({
            key: FORMS_LS_KEY,
            subTitle: FORM_LS_KEY,
        });

        return createInitialsValues(valuesFromLS);
    }, []);

    const submitHandler = async (values: FormValues) => {
        try {
            const returnValue = await formHandler(values);

            console.log({ returnValue });

            toast.success('Форма успешно отправлена');

            clearLS({
                key: FORMS_LS_KEY,
                subTitle: FORM_LS_KEY,
            });

            navigate('/');
        } catch (error) {
            toast.error(getMessageFromError(error));
        }
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
            {({ values, handleChange, handleBlur, dirty, isSubmitting, isValid, errors }) => (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexFlow: 'column',
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 4 }}>
                        Formik form
                    </Typography>
                    <Container maxWidth="sm">
                        <Form>
                            <FirstName />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="isMiddleNameRequired"
                                        checked={values.isMiddleNameRequired}
                                        onChange={handleChange}
                                    />
                                }
                                label="Отчество"
                            />
                            {values.isMiddleNameRequired && (
                                <TextField
                                    name="middleName"
                                    value={values.middleName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    sx={{ width: '100%', mb: 2 }}
                                    label="Отчество"
                                    variant="outlined"
                                    error={!!errors.middleName}
                                    helperText={errors.middleName}
                                />
                            )}
                            <TextField
                                required
                                name="lastName"
                                onChange={handleChange}
                                value={values.lastName}
                                onBlur={handleBlur}
                                sx={{ width: '100%', mb: 4 }}
                                label="Фамилия"
                                variant="outlined"
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                            />
                            <Divider variant="middle" sx={{ mb: 4 }} />
                            <FieldArray
                                name="skills"
                                render={(arrayHelpers) => (
                                    <>
                                        {values.skills.map((_, index) => (
                                            <Box sx={{ display: 'flex', mb: 2, alignItems: 'flex-start' }} key={index}>
                                                <Field
                                                    as={TextField}
                                                    required
                                                    variant="outlined"
                                                    name={`skills.${index}`}
                                                    label={`Навык ${index + 1}`}
                                                    sx={{ width: '100%' }}
                                                    error={Array.isArray(errors.skills) && errors.skills[index]}
                                                    helperText={Array.isArray(errors.skills) && errors.skills[index]}
                                                />
                                                {!!index && (
                                                    <IconButton
                                                        onClick={() => arrayHelpers.remove(index)}
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
                                            onClick={() => arrayHelpers.push('')}
                                            color="primary"
                                            sx={{ mb: 4 }}
                                            startIcon={<AddIcon />}
                                            disabled={Array.isArray(errors.skills) && !!errors.skills.length}
                                        >
                                            Добавить навык
                                        </Button>
                                    </>
                                )}
                            />

                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    sx={{ mb: 2 }}
                                    disabled={!isValid || !dirty || !!Object.keys(errors).length}
                                    loading={isSubmitting}
                                    variant="contained"
                                    type="submit"
                                >
                                    Отправить
                                </Button>
                            </Box>
                        </Form>
                        <AutoSave />
                        <LostDataModal />
                    </Container>
                </Box>
            )}
        </Formik>
    );
};
