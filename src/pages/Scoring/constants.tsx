import { FirstIcon } from 'components/Icons/ScoringIcons/FirstIcon';
import { SecondIcon } from 'components/Icons/ScoringIcons/SecondIcon';
import { ThirdIcon } from 'components/Icons/ScoringIcons/ThirdIcon';
import { FourthIcon } from 'components/Icons/ScoringIcons/FourthIcon';
import { Fifty } from 'components/Icons/ScoringProgressIcons/Fifty';
import { TwentyFive } from 'components/Icons/ScoringProgressIcons/TwentyFive';
import { OneHundred } from 'components/Icons/ScoringProgressIcons/OneHundred';
import { SeventyFive } from 'components/Icons/ScoringProgressIcons/SeventyFive';

export const SCORING_STEPS_CONFIG = [
    {
        description: 'Ищем данные',
        icon: <FirstIcon />,
        progressIcon: <TwentyFive />,
    },
    {
        description: 'Запускаем наши алгоритмы',
        icon: <SecondIcon />,
        progressIcon: <Fifty />,
    },
    {
        description: 'Проверяем кредитную историю',
        icon: <ThirdIcon />,
        progressIcon: <SeventyFive />,
    },
    {
        description: 'Сверяемся с магазином',
        icon: <FourthIcon />,
        progressIcon: <OneHundred />,
    },
];
