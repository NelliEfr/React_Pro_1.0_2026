import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import type { FC, ReactNode } from 'react';
import type { Product } from './model';

type Props = Product & {
    actionSlot: ReactNode;
};

export const ProductCard: FC<Props> = ({ pictures, name, price, actionSlot }) => {
    return (
        <Card sx={{ maxWidth: 320, width: '100%', mb: 4, mx: 4 }}>
            <CardMedia sx={{ height: 140 }} image={pictures} title="green iguana" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Price: {price}
                </Typography>
            </CardContent>
            <CardActions>{actionSlot}</CardActions>
        </Card>
    );
};
