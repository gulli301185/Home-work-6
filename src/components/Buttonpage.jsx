import { useState } from "react"


function Buttonpage(){
    let [count, setCount]=useState(0);

    let minus=()=>{
        if (count>0){
            setCount(count-1)
        }
    }
    return(
        <div >
            <div className="number">{count}</div>
        <button className="changeButton" onClick={()=>setCount(count+1)}>increase</button>
        <button className="changeButton" onClick={minus}>decrease</button>
        </div>
    )
}
export default Buttonpage