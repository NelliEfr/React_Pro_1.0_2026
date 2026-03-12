import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, IconButton, Typography } from '@mui/material';
import { useEffect, useRef, type FC } from 'react';
import { generateProducts, ProductCard } from '5-entities/Products/Card';

const PRIMARY = 'primary' as const;
const RED = 'error' as const;

export const Example1: FC = () => {
    const metaInfo = useRef({
        // eslint-disable-next-line react-hooks/purity
        color: Math.random() > 0.5 ? PRIMARY : RED,
        clickCount: 0,
    });

    console.log('Example1');

    const clickHandler = () => {
        metaInfo.current.clickCount += 1;
    };

    useEffect(() => {
        return () => {
            console.log({ metaInfo });
        };
    }, []);

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
                            <IconButton onClick={clickHandler} color={metaInfo.current.color}>
                                <ShoppingCartIcon />
                            </IconButton>
                        }
                    />
                ))}
            </Box>
        </Box>
    );
};
