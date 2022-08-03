import {App} from './App';
import { createRoot, Root } from 'react-dom/client';

let root = createRoot(document.getElementById('bnpl-root')!);;

export const render = (preappValues: any) => {
  if (root) {
    root = createRoot(document.getElementById('bnpl-root')!);
  }
  root.render(
    <App preappValues={preappValues}/>
  )
};

export const unmount = () => {
  root.unmount();
};
