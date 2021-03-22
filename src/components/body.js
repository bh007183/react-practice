import React, {useEffect, useContext} from 'react'

import { Context } from "../contexts";

export default function Body() {
    const { color, setColor } = useContext(Context);


  const style ={
      background: color,
      height: 400
  }
  useEffect(() => {
      setColor("black")
  }, [])

    return (
        <div style={style}>
            
        </div>
    )
}
