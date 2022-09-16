import { FC, ReactNode } from 'react';
import { CloseIcon } from '../Icons/CloseIcon';
import s from './Modal.module.css';

interface Props {
    children: ReactNode;
    stepNumber?: string | ReactNode;
    open: boolean;
    onClose: () => void;
}

export const Modal: FC<Props> = ({ children, stepNumber, open, onClose }) => {
    return open ? (
        <div className={s.backdrop}>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <span className={s.stepNumber}>{stepNumber}</span>
                    <CloseIcon onClick={onClose} />
                </div>
                <div className={s.content}>{children}</div>
            </div>
        </div>
    ) : null;
};
