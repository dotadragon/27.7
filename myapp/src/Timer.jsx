import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        setInterval(()=>
            setCount((prev)=>prev+1)
        ,1000)  
        },
        []
    )
  return (
    <div>

    </div>
  )
}

export default Timer