import { Box, CircularProgress, Tab, Tabs, TextField, Typography } from '@mui/material';
import {
    Activity,
    use,
    Suspense,
    useEffect,
    useState,
    type FC,
    type PropsWithChildren,
    type SyntheticEvent,
} from 'react';
import { useUse } from '6-shared/lib/useUse';

export const ActivityPage: FC = () => {
    const [tab, setTba] = useState('one');

    const handleChange = (_event: SyntheticEvent, newValue: string) => {
        setTba(newValue);
    };

    return (
        <>
            <Typography align="center" variant="h3" sx={{ mb: 2 }}>
                Activity
            </Typography>
            <Tabs
                value={tab}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                centered
                variant="fullWidth"
                sx={{ mb: 4 }}
            >
                <Tab value="one" label="Обычный компонент" />
                <Tab value="two" label="Activity" />
            </Tabs>

            <Suspense fallback={<CircularProgress />}>
                {tab === 'one' && <div>First Tab Content</div>}

                <Activity mode={tab === 'two' ? 'visible' : 'hidden'}>
                    <TabContent index={2} />
                </Activity>
            </Suspense>
        </>
    );
};

export const TabContent: FC<PropsWithChildren<{ index: number }>> = ({ index }) => {
    const data = useUse('user', () => fetch('https://jsonplaceholder.typicode.com/users/1').then((r) => r.json()));

    useEffect(() => {
        console.log(`${index} render`);

        return () => console.log(`${index} unmount`);
    }, [index]);

    const [value, setValue] = useState('');

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <TextField
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="FIO"
                id="outlined-basic"
                label="FIO"
                variant="outlined"
            />

            <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </Box>
    );
};
