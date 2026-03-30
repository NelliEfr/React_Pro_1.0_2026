import { ModalContainer } from '@zh2s/my-modal';
import type { ComponentType } from 'react';

export const withMyModal = (WrappedComponent: ComponentType) => () => (
    <>
        <WrappedComponent />
        <ModalContainer />
    </>
);
