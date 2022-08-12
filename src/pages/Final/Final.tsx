import { CustomButton } from '../../components/CustomButton';
import { FinalIcon } from '../../components/Icons/FinalIcon';
import { Title } from '../../components/Title';
import s from './Final.module.css';

export const Final = () => {
    return (
        <div className={s.wrapper}>
            <FinalIcon className={s.icon} />
            <Title>Заказ успешно оформлен </Title>
            <p className={s.description}>Магазин Lamoda скоро свяжется с Вами для доставки</p>
            <CustomButton block onClick={() => {}}>
                Вернуться в магазин
            </CustomButton>
        </div>
    );
};
