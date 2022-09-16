import { useEffect, useState } from 'react';
import { Mq } from '@alfalab/core-components/mq';
import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import './App.css';
import s from './App.module.css';
import { useGetPreappIdQuery, useGetStatusQuery } from 'services/baseAPI';
import { useSelector } from 'react-redux';
import { STEPS } from 'constants/steps';
import { RootState } from 'store/store';
import { unmount } from '.';
import { AppContext } from './context/AppContext';
import { Loader } from './components/Loader';
import { ErrorPage } from './pages/ErrorPage';
import { Modal } from './components/Modal';

interface Props {
    preappValues: any;
}

export const App = ({ preappValues }: Props) => {
    const [open, setOpen] = useState(true);
    const { data: preappIdData, isFetching: isPreappIdLoading } = useGetPreappIdQuery(preappValues);
    const step = useSelector((state: RootState) => state.step.step);
    const preappId = preappIdData?.data.preappId;
    const { isFetching: isStatusLoading } = useGetStatusQuery(preappId, {
        skip: Boolean(!preappId),
        refetchOnMountOrArgChange: true,
    });
    const loading = isPreappIdLoading || isStatusLoading;
    const isError = useSelector((state: RootState) => state.error.isError);

    const onClose = () => {
        setOpen(false);
    };

    const title = (
        <span>
            <span style={{ color: '#00A755' }}>{step + 1}</span>
            {' / 4'}
        </span>
    );

    useEffect(() => {
        if (!open) {
            setTimeout(() => unmount(), 300);
        }
    }, [open]);

    return (
        <AppContext.Provider value={{ preappId: preappId as string, onClose }}>
            <Mq query="--desktop">
                <Modal open={open} onClose={onClose} stepNumber={title}>
                    {isError ? <ErrorPage /> : STEPS[step]}
                    <Loader isVisible={loading} />
                </Modal>
            </Mq>
            <Mq query="--tablet">
                <Modal open={open} onClose={onClose} stepNumber={title}>
                    {isError ? <ErrorPage /> : STEPS[step]}
                    <Loader isVisible={loading} />
                </Modal>
            </Mq>
            <Mq query="--mobile">
                <BottomSheet
                    open={open}
                    onClose={onClose}
                    hasCloser
                    disableOverlayClick
                    title={title}
                    headerClassName={s.title}
                >
                    {isError ? <ErrorPage /> : STEPS[step]}
                    <Loader isVisible={loading} />
                </BottomSheet>
            </Mq>
        </AppContext.Provider>
    );
};
