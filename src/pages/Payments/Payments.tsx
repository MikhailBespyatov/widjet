import { Button } from '@alfalab/core-components/button';
import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../../components/CustomButton';
import { Loader } from '../../components/Loader';
import { preappId } from '../../constants/urls';
import { AppContext } from '../../context/AppContext';
import {
    useCardLinkMutation,
    useEcomStartMutation,
    useGetStatusQuery,
    useGetUCardsQuery,
    useUseCardMutation,
} from '../../services/baseAPI';
import { setStep } from '../../store/reducers/stepSlice';
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
    const { onClose, preappId } = useContext(AppContext);
    const { data: savedCards, isFetching } = useGetUCardsQuery(preappId);
    const [postUseCard, { isLoading: useCardIsLoading, isSuccess: useCardIsSuccess }] = useUseCardMutation();
    const [ecomStart, { data: ecomStartData, isLoading: ecomStartIsLoading, isSuccess: ecomStartIsSuccess }] =
        useEcomStartMutation();
    const [cardLink, { data: cardLinkData, isLoading: cardLinkIsLoading, isSuccess: cardLinkIsSuccess }] =
        useCardLinkMutation();
    const data = useSelector((state: RootState) => state.linkCard.data);
    const errors = useSelector((state: RootState) => state.linkCard.errors);
    const {
        data: statusData,
        isFetching: isStatusLoading,
        refetch: getStatus,
    } = useGetStatusQuery(preappId, {
        skip: !Boolean(cardLinkData?.Code),
        pollingInterval: 1000,
    });
    const dispatch = useDispatch();
    const userCards = savedCards?.UserCards;

    const setErrors = (value: typeof errors) => {
        dispatch(setCardErrors(value));
    };

    const onSubmit = async () => {
        const formData = { ...data, exp_year: `${START_DATE}${data.exp_year}` };
        const errors = getFormErrors(formData);
        const isNotValidity = Object.values(errors).some(Boolean);

        if (isNotValidity) {
            setErrors(errors);
            return;
        } else {
            await ecomStart(preappId).then(() => {
                cardLink({ data: formData, preappId }).then((data: any) => {
                    if (data.data.body.cardRequestLink) {
                        window.location.href = data.data.body.cardRequestLink;
                    }
                });
            });
        }
    };

    useEffect(() => {
        if (useCardIsSuccess) {
            dispatch(setStep(4));
        }
        if (statusData?.data.code !== 114) {
            getStatus();
        }
    }, [useCardIsSuccess, cardLinkIsSuccess, statusData?.data.code]);

    if (isFetching || useCardIsLoading || isStatusLoading) {
        return <Loader isVisible={isFetching || useCardIsLoading || isStatusLoading} />;
    }

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
                <CustomButton
                    block
                    onClick={() => {
                        if (isLinkCard) onSubmit();
                        if (activeCard) postUseCard({ card: activeCard, preappId });
                    }}
                >
                    Подтвердить
                </CustomButton>
                <CustomButton block isCancel onClick={onClose}>
                    Отмена
                </CustomButton>
            </div>
        </div>
    );
};
