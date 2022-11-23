import { AltynBankIcon } from '../../../../components/Icons/BankIcons/AltynBankIcon';
import { RightIcon } from '../../../../components/Icons/RightArrow';
import { IUserCard } from '../../../../types/stepTypes';
import { CARD_TYPES } from '../../constants';
import s from './SavedCard.module.css';
import cn from 'classnames';

interface Props {
    onClick?: () => void;
    card: IUserCard;
    isActive: boolean;
}

export const SavedCard = ({ onClick, card: { cardMask }, isActive }: Props) => {
    const cardType = cardMask && CARD_TYPES[cardMask[0]];
    return (
        <button className={cn(s.wrapper, { [s.cardActive]: isActive })} onClick={onClick}>
            <div className={s.flex_center}>
                {cardType}
                <AltynBankIcon style={{ marginLeft: '12px' }} />
                <span className={s.card_mask}>••••{cardMask}</span>
            </div>
            <RightIcon />
        </button>
    );
};
