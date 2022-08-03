import { useEffect, useState } from "react"

export const App = ({preappValues}: {preappValues: any}) => {
  const [data, setData] = useState()
  console.log(preappValues)
  useEffect((
  ) => {
    fetch("preapp", {method: "POST", body: JSON.stringify(preappValues) }).then((res) => console.log(res))
  }, [])
  return <div style={{fontSize: '48px'}}>Hello bnpl</div>
}
