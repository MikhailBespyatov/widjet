import { useEffect, useState } from "react";
import { EnteringData } from './pages/EnteringData';
import { Mq } from '@alfalab/core-components/mq';
import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import './App.css';
import s from './App.module.css';

interface Props {
  preappValues: any,
}

export const App = ({preappValues}: Props) => {
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpen(false);
  }

  useEffect((
  ) => {
    fetch("/bnpl/v2/preapp", {method: "POST", body: JSON.stringify(preappValues) }).then((res) => res.json()).then((data) => console.log(data))
  }, [])

  const getTitle = (title:string) => {
    return <span><span style={{color: "#00A755"}}>{title[0]}</span>{title.slice(1)}</span>
  }

  return <Mq query="--mobile">
              <BottomSheet open={open} onClose={onClose} hasCloser disableOverlayClick title={getTitle("1 / 4")} headerClassName={s.title}>
                <EnteringData />
              </BottomSheet>
          </Mq>
}
