import styles from './LinkCard.module.css';
import { MaskedInput } from '@alfalab/core-components/masked-input';
import cn from 'classnames';
import { ChangeEvent, useState } from 'react';
import { Input } from '@alfalab/core-components/input';
import {
    cardNoBinValidate,
    CARD_TYPES,
    cvvValidate,
    dateValidity,
    initialData,
    initialErrors,
    isIncorrectDate,
    nameValidate,
    START_DATE,
} from '../../constants';
import { BANK_NAMES } from 'constants/bankNames';
import { MASKS, PLACEHOLDERS } from '../../../../constants/formConstants';

interface CardBin {
    bin: string;
    bankName: string;
}

export const LinkCard = (): JSX.Element => {
    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState(initialErrors);
    const [bins, setBins] = useState<CardBin[]>();
    const [bankName, setBankName] = useState<string>();

    const { card_name, card_no_bin, exp_month, exp_year, sec_cvv2 } = data;
    const { cardNameError, cardNoBinError, dateError, secCvv2Error } = errors;
    const cardType = CARD_TYPES[data.card_no_bin.charAt(0)] || '';

    const onCardNoBin = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.split(' ').join('');
        setData({ ...data, card_no_bin: value });
        if (cardNoBinValidate(value)) {
            setErrors({ ...errors, cardNoBinError: false });
        }
        if (value.length === 6 || value.length === 8) {
            const bin = bins?.find(({ bin }) => value.includes(bin));
            setBankName(bin?.bankName);
        }
        if (value.length === 0) {
            setBankName('');
        }
    };

    const onBlurCardNoBin = () =>
        !cardNoBinValidate(card_no_bin)
            ? setErrors({ ...errors, cardNoBinError: true })
            : setErrors({ ...errors, cardNoBinError: false });

    const onCardName = (e: ChangeEvent<HTMLInputElement>) => {
        const cardName = e.target.value.replace(/[^a-z\s]+/gi, '');
        setData({ ...data, card_name: cardName });
        if (nameValidate(cardName)) {
            setErrors({ ...errors, cardNameError: false });
        }
    };

    const onBlurCardName = () =>
        !nameValidate(card_name)
            ? setErrors({ ...errors, cardNameError: true })
            : setErrors({ ...errors, cardNameError: false });

    const onDate = (e: ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value.split('/');
        const exp_month = date[0];
        const exp_year = date[1];
        setData({ ...data, exp_month, exp_year });
        if (dateValidity(exp_month, `${START_DATE}${exp_year}`)) {
            setErrors({ ...errors, dateError: false });
        }
    };

    const onBlurDate = () =>
        !dateValidity(exp_month, `${START_DATE}${exp_year}`)
            ? setErrors({ ...errors, dateError: true })
            : setErrors({ ...errors, dateError: false });

    const onCvv = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, sec_cvv2: e.target.value });
        if (cvvValidate(e.target.value)) {
            setErrors({ ...errors, secCvv2Error: false });
        }
    };

    const onBlurCvv = () =>
        !cvvValidate(sec_cvv2)
            ? setErrors({ ...errors, secCvv2Error: true })
            : setErrors({ ...errors, secCvv2Error: false });

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Добавьте карту любого банка</h3>
            <div>
                <div className={cn(styles.input_container, { [styles.error]: cardNoBinError })}>
                    <label className={styles.label}>Номер карты</label>
                    <div>
                        <MaskedInput
                            block
                            fieldClassName={styles.field}
                            inputClassName={styles.input}
                            leftAddons={
                                (cardType || bankName) && (
                                    <div className={styles.bank_icons}>
                                        {cardType}
                                        {bankName && BANK_NAMES[bankName as keyof typeof BANK_NAMES]}
                                    </div>
                                )
                            }
                            mask={MASKS.cardNumber}
                            onBlur={onBlurCardNoBin}
                            onChange={onCardNoBin}
                            placeholder={PLACEHOLDERS.cardNumber}
                            value={card_no_bin}
                        />
                    </div>
                    {cardNoBinError && (
                        <span className={styles.error_text}>Укажите номер карты Казахстанского банка</span>
                    )}
                </div>

                <div className={cn(styles.input_container, { [styles.error]: cardNameError })}>
                    <label className={styles.label}>Имя держателя карты</label>
                    <Input
                        block
                        fieldClassName={styles.field}
                        inputClassName={cn(styles.input, styles.name_input)}
                        onBlur={onBlurCardName}
                        onChange={onCardName}
                        placeholder={PLACEHOLDERS.name}
                        value={card_name}
                    />
                    {cardNameError && <span className={styles.error_text}>Укажите корректное имя</span>}
                </div>

                <div className={styles.flex_container}>
                    <div className={cn(styles.input_container, { [styles.error]: dateError })}>
                        <label className={styles.label}>Срок действия</label>
                        <MaskedInput
                            block
                            fieldClassName={styles.field}
                            inputClassName={styles.input}
                            mask={MASKS.date}
                            onBlur={onBlurDate}
                            onChange={onDate}
                            placeholder={PLACEHOLDERS.date}
                            value={`${exp_month}${exp_year}`}
                        />
                        {dateError && (
                            <span className={styles.error_text}>
                                {isIncorrectDate(exp_month)
                                    ? 'Неверно указана дата'
                                    : 'Срок действия карты должен быть не менее 5 месяцев'}
                            </span>
                        )}
                    </div>

                    <div className={cn(styles.input_container, styles.cvv, { [styles.error]: secCvv2Error })}>
                        <label className={styles.label}>CVC/CVV</label>
                        <MaskedInput
                            block
                            fieldClassName={styles.field}
                            inputClassName={styles.input}
                            mask={MASKS.cvv}
                            onBlur={onBlurCvv}
                            onChange={onCvv}
                            placeholder={PLACEHOLDERS.cvv}
                            value={sec_cvv2}
                        />
                        {secCvv2Error && <span className={styles.error_text}>Неверно указан код</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};
