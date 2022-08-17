import { useContext } from 'react';
import { CustomButton } from '../../components/CustomButton';
import { Title } from '../../components/Title';
import { AppContext } from '../../context/AppContext';
import { ERROR_CONFIGS } from './constants';
import s from './ErrorPage.module.css';

export const ErrorPage = () => {
    const config = ERROR_CONFIGS[0];
    const { icon, title, description } = config;
    const { onClose } = useContext(AppContext);

    return (
        <div className={s.wrapper}>
            {icon}
            <Title>{title}</Title>
            <p className={s.description}>{description}</p>
            <CustomButton block onClick={onClose}>
                Вернуться в магазин
            </CustomButton>
        </div>
    );
};
