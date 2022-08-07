import { MaskedInput } from '@alfalab/core-components/masked-input';
import Agreement from 'components/Agreement/Agreement';
import s from './EnteringData.module.css';
import { Button } from '@alfalab/core-components/button';
import { MASKS, PLACEHOLDERS } from 'constants/formConstants';
import { ChangeEvent, useState } from 'react';
import { baseUrl, preappId } from 'constants/urls';

export const EnteringData = () => {
  const [iin, setIin] = useState('');
  const [number, setNumber] = useState('');

  const onIin = (e: ChangeEvent<HTMLInputElement>) => {
    setIin(e.target.value);
  }

  const onNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value)
  }

  return (<div>
              <h1>Введите Ваши данные</h1>
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
                />
              <MaskedInput
                block
                label="Номер телефона"
                placeholder={PLACEHOLDERS.phone}
                mask={MASKS.phone}
                defaultValue={number}
                onChange={onNumber}
                fieldClassName={s.field}
                focusedClassName={s.field}
                labelClassName={s.label}
              />
              <Agreement
                dataTestId="checkbox-personal-data"
                linkedText="обработку персональных данных"
                title="Я соглашаюсь на "
                linkUrl={`${baseUrl}${preappId}/agreement`}
              />
              <Button view="primary" block className={s.button}>Продолжить</Button>
          </div>)
}
