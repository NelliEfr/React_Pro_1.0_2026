import { Box, Button, Typography } from '@mui/material';
import { useEffect, useRef, type FC } from 'react';

export const Example5: FC = () => {
    const socketRef = useRef<WebSocket>(null);

    useEffect(() => {
        socketRef.current = new WebSocket('wss://example.com/chat');

        socketRef.current.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log('Новое сообщение:', message);
            // Здесь можно обновить состояние
        };

        return () => {
            socketRef.current?.close();
        };
    }, []);

    const sendMessage = (text: string) => {
        if (socketRef.current?.readyState === WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify({ type: 'chat', text }));
        }
    };

    return (
        <Box>
            <Typography variant="h3" align="center" sx={{ mb: 6 }}>
                WebSocket
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" onClick={() => sendMessage('hello')}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};
