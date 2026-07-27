import React, { useState } from 'react'

const Effects = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}> Change</button>
    </div>
  )
}

export default Effects