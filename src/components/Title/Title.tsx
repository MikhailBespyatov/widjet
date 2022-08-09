import { FC, ReactNode } from 'react';
import s from './Title.module.css';

export const Title: FC<{ children: ReactNode }> = ({ children }) => {
    return <h1 className={s.title}>{children}</h1>;
};
