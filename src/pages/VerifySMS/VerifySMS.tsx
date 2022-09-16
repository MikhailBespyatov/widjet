import { Confirmation, useConfirmation } from '@alfalab/core-components/confirmation';
import { Title } from 'components/Title';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useVerifySMSMutation } from 'services/baseAPI';
import { setStep } from 'store/reducers/stepSlice';
import { AppContext } from '../../context/AppContext';
import s from './VerifySMS.module.css';

export const VerifySMS = () => {
    const { confirmationState, confirmationScreen, setConfirmationState, setConfirmationScreen } = useConfirmation();
    const [verify, { isSuccess }] = useVerifySMSMutation();
    const { preappId } = useContext(AppContext);
    const dispatch = useDispatch();

    const onInputFinished = (code: string) => {
        verify({ code, preappId });
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(setStep(2));
        }
    }, [isSuccess]);

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
