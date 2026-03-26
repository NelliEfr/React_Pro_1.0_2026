import { Typography } from '@mui/material';
import type { FC } from 'react';
import styles from './styles.module.scss';

export const Main: FC = () => {
    return (
        <div className={styles.wr}>
            <Typography>Main page</Typography>;
        </div>
    );
};
