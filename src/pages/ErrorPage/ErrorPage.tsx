import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CustomButton } from '../../components/CustomButton';
import { Title } from '../../components/Title';
import { AppContext } from '../../context/AppContext';
import { RootState } from '../../store/store';
import { ERROR_CONFIGS } from './constants';
import s from './ErrorPage.module.css';

export const ErrorPage = () => {
    const errorCode = useSelector((state: RootState) => state.error.errorCode);
    const config = ERROR_CONFIGS[errorCode as keyof typeof ERROR_CONFIGS];
    const { icon, title, description } = config;
    const { onClose } = useContext(AppContext);

    return (
        <div className={s.wrapper}>
            {icon}
            <Title>{title}</Title>
            <p className={s.description}>{description}</p>
            <div className={s.buttonWrapper}>
                <CustomButton block onClick={onClose}>
                    Вернуться в магазин
                </CustomButton>
            </div>
        </div>
    );
};
