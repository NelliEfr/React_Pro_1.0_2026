import { useCallback, useEffect, useState, type FC } from 'react';
import { createPortal } from 'react-dom';
import type { ToastModel } from './types.ts';
import './styles.scss';
import { toastObserver } from './toastObserver.ts';

const TOAST_CONTAINER_ID = 'TOAST_CONTAINER_ID';

export const ToastContainer: FC = () => {
    let toastContainerNode = document.getElementById(TOAST_CONTAINER_ID);

    if (!toastContainerNode) {
        toastContainerNode = document.createElement('div');

        toastContainerNode.setAttribute('id', TOAST_CONTAINER_ID);

        document.body.appendChild(toastContainerNode);
    }

    return createPortal(
        <div className="myToast__container myToast__container--top-right">
            <ToastsManager />
        </div>,
        toastContainerNode,
    );
};

export const ToastsManager: FC = () => {
    const [toasts, setToasts] = useState<ToastModel[]>([]);

    useEffect(() => {
        const unsubscribe = toastObserver.subscribe((toast) => setToasts((prev) => [toast, ...prev]));

        return () => unsubscribe();
    }, []);

    const remove = useCallback((id: ToastModel['id']) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return toasts.map((toast) => <Toast key={toast.id} {...toast} remove={remove} />);
};

const Toast: FC<ToastModel & { remove: (id: string) => void }> = ({ id, type, title, remove }) => {
    useEffect(() => {
        setTimeout(() => {
            remove(id);
        }, 5e3);
    }, [id, remove]);

    return <div className={`myToast__toast myToast__toast--${type}`}>{title}</div>;
};
