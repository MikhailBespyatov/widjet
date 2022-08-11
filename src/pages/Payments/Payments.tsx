import { Button } from '@alfalab/core-components/button';
import { useState } from 'react';
import { CustomButton } from '../../components/CustomButton';
import { LinkCard } from './components/LinkCard';
import { SavedCards } from './components/SavedCards';
import s from './Payments.module.css';

export const Payments = () => {
    const [isLinkCard, setIsLinkCard] = useState(false);

    return (
        <div>
            {isLinkCard ? <LinkCard /> : <SavedCards onLinkCardClick={() => setIsLinkCard(true)} />}
            <div className={s.buttons_group}>
                <CustomButton block onClick={() => {}}>
                    Подтвердить
                </CustomButton>
                <Button view="tertiary" size="s" block className={s.cancel_button}>
                    Отмена
                </Button>
            </div>
        </div>
    );
};
