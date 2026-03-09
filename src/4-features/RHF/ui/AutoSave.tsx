import CheckIcon from '@mui/icons-material/Check';
import { Alert } from '@mui/material';
import { memo, useEffect, useRef, useState, type FC } from 'react';
import { useFormState, useWatch } from 'react-hook-form';
import { FORMS_LS_KEY } from '6-shared/config';
import { saveToLocaleStorage } from '6-shared/lib/localStorage';
import { FORM_LS_KEY } from '../config';

export const AutoSave: FC = memo(() => {
    const values = useWatch();
    const { isDirty } = useFormState();
    const stringifiedValues = JSON.stringify(values);

    const [showAutoSaveMsg, setShowAutoSaveMsg] = useState(false);

    const metaInfo = useRef({
        isActive: false,
        lastValues: values,
    });

    useEffect(() => {
        metaInfo.current.lastValues = JSON.parse(stringifiedValues);

        if (!isDirty || metaInfo.current.isActive) {
            return;
        }

        metaInfo.current.isActive = true;

        setTimeout(() => {
            saveToLocaleStorage({
                state: metaInfo.current.lastValues,
                key: FORMS_LS_KEY,
                subTitle: FORM_LS_KEY,
            });

            metaInfo.current.isActive = false;

            setShowAutoSaveMsg(true);
            setTimeout(() => setShowAutoSaveMsg(false), 5e2);
        }, 1e3);
    }, [isDirty, stringifiedValues]);

    return (
        showAutoSaveMsg && (
            <Alert sx={{ mb: 2 }} icon={<CheckIcon fontSize="inherit" />} severity="info">
                Данные формы сохранены
            </Alert>
        )
    );
});
