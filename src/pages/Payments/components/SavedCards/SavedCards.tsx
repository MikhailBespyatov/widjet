import { useState } from 'react';
import { OkIcon } from '../../../../components/Icons/OkIcon';
import { Title } from '../../../../components/Title';
import { cards } from '../../constants';
import { SavedCard } from '../SavedCard/SavedCard';
import s from './SavedCards.module.css';

interface Props {
    onLinkCardClick: () => void;
}

export const SavedCards = ({ onLinkCardClick }: Props) => {
    return (
        <div>
            <div className={s.succes_wrapper}>
                <OkIcon />
                <span className={s.succes}>Магазин одобрил рассрочку</span>
            </div>
            <Title>Добавьте карту любого банка</Title>
            <div>
                {cards.map((card) => {
                    return <SavedCard key={card.cardMask} card={card} />;
                })}
            </div>
            <button type="button" className={s.button} onClick={onLinkCardClick}>
                Привязать карту
            </button>
        </div>
    );
};
