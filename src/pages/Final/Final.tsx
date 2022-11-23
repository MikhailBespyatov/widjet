import { useContext } from 'react';
import { CustomButton } from '../../components/CustomButton';
import { FinalIcon } from '../../components/Icons/FinalIcon';
import { Title } from '../../components/Title';
import { AppContext } from '../../context/AppContext';
import s from './Final.module.css';

export const Final = () => {
    const { onEnd, partnerName } = useContext(AppContext);

    return (
        <div className={s.wrapper}>
            <FinalIcon className={s.icon} />
            <Title>Заказ успешно оформлен </Title>
            <p className={s.description}>Магазин {partnerName} скоро свяжется с Вами для доставки</p>
            <CustomButton block onClick={onEnd}>
                Вернуться в магазин
            </CustomButton>
        </div>
    );
};
