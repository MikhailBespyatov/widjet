import { Input } from '@alfalab/core-components/input';
import Agreement from 'components/Agreement/Agreement';
import s from './EnteringData.module.css';
import { Button } from '@alfalab/core-components/button';

export const EnteringData = () => {
  return (<div>
              <h1>Введите Ваши данные</h1>
              <Input block label="ИИН" type="number" fieldClassName={s.field} focusedClassName={s.field} labelClassName={s.label}/>
              <Input block label="Номер телефона" type="number" fieldClassName={s.field} focusedClassName={s.field} labelClassName={s.label}/>
              <Agreement
                            dataTestId="checkbox-personal-data"
                            linkedText="обработку персональных данных"
                            title="Я соглашаюсь на "
                        />
              <Button view="primary" block className={s.button}>Продолжить</Button>
          </div>)
}
