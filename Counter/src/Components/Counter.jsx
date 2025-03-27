import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">Counter</h1>
                <h2 className="text-4xl font-semibold text-blue-500 mb-4">{count}</h2>
                <div className="flex justify-center space-x-3">
                    <button 
                        onClick={increment} 
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                        +
                    </button>
                    <button 
                        onClick={decrement} 
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                        -
                    </button>
                    <button 
                        onClick={reset} 
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
