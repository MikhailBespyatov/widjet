import { MaskedInput } from '@alfalab/core-components/masked-input';
import Agreement from 'components/Agreement/Agreement';
import s from './EnteringData.module.css';
import { Button } from '@alfalab/core-components/button';
import { MASKS, PLACEHOLDERS } from 'constants/formConstants';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { baseUrl } from 'constants/urls';
import { useGetStatusQuery, useSendSMSMutation } from 'services/baseAPI';
import { validateIin, validatePhoneNumber } from 'helpers/validationFunctions';
import { useDispatch } from 'react-redux';
import { setStep } from 'store/reducers/stepSlice';
import { Title } from 'components/Title';
import { CustomButton } from 'components/CustomButton';
import { AppContext } from '../../context/AppContext';
import { Loader } from '../../components/Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setIin, setPhoneNumber } from '../../store/reducers/personalData';
import { enteringDataErrorCode } from '../../constants/validationErrorCode';

export const EnteringData = () => {
    const [title, setTitle] = useState(<Title>Введите Ваши данные</Title>);
    const { iin, phoneNumber } = useSelector((state: RootState) => state.personalData);
    const { preappId } = useContext(AppContext);
    const [sendSMS, { isSuccess, isLoading }] = useSendSMSMutation();
    const [iinErrorMessage, setIinErrorMessage] = useState('');
    const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('');
    const [agreementChecked, setAgreementChecked] = useState(false);
    const errorCode = useSelector((state: RootState) => state.error.errorCode);
    const dispatch = useDispatch();

    const onIin = (e: ChangeEvent<HTMLInputElement>) => {
        setIinErrorMessage('');
        dispatch(setIin(e.target.value.replace(/\s/g, '')));
    };

    const onPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumberErrorMessage('');
        dispatch(setPhoneNumber(e.target.value.replace(/\D/g, '')));
    };

    const onSendSMS = async () => {
        const iinError = validateIin(iin);
        const phoneNumberError = validatePhoneNumber(phoneNumber);
        if (typeof iinError !== 'string' && typeof phoneNumberError !== 'string') {
            sendSMS({ body: { iin, phoneNumber }, preappId });
        } else {
            if (typeof iinError === 'string') setIinErrorMessage(iinError);
            if (typeof phoneNumberError === 'string') setPhoneNumberErrorMessage(phoneNumberError);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(setStep(1));
        }
        if (enteringDataErrorCode.includes(errorCode)) {
            setTitle(<Title>Ваш номер не совпадает с зарегистрированным ИИН</Title>);
        }
    }, [isSuccess]);

    return (
        <div>
            {title}
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
                linkUrl={`${baseUrl}/api/bnpl/${preappId}/agreement`}
                checked={agreementChecked}
                check={() => setAgreementChecked(!agreementChecked)}
            />
            <div className={s.buttonWrapper}>
                <CustomButton block onClick={onSendSMS} disabled={!agreementChecked}>
                    {!agreementChecked ? 'Оформить' : 'Продолжить'}
                </CustomButton>
            </div>
            <Loader isVisible={isLoading} />
        </div>
    );
};
