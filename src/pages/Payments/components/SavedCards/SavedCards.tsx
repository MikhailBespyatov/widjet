import { useState } from 'react';
import { OkIcon } from '../../../../components/Icons/OkIcon';
import { Title } from '../../../../components/Title';
import { IUserCard } from '../../../../types/stepTypes';
import { SavedCard } from '../SavedCard/SavedCard';
import s from './SavedCards.module.css';

interface Props {
    onLinkCardClick: () => void;
    setActiveCard: (card: IUserCard) => void;
    cards: IUserCard[];
    activeCard: IUserCard | null;
}

export const SavedCards = ({ onLinkCardClick, setActiveCard, cards, activeCard }: Props) => {
    return (
        <>
            <div className={s.succes_wrapper}>
                <OkIcon />
                <span className={s.succes}>Магазин одобрил рассрочку</span>
            </div>
            <Title>Добавьте карту любого банка</Title>
            <div>
                {cards?.map((card, i) => {
                    const cardIsActive = activeCard?.cardMask === card?.cardMask;
                    return (
                        <SavedCard
                            key={i.toString()}
                            card={card}
                            onClick={() => setActiveCard(card)}
                            isActive={cardIsActive}
                        />
                    );
                })}
            </div>
            <button type="button" className={s.button} onClick={onLinkCardClick}>
                <span>Привязать карту</span>
            </button>
        </>
    );
};
