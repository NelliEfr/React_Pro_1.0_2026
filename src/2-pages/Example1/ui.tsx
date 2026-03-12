import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, IconButton, Typography } from '@mui/material';
import { type FC } from 'react';
import { generateProducts, ProductCard } from '5-entities/Products/Card';

const PRIMARY = 'primary' as const;
const RED = 'error' as const;

export const Example1: FC = () => {
    const clickHandler = () => {};

    return (
        <Box>
            <Typography variant="h3" align="center" sx={{ mb: 6 }}>
                Сбор статистики
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {generateProducts(9).map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        pictures={product.pictures}
                        actionSlot={
                            <IconButton onClick={clickHandler} color={PRIMARY}>
                                <ShoppingCartIcon />
                            </IconButton>
                        }
                    />
                ))}
            </Box>
        </Box>
    );
};
