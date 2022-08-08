import { App } from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';

let root = createRoot(document.getElementById('bnpl-root')!);

export const render = (preappValues: any) => {
    if (root) {
        root = createRoot(document.getElementById('bnpl-root')!);
    }
    root.render(
        <Provider store={store}>
            <App preappValues={preappValues} />
        </Provider>,
    );
};

export const unmount = () => {
    root.unmount();
};
