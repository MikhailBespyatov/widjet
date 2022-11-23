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
    const [scoringData, setScoringData] = useState<any>({});
    const { description, icon, percent } = activeConfig;
    const dispatch = useDispatch();
    const { onClose, preappId } = useContext(AppContext);
    const queryOptions =
        scoringData?.code !== 109 || scoringData.code === undefined ? { pollingInterval: 2000 } : undefined;
    const { data, isFetching: isStatusLoading } = useGetStatusQuery(preappId, queryOptions);

    const timeoutId = setTimeout(() => {
        setScoringStep(scoringStep + 1);
    }, 30000);

    if (scoringStep === 3) {
        clearTimeout(timeoutId);
    }

    useEffect(() => {
        setScoringData(data);
    }, [scoringData]);

    return (
        <div className={s.wrapper}>
            <div className={s.iconWrapper}>{icon}</div>
            <Title>Это займёт 30 секунд</Title>
            <p className={s.description}>{description}</p>
            <div className={s.loader_wrapper}>
                <div className={s.loader}>
                    {Array(12)
                        .fill('')
                        .map((_, i) => (
                            <div key={i}></div>
                        ))}
                </div>
                <span className={s.progress_percent}>{percent}</span>
            </div>
            <div className={s.buttonWrapper}>
                <CustomButton block onClick={onClose}>
                    Вернуться в магазин
                </CustomButton>
            </div>
        </div>
    );
};
