import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    // if()
    console.log(window.location.href);
  }, [])

  return (
    <>
      <h1>test</h1>
    </>
  )
}

export default App
