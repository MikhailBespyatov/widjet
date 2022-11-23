import { useEffect, useState } from 'react';
import { Mq } from '@alfalab/core-components/mq';
import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import './App.css';
import s from './App.module.css';
import { useGetStatusQuery } from 'services/baseAPI';
import { useSelector } from 'react-redux';
import { STEPS } from 'constants/steps';
import { RootState } from 'store/store';
import { AppContext } from './context/AppContext';
import { ErrorPage } from './pages/ErrorPage';
import { Modal } from './components/Modal';
import { Callbaks, PreappValues } from './index';
import { Duplicate } from './pages/Duplicate';
import { Loader } from './components/Loader';

interface Props {
    preappValues: PreappValues;
    callbacks: Callbaks;
    destroy: () => void;
}

export const App = ({ preappValues: { preappId, redirectLink }, callbacks, destroy }: Props) => {
    const [open, setOpen] = useState(true);
    const duplicatePreappId = useSelector((state: RootState) => state.duplicatePreappId.duplicatePreappId);
    const [isDuplicate, setIsDuplicate] = useState(Boolean(duplicatePreappId));

    const step = useSelector((state: RootState) => state.step.step);
    const { data: statusData, isLoading: isStatusLoading } = useGetStatusQuery(preappId, {
        refetchOnMountOrArgChange: true,
    });
    const isError = useSelector((state: RootState) => state.error.isError);

    const onClose = () => {
        setOpen(false);
        callbacks.onClosed();
    };

    const onEnd = () => {
        setOpen(false);
        callbacks.onEnd();
    };

    const clearDuplicate = () => {
        setIsDuplicate(false);
    };

    const title = (
        <span>
            <span style={{ color: '#00A755' }}>{step === 4 ? 4 : step + 1}</span>
            {' / 4'}
        </span>
    );

    const Component = isError ? (
        <ErrorPage />
    ) : isDuplicate ? (
        <Duplicate clearDuplicate={clearDuplicate} />
    ) : (
        STEPS[step]
    );

    useEffect(() => {
        const queryParams = new URLSearchParams(redirectLink);
        const haveDuplicateParam = (queryParams?.get('duplicate') as string) === 'true';
        if (haveDuplicateParam) {
            setIsDuplicate(true);
        }
    }, [redirectLink]);

    useEffect(() => {
        if (!open) {
            setTimeout(() => destroy(), 300);
        }
        if (open && !isStatusLoading) {
            callbacks.onLoad();
        }
    }, [open, isStatusLoading]);

    return (
        <AppContext.Provider
            value={{
                preappId: preappId as string,
                onClose,
                onEnd,
                partnerName: statusData?.data.partnerData.partnerName,
            }}
        >
            <div className="bnplBody">
                <Mq query="--desktop">
                    <Modal open={open} onClose={onClose} stepNumber={title}>
                        {Component}
                        <Loader isVisible={isStatusLoading} />
                    </Modal>
                </Mq>
                <Mq query="--tablet">
                    <Modal open={open} onClose={onClose} stepNumber={title}>
                        {Component}
                        <Loader isVisible={isStatusLoading} />
                    </Modal>
                </Mq>
                <Mq query="--mobile">
                    <BottomSheet
                        contentClassName={s.bnplContentMobile}
                        open={open}
                        onClose={onClose}
                        hasCloser
                        disableOverlayClick
                        title={title}
                        headerClassName={s.title}
                        zIndex={100000}
                    >
                        {Component}
                        <Loader isVisible={isStatusLoading} />
                    </BottomSheet>
                </Mq>
            </div>
        </AppContext.Provider>
    );
};
