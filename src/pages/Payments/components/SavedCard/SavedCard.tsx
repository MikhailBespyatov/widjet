import { AltynBankIcon } from '../../../../components/Icons/BankIcons/AltynBankIcon';
import { RightIcon } from '../../../../components/Icons/RightArrow';
import { IUserCard } from '../../../../types/stepTypes';
import { CARD_TYPES } from '../../constants';
import s from './SavedCard.module.css';

interface Props {
    onClick?: () => void;
    card: IUserCard;
}

export const SavedCard = ({ onClick, card: { cardMask } }: Props) => {
    const cardType = CARD_TYPES[cardMask[0]];
    return (
        <button className={s.wrapper}>
            <div className={s.flex_center}>
                {cardType}
                <AltynBankIcon style={{ marginLeft: '12px' }} />
                <span className={s.card_mask}>{cardMask}</span>
            </div>
            <RightIcon />
        </button>
    );
};
