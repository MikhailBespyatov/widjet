import { useState } from 'react';
import { Mq } from '@alfalab/core-components/mq';
import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import './App.css';
import s from './App.module.css';
import { useGetPreappIdQuery } from 'services/baseAPI';
import { PreappIdContext } from 'context/PreappIdContext';
import { useSelector } from 'react-redux';
import { STEPS } from 'constants/steps';
import { RootState } from 'store/store';

interface Props {
    preappValues: any;
}

export const App = ({ preappValues }: Props) => {
    const [open, setOpen] = useState(true);
    const { data: preappIdData } = useGetPreappIdQuery(preappValues);
    const preappId = preappIdData?.data.preappId;
    const step = useSelector((state: RootState) => state.step.step);

    const onClose = () => {
        setOpen(false);
    };

    const getTitle = (title: string) => {
        return (
            <span>
                <span style={{ color: '#00A755' }}>{title[0]}</span>
                {title.slice(1)}
            </span>
        );
    };

    return (
        <PreappIdContext.Provider value={preappId as string}>
            <Mq query="--mobile">
                <BottomSheet
                    open={open}
                    onClose={onClose}
                    hasCloser
                    disableOverlayClick
                    title={getTitle(`${step + 1} / 4`)}
                    headerClassName={s.title}
                >
                    {STEPS[step]}
                </BottomSheet>
            </Mq>
        </PreappIdContext.Provider>
    );
};
