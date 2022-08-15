import { MaskedInput } from '@alfalab/core-components/masked-input';
import Agreement from 'components/Agreement/Agreement';
import s from './EnteringData.module.css';
import { Button } from '@alfalab/core-components/button';
import { MASKS, PLACEHOLDERS } from 'constants/formConstants';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { baseUrl } from 'constants/urls';
import { useSendSMSMutation } from 'services/baseAPI';
import { validateIin, validatePhoneNumber } from 'helpers/validationFunctions';
import { useDispatch } from 'react-redux';
import { setStep } from 'store/reducers/stepSlice';
import { Title } from 'components/Title';
import { CustomButton } from 'components/CustomButton';
import { AppContext } from '../../context/AppContext';

export const EnteringData = () => {
    const [iin, setIin] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { preappId } = useContext(AppContext);
    const [sendSMS, { isSuccess }] = useSendSMSMutation();
    const [iinErrorMessage, setIinErrorMessage] = useState('');
    const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('');
    const [agreementChecked, setAgreementChecked] = useState(false);
    const dispatch = useDispatch();

    const onIin = (e: ChangeEvent<HTMLInputElement>) => {
        setIinErrorMessage('');
        setIin(e.target.value.replace(/\s/g, ''));
    };

    const onPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumberErrorMessage('');
        setPhoneNumber(e.target.value.replace(/\D/g, ''));
    };

    const onSendSMS = async () => {
        const iinError = validateIin(iin);
        const phoneNumberError = validatePhoneNumber(phoneNumber);
        if (typeof iinError !== 'string' && typeof phoneNumberError !== 'string') {
            sendSMS({ body: { iin, phoneNumber }, preappId });
            dispatch(setStep(1));
        } else {
            if (typeof iinError === 'string') setIinErrorMessage(iinError);
            if (typeof phoneNumberError === 'string') setPhoneNumberErrorMessage(phoneNumberError);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(setStep(1));
        }
    }, [isSuccess]);

    return (
        <div>
            <Title>Введите Ваши данные</Title>
            <div className={s.field_wrapper}>
                <MaskedInput
                    block
                    label="ИИН"
                    mask={MASKS.iin}
                    placeholder={PLACEHOLDERS.iin}
                    defaultValue={iin}
                    onChange={onIin}
                    fieldClassName={s.field}
                    focusedClassName={s.field}
                    labelClassName={s.label}
                    error={iinErrorMessage}
                />
            </div>
            <div className={s.field_wrapper}>
                <MaskedInput
                    block
                    label="Номер телефона"
                    placeholder={PLACEHOLDERS.phone}
                    mask={MASKS.phone}
                    defaultValue={phoneNumber}
                    onChange={onPhoneNumber}
                    fieldClassName={s.field}
                    focusedClassName={s.field}
                    labelClassName={s.label}
                    error={phoneNumberErrorMessage}
                />
            </div>
            <Agreement
                dataTestId="checkbox-personal-data"
                linkedText="обработку персональных данных"
                title="Я соглашаюсь на "
                linkUrl={`${baseUrl}${preappId}/agreement`}
                checked={agreementChecked}
                check={() => setAgreementChecked(!agreementChecked)}
            />
            <CustomButton block onClick={onSendSMS} disabled={!agreementChecked}>
                Продолжить
            </CustomButton>
        </div>
    );
};
