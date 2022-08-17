import { FC } from 'react';
import { LoaderIcon } from '../Icons/LoaderIcon';
import s from './Loader.module.css';

interface Props {
    isVisible: boolean;
}

export const Loader: FC<Props> = ({ isVisible }) => {
    return isVisible ? (
        <div className={s.wrapper}>
            <div className={s.content}>
                <h5 className={s.title}>Проверяем</h5>
                <div className={s.icon_wrapper}>
                    <LoaderIcon />
                </div>
            </div>
        </div>
    ) : null;
};
