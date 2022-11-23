import { createContext } from 'react';

export const AppContext = createContext({
    preappId: '',
    onClose: () => {},
    partnerName: '',
    onEnd: () => {},
});
