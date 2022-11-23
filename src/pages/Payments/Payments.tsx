import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../../components/CustomButton';
import { Loader } from '../../components/Loader';
import { AppContext } from '../../context/AppContext';
import {
    useCancelOrderMutation,
    useCardLinkMutation,
    useEcomStartMutation,
    useGetUCardsQuery,
    useLazyGetStatusQuery,
    useUseCardMutation,
} from '../../services/baseAPI';
import { RootState } from '../../store/store';
import { IUserCard } from '../../types/stepTypes';
import { LinkCard } from './components/LinkCard';
import { SavedCards } from './components/SavedCards';
import { getFormErrors, START_DATE } from './constants';
import { setErrors as setCardErrors } from '../../store/reducers/linkCardSlice';
import s from './Payments.module.css';

export const Payments = () => {
    const [isLinkCard, setIsLinkCard] = useState(false);
    const [activeCard, setActiveCard] = useState<null | IUserCard>(null);
    const [statusLoading, setStatusLoading] = useState(false);
    const { onClose, preappId } = useContext(AppContext);
    const { data: savedCards, isFetching: isSavedCardsLoading } = useGetUCardsQuery(preappId);
    const [postUseCard, { isLoading: useCardIsLoading, isSuccess: useCardIsSuccess }] = useUseCardMutation();
    const [ecomStart, { isLoading: ecomStartIsLoading, isSuccess: ecomStartIsSuccess }] = useEcomStartMutation();
    const [cancelOrder, { isLoading: cancelOrderLoading }] = useCancelOrderMutation();
    const [cardLink] = useCardLinkMutation();
    const [trigger] = useLazyGetStatusQuery();
    const data = useSelector((state: RootState) => state.linkCard.data);
    const errors = useSelector((state: RootState) => state.linkCard.errors);
    const dispatch = useDispatch();
    const userCards = savedCards?.UserCards;
    const loading =
        isSavedCardsLoading || useCardIsLoading || ecomStartIsLoading || statusLoading || cancelOrderLoading;

    const setErrors = (value: typeof errors) => {
        dispatch(setCardErrors(value));
    };

    const getStatus = () => {
        setStatusLoading(true);
        trigger(preappId).then((data) => {
            if (data.data.data.code === 110) {
                setTimeout(() => getStatus(), 2000);
            } else {
                setStatusLoading(false);
            }
        });
    };

    const onSubmit = async () => {
        const formData = { ...data, exp_year: `${START_DATE}${data.exp_year}` };
        const errors = getFormErrors(formData);
        const isNotValidity = Object.values(errors).some(Boolean);

        if (isNotValidity) {
            setErrors(errors);
            return;
        } else {
            await ecomStart(preappId);
            cardLink({ data: formData, preappId }).then((cardData) => {
                if (cardData?.data?.Code) {
                    getStatus();
                }
                if (cardData?.data.body.cardRequestLink) {
                    window.open(cardData?.data.body.cardRequestLink);
                    getStatus();
                }
            });
        }
    };

    const onUseCard = async () => {
        await postUseCard({ card: activeCard, preappId });
        trigger(preappId);
    };

    const onCancel = async () => {
        await cancelOrder(preappId);
        onClose();
    };

    useEffect(() => {
        if (savedCards && savedCards.UserCards?.length > 0 && !savedCards.UserCards[0]?.cardMask) {
            setIsLinkCard(true);
        }
    }, [savedCards]);

    return (
        <div>
            {isLinkCard ? (
                <LinkCard />
            ) : (
                <SavedCards
                    cards={userCards}
                    onLinkCardClick={() => setIsLinkCard(true)}
                    setActiveCard={setActiveCard}
                    activeCard={activeCard}
                />
            )}
            <div className={s.buttons_group}>
                <CustomButton block isCancel onClick={onCancel}>
                    Отмена
                </CustomButton>
                <CustomButton
                    block
                    onClick={() => {
                        if (isLinkCard) onSubmit();
                        if (activeCard) onUseCard();
                    }}
                >
                    Подтвердить
                </CustomButton>
            </div>
            <Loader isVisible={loading} />
        </div>
    );
};
