import { Confirmation, useConfirmation } from '@alfalab/core-components/confirmation';
import { Title } from 'components/Title';
import { PreappIdContext } from 'context/PreappIdContext';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useVerifySMSMutation } from 'services/baseAPI';
import { setStep } from 'store/reducers/stepSlice';
import s from './VerifySMS.module.css';

export const VerifySMS = () => {
    const { confirmationState, confirmationScreen, setConfirmationState, setConfirmationScreen } = useConfirmation();
    const [verify, { isSuccess }] = useVerifySMSMutation();
    const preappId = useContext(PreappIdContext);
    const dispatch = useDispatch();

    const onInputFinished = (code: string) => {
        verify({ code, preappId });
        dispatch(setStep(2));
    };

    // useEffect(() => {
    //     if (isSuccess) {
    //         dispatch(setStep(2));
    //     }
    // }, []);

    return (
        <Confirmation
            screen={confirmationScreen}
            state={confirmationState}
            onChangeState={setConfirmationState}
            onChangeScreen={setConfirmationScreen}
            onInputFinished={onInputFinished}
            onSmsRetryClick={() => console.log()}
            alignContent="center"
            requiredCharAmount={4}
            texts={{
                title: <Title>Подтвердите номер телефона</Title>,
                linkToHint: '',
                buttonRetry: 'Отправить код ещё раз',
            }}
            className={s.confirmation}
        />
    );
};
