import { Button } from '@alfalab/core-components/button';
import { FC, ReactNode } from 'react';
import cn from 'classnames';
import s from './CustomButton.module.css';

interface Props {
    children: ReactNode;
    block?: boolean;
    disabled?: boolean;
    onClick: () => void;
    isCancel?: boolean;
}

export const CustomButton: FC<Props> = ({ children, isCancel, ...props }) => {
    return (
        <Button className={cn(s.button, { [s.button_cancel]: isCancel })} size="s" view="primary" {...props}>
            <span>{children}</span>
        </Button>
    );
};
