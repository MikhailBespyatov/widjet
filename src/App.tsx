import { useEffect, useState } from "react"

export const App = ({preappValues}: {preappValues: any}) => {
  const [data, setData] = useState()
  console.log(preappValues)
  const baseUrl = process.env.NODE_ENV === 'development' ? '/proxy/' : '/bnpl/';
  useEffect((
  ) => {
    fetch("/bnpl/preapp", {method: "POST", body: JSON.stringify(preappValues) }).then((res) => console.log(res))
  }, [])
  return <div style={{fontSize: '48px'}}>Hello bnpl</div>
}
