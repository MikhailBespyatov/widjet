import { Button } from '@alfalab/core-components/button';
import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../../components/CustomButton';
import { AppContext } from '../../context/AppContext';
import { setStep } from '../../store/reducers/stepSlice';
import { LinkCard } from './components/LinkCard';
import { SavedCards } from './components/SavedCards';
import s from './Payments.module.css';

export const Payments = () => {
    const [isLinkCard, setIsLinkCard] = useState(false);
    const { onClose } = useContext(AppContext);
    const dispatch = useDispatch();

    return (
        <div>
            {isLinkCard ? <LinkCard /> : <SavedCards onLinkCardClick={() => setIsLinkCard(true)} />}
            <div className={s.buttons_group}>
                <CustomButton
                    block
                    onClick={() => {
                        dispatch(setStep(4));
                    }}
                >
                    Подтвердить
                </CustomButton>
                <Button view="tertiary" size="s" block className={s.cancel_button} onClick={onClose}>
                    Отмена
                </Button>
            </div>
        </div>
    );
};
