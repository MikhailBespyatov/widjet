import { CustomButton } from 'components/CustomButton';
import { Title } from 'components/Title';
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppContext } from '../../context/AppContext';
import { useGetStatusQuery } from '../../services/baseAPI';
import { setStep } from '../../store/reducers/stepSlice';
import { SCORING_STEPS_CONFIG } from './constants';
import s from './Scoring.module.css';

export const Scoring = () => {
    const [scoringStep, setScoringStep] = useState(0);
    const activeConfig = SCORING_STEPS_CONFIG[scoringStep];
    const { description, icon, progressIcon } = activeConfig;
    const dispatch = useDispatch();
    const { onClose, preappId } = useContext(AppContext);
    // const { data, isFetching: isStatusLoading } = useGetStatusQuery(preappId, { refetchOnMountOrArgChange: true });
    // console.log(data);

    const timeoutId = setTimeout(() => {
        setScoringStep(scoringStep + 1);
    }, 5000);

    if (scoringStep === 3) {
        clearTimeout(timeoutId);
        dispatch(setStep(3));
    }

    return (
        <div className={s.wrapper}>
            {icon}
            <Title>Это займёт 30 секунд</Title>
            <p className={s.description}>{description}</p>
            <div className={s.progress_icon_wrapper}>{progressIcon}</div>
            <div className={s.buttonWrapper}>
                <CustomButton block onClick={onClose}>
                    Вернуться в магазин
                </CustomButton>
            </div>
        </div>
    );
};
