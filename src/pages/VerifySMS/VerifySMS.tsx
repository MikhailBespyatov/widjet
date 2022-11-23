import { Confirmation, useConfirmation } from '@alfalab/core-components/confirmation';
import { Title } from 'components/Title';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSendSMSMutation, useVerifySMSMutation } from 'services/baseAPI';
import { setStep } from 'store/reducers/stepSlice';
import { verifyErrorCode } from '../../constants/validationErrorCode';
import { AppContext } from '../../context/AppContext';
import { RootState } from '../../store/store';
import s from './VerifySMS.module.css';

export const VerifySMS = () => {
    const { confirmationState, confirmationScreen, setConfirmationState, setConfirmationScreen } = useConfirmation();
    const [verify, { isSuccess }] = useVerifySMSMutation();
    const { preappId } = useContext(AppContext);
    const dispatch = useDispatch();
    const errorCode = useSelector((state: RootState) => state.error.errorCode);
    const { iin, phoneNumber } = useSelector((state: RootState) => state.personalData);
    const [sendSMS] = useSendSMSMutation();

    const onInputFinished = (code: string) => {
        verify({ code, preappId });
    };

    const onSmsRetryClick = async () => {
        await sendSMS({ body: { iin, phoneNumber }, preappId });

        setConfirmationState('INITIAL');
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(setStep(2));
        }
        if (verifyErrorCode.includes(errorCode)) {
            setConfirmationState('CODE_ERROR');
        }
    }, [isSuccess, errorCode]);

    return (
        <Confirmation
            screen={confirmationScreen}
            state={confirmationState}
            onChangeState={setConfirmationState}
            onChangeScreen={setConfirmationScreen}
            onInputFinished={onInputFinished}
            onSmsRetryClick={onSmsRetryClick}
            alignContent="center"
            requiredCharAmount={4}
            texts={{
                title: <Title>Подтвердите номер телефона</Title>,
                linkToHint: '',
                buttonRetry: 'Отправить код ещё раз',
                codeError:
                    errorCode === 3 ? 'Истек срок действия кода, попробуйте получить новый' : 'Введен неверный код',
            }}
            className={s.confirmation}
        />
    );
};
