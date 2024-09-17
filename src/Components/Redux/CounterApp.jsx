import React, { useState } from 'react';
import { increment, decrement, incrementByAmount, decrementByAmount } from './counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function CounterApp() {
    const [amount, setAmount] = useState(0);

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>CounterApp</h1>

            <button
                onClick={() => {
                    dispatch(increment())
                }}
            >Increment</button>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    dispatch(decrement())
                }}
            >Decrement</button>
            <br />
            <input type="number" name="" value={amount} onChange={(e) => { setAmount(e.target.value) }} id="" />
            <button
                onClick={() => {
                    dispatch(incrementByAmount(Number(amount)))
                }}
            >Add Amount</button>
            <button
                onClick={() => {
                    dispatch(decrementByAmount(Number(amount)))
                }}
            >Less Amount</button>
        </div>
    )
}
