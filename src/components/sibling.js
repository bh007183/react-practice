
import React, {  useContext } from "react";
import { Context } from "../contexts";


export default function Sibling() {
    const { color, setColor } = useContext(Context);
    const style = {
        background: color,
        height: 500
    }
    return (
        <div style={style}>
            
        </div>
    )
}
