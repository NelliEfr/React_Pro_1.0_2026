import { useEffect, useRef, type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { getModalNodeById } from './utils.ts';

import './styles.scss';
import { MdOutlineClose } from 'react-icons/md';
import { MODAL_OVERLAY_ID } from './config.ts';

interface Props {
    isOpen: boolean;
    title: string;
    body: ReactNode;
    closeHandler: () => void;
}

export const Modal: FC<Props> = ({ isOpen, ...restProps }) => {
    const modalOverlayNode = getModalNodeById(MODAL_OVERLAY_ID);

    if (!modalOverlayNode) return null;

    if (isOpen) {
        modalOverlayNode.classList.add('myModal__overlay--open');
    } else {
        modalOverlayNode.classList.remove('myModal__overlay--open');
    }

    return createPortal(<ModalInner {...restProps} isOpen={isOpen} />, modalOverlayNode);
};

const ModalInner: FC<Props> = ({ title, isOpen, closeHandler, body }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                closeHandler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, closeHandler]);

    return (
        <div ref={ref} className={`myModal__container ${isOpen && 'myModal__container--open'}`}>
            <div className="myModal__header">
                <span className="myModal__title">{title}</span>
                <MdOutlineClose onClick={closeHandler} className="myModal__closeIcon" />
            </div>
            <div>{body}</div>
        </div>
    );
};
