import React, {useCallback, useEffect} from 'react';
import { createPortal } from "react-dom";
import s from './Modals.module.scss';

interface IProps {
    children?: React.ReactNode;
    closeFunc: Function;
}

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

const Modals: React.FC<IProps> = ({ children, closeFunc }) => {
    
    const closeModalByEsc = useCallback(
    (e: any) => {
        if (e.code === "Escape") {
        closeFunc();
        }
    },
    [closeFunc]
    );

    const closeByBackdropClick = (e: any) => {
        if (e.target === e.currentTarget) {
            closeFunc();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", closeModalByEsc);
        return () => {
        window.removeEventListener("keydown", closeModalByEsc);
        };
    }, [closeModalByEsc]);

    return createPortal(
    <div className={s.overlay} onClick={closeByBackdropClick}>
        <div className={s.modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default Modals;