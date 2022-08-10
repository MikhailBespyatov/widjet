import { Button } from '@alfalab/core-components/button';
import { FC, ReactNode } from 'react';
import s from './CustomButton.module.css';

interface Props {
    children: ReactNode;
    block?: boolean;
    disabled?: boolean;
    onClick: () => void;
}

export const CustomButton: FC<Props> = ({ children, ...props }) => {
    return (
        <Button className={s.button} size="s" view="primary" {...props}>
            {children}
        </Button>
    );
};
