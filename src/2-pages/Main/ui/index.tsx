import { Box, Button, Typography } from '@mui/material';
import { Modal } from '@zh2s/my-modal';
import { toastObserver } from '@zh2s/my-toast';
import { useState, type FC } from 'react';
import { toast } from 'react-toastify';
import styles from './styles.module.scss';

export const Main: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toastifyHandler = (type: 'success' | 'error', text: string) => {
        toast[type](text);
    };

    const myToastHandler = (type: 'success' | 'error', text: string) => {
        toastObserver.notify({
            title: text,
            type,
        });
    };

    return (
        <div className={styles.wr}>
            <Typography sx={{ mb: 8 }}>Main page</Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Button variant="contained" color="success" onClick={() => toastifyHandler('success', 'Positive')}>
                    Success Toast
                </Button>
                <Button variant="contained" color="error" onClick={() => toastifyHandler('error', 'Negative')}>
                    Error Toast
                </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Button variant="contained" color="success" onClick={() => myToastHandler('success', 'My Positive')}>
                    My Success Toast
                </Button>
                <Button variant="contained" color="error" onClick={() => myToastHandler('error', 'My Negative')}>
                    My Error Toast
                </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" onClick={() => setIsOpen(true)}>
                    My Modal
                </Button>
            </Box>

            <Modal
                isOpen={isOpen}
                title="My modal"
                closeHandler={() => setIsOpen(false)}
                body={
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => myToastHandler('success', 'My Positive')}
                    >
                        My Success Toast
                    </Button>
                }
            />
        </div>
    );
};
