import {App} from './App';
import { createRoot, Root } from 'react-dom/client';

let root = createRoot(document.getElementById('bnpl-root')!);;

export const render = (message: string) => {
  if (root) {
    root = createRoot(document.getElementById('bnpl-root')!);
  }
  root.render(
    <App message={message}/>
  )
};

export const unmount = () => {
  root.unmount();
};
