import { App } from './App';
import { createRoot, Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';

let root: Root | null = null;

export const render = (preappValues: any) => {
    root = createRoot(document.getElementById('bnpl-root')!);
    root.render(
        <Provider store={store}>
            <App preappValues={preappValues} />
        </Provider>,
    );
};

export const unmount = () => {
    root?.unmount();
};
