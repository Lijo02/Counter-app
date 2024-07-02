import { useState } from "react";

function App() {
  const[count,setcount]=useState(0)
  const increase=()=>{
    setcount(count<10?count+1:count)
    console.log(count);
  }
  const decrease=()=>{
    setcount(count>0?count-1:count)
    console.log(count);
  }
  const reset=()=>{
    setcount(0)
    console.log(count);
  }
  return (
    <div className="h-screen bg-cyan-600 flex flex-col justify-center items-center gap-3">
      <div>
      <h1 className="text-2xl border border-black px-3 py-1 text-white bg-black flex item-center justufy-center">{count}</h1>
      </div>
    <div>
    <button onClick={increase} className="border border-1 border-black text-lg px-3 py-2 bg-orange-400 h-10">Increment</button>
      <button onClick={decrease} className="border border-1 border-black text-lg px-3 py-2 bg-orange-400 h-10">Decrement</button>
      <button onClick={reset} className="border border-1 border-black text-lg px-3 py-2 bg-orange-400 h-10">Reset</button>
    </div>
    </div>
  );
}

export default App;