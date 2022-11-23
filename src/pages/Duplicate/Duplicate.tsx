import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../../components/CustomButton';
import { DuplicateIcon } from '../../components/Icons/DuplicateIcon';
import { Loader } from '../../components/Loader';
import { Title } from '../../components/Title';
import { AppContext } from '../../context/AppContext';
import { useDuplicateMutation, useLazyGetStatusQuery, useProceedMutation } from '../../services/baseAPI';
import { setDuplicatePreappId } from '../../store/reducers/duplicatedPreappId';
import { setStep } from '../../store/reducers/stepSlice';
import s from './Duplicate.module.css';

interface Props {
    clearDuplicate: () => void;
}

export const Duplicate = ({ clearDuplicate }: Props) => {
    const { preappId } = useContext(AppContext);

    const [duplicate, { isLoading: isDuplicateLoading }] = useDuplicateMutation();
    const [proceed, { isLoading: isProceedLoading }] = useProceedMutation();
    const dispatch = useDispatch();
    const isLoading = isDuplicateLoading || isProceedLoading;

    const onStartNew = () => {
        duplicate(preappId).then((res) => {
            const newPreappId = res.data.data.redirectLink.split('?')[1].split('&')[0].split('=')[1];

            if (newPreappId) {
                dispatch(setDuplicatePreappId(newPreappId));
                dispatch(setStep(0));
                clearDuplicate();
            }
        });
    };

    const onContinue = async () => {
        await proceed(preappId);
        clearDuplicate();
    };

    return (
        <div className={s.wrapper}>
            <DuplicateIcon className={s.icon} />
            <Title>
                У Вас есть активная заявка. <br></br>Хотите продолжить или начать новую?
            </Title>
            <div className={s.buttons_group}>
                <CustomButton block isCancel onClick={onStartNew}>
                    Начать новую
                </CustomButton>
                <CustomButton block onClick={onContinue}>
                    Продолжить
                </CustomButton>
            </div>
            <Loader isVisible={isLoading} />
        </div>
    );
};
