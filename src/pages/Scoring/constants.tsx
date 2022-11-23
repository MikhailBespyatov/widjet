import { FirstIcon } from 'components/Icons/ScoringIcons/FirstIcon';
import { SecondIcon } from 'components/Icons/ScoringIcons/SecondIcon';
import { ThirdIcon } from 'components/Icons/ScoringIcons/ThirdIcon';
import { FourthIcon } from 'components/Icons/ScoringIcons/FourthIcon';

export const SCORING_STEPS_CONFIG = [
    {
        description: 'Ищем данные',
        icon: <FirstIcon />,
        percent: '25%',
    },
    {
        description: 'Запускаем наши алгоритмы',
        icon: <SecondIcon />,
        percent: '50%',
    },
    {
        description: 'Проверяем кредитную историю',
        icon: <ThirdIcon />,
        percent: '75%',
    },
    {
        description: 'Сверяемся с магазином',
        icon: <FourthIcon />,
        percent: '100%',
    },
];
