import { CustomButton } from 'components/CustomButton';
import { Title } from 'components/Title';
import { useEffect, useState } from 'react';
import { SCORING_STEPS_CONFIG } from './constants';
import s from './Scoring.module.css';

export const Scoring = () => {
    const [scoringStep, setScoringStep] = useState(0);
    const activeConfig = SCORING_STEPS_CONFIG[scoringStep];
    const { description, icon, progressIcon } = activeConfig;

    const timeoutId = setTimeout(() => {
        setScoringStep(scoringStep + 1);
    }, 2000);

    if (scoringStep === 3) clearTimeout(timeoutId);

    return (
        <div className={s.wrapper}>
            {icon}
            <Title>Это займёт 30 секунд</Title>
            <p className={s.description}>{description}</p>
            <div className={s.progress_icon_wrapper}>{progressIcon}</div>
            <CustomButton block onClick={() => {}}>
                Вернуться в магазин
            </CustomButton>
        </div>
    );
};
