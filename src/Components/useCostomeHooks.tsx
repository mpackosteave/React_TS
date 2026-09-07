import { useState } from "react";

function useCompteur({ initialValue = 0, i = 1, y = 1 }: { initialValue?: number, i: number, y: number }) {
    const [count, setCount] = useState(initialValue);

    return{
        count,
        increment:()=>setCount(count + i),
        decrement:()=>setCount(count - y),
        reset:()=>setCount(initialValue)
    }
}

function Costom() {
    const { count, increment, decrement, reset } = useCompteur({ initialValue: 5, i: 5, y: 10 })

    return (
        <div className="flex flex-col items-center justify-between">
            <h1 className="p-2">compteur:{count}</h1>
            <button className="p-2 rounded-sm bg-green-600" onClick={increment}>+</button>
            <button className="p-2 rounded-sm bg-red-600" onClick={decrement}>-</button>
            <button className="p-2 rounded-sm bg-yellow-600" onClick={reset}>Reset</button>
        </div>
    );
}

export default Costom;
