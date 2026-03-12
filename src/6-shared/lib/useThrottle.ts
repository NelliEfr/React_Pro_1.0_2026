import { useEffect, useRef, useState } from 'react';

export const useThrottle = <V>(value: V, ms: number): V => {
    const [throttledValue, setThrottledValue] = useState(value);

    const ref = useRef({
        isActive: false,
        currentValue: value,
    });

    useEffect(() => {
        ref.current.currentValue = value;

        if (ref.current.isActive) {
            return;
        }

        ref.current.isActive = true;

        setTimeout(() => {
            setThrottledValue(ref.current.currentValue);

            ref.current.isActive = false;
        }, ms);
    }, [ms, value]);

    return throttledValue;
};
