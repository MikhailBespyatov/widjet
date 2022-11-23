import { App } from './App';
import { createRoot, Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ErrorBoundary } from './components/ErrorBoundary';

export interface Callbaks {
    onLoad: () => void;
    onError: () => void;
    onClosed: () => void;
    onEnd: () => void;
}

export interface PreappValues {
    preappId: string;
    redirectLink: string;
}

export class CPO {
    callbacks: Callbaks;
    rootId: string | undefined;
    root: Root | null;

    constructor(callbacks: Callbaks, rootId: string | undefined) {
        this.callbacks = callbacks;
        this.rootId = rootId;
        this.root = null;
    }

    render(preappValues: PreappValues) {
        this.root = createRoot(document.getElementById(this.rootId || 'bnplKz-root')!);
        this.root.render(
            <Provider store={store}>
                <ErrorBoundary onError={this.callbacks.onError}>
                    <App preappValues={preappValues} callbacks={this.callbacks} destroy={this.unmount} />
                </ErrorBoundary>
            </Provider>,
        );
    }

    unmount = () => {
        this.root?.unmount();
    };
}

// let root: Root | null = null;

// export const render = (preappValues: any, rootId: string | undefined) => {
//     root = createRoot(document.getElementById(rootId || 'bnpl-root')!);
//     root.render(
//         <Provider store={store}>
//             <App preappValues={preappValues} />
//         </Provider>,
//     );
// };

// export const unmount = () => {
//     root?.unmount();
// };
