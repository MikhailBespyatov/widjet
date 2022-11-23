import { FC } from 'react';
import { LoaderIcon } from '../Icons/LoaderIcon';
import s from './Loader.module.css';

interface Props {
    isVisible: boolean;
}

export const Loader: FC<Props> = ({ isVisible }) => {
    return isVisible ? (
        <div className={s.overlay}>
            <p className={s.title}>Проверяем</p>
            <div className={s.loaderContainer}>
                <div className={s.loader}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    ) : null;
};
