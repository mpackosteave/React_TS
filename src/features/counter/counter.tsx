import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { decrement, increment, incrementByAmout } from "./counterSlice";
import { useRef, useState } from "react";

function Counter() {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
    const input =  useRef<HTMLInputElement>(null)
    const [value , setValue] = useState(0)

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-5">
      <h2 className="text-xl font-bold text-gray-800 text-center">
        Compteur : <span className="text-blue-600">{count}</span>
      </h2>
      <div className="flex gap-3">
        <button onClick={() => dispatch(increment())} className="flex-1 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-150">
          +1
        </button>

        <button onClick={() => dispatch(decrement())} className="flex-1 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 active:scale-95 transition-all duration-150">
          -1
        </button>

        <button className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 active:scale-95 transition-all duration-150">
          Réinitialiser
        </button>
      </div>
      ​
      <div className="flex gap-3">
        <input
          type="number"
          ref={input}
          onChange={(e) => setValue(Number(e.target.value))}
          className="flex-1 py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <button onClick={() => dispatch(incrementByAmout(Number(value)))} className="py-2 px-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 active:scale-95 transition-all duration-150">
          Ajouter
        </button>
      </div>
    </div>
  );
}
export default Counter;
