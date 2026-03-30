import type { FC } from 'react';
import { getModalNodeById } from './utils.ts';
import { MODAL_CONTAINER_ID, MODAL_OVERLAY_ID } from './config.ts';

export const ModalContainer: FC = () => {
    const modalContainerNode = getModalNodeById(MODAL_CONTAINER_ID);

    if (!modalContainerNode) {
        const modalTemplate = `<div id="${MODAL_CONTAINER_ID}">
			 	  <div id="${MODAL_OVERLAY_ID}" class='myModal__overlay'>
        	</div>
			 </div>`;

        document.body.insertAdjacentHTML('beforeend', modalTemplate);
    }

    return null;
};
