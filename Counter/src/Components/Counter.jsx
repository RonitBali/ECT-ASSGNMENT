import React, { useState } from 'react';
import { Plus, Minus, RotateCcw, Activity } from 'lucide-react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 w-96 shadow-2xl hover:shadow-3xl transition-all duration-300">
                {/* Header */}
                <div className="flex items-center justify-center space-x-2 mb-8">
                    <Activity className="w-6 h-6 text-purple-500 animate-pulse" />
                    <h1 className="text-2xl font-bold text-gray-800">Interactive Counter</h1>
                </div>

                {/* Counter Display */}
                <div className="relative mb-10">
                    <div className="absolute inset-0 bg-purple-100 rounded-xl -rotate-3"></div>
                    <div className="relative bg-white rounded-xl p-6 shadow-sm">
                        <p className="text-sm text-purple-500 mb-1">Current Value</p>
                        <div className="text-6xl font-bold text-gray-800 tabular-nums">
                            {count}
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-3 gap-4">
                    <button 
                        onClick={decrement}
                        className="flex items-center justify-center space-x-2 bg-red-500 hover:bg-red-600 text-white p-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                        <Minus className="w-6 h-6" />
                    </button>

                    <button 
                        onClick={reset}
                        className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-800 text-white p-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                        <RotateCcw className="w-6 h-6" />
                    </button>

                    <button 
                        onClick={increment}
                        className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                        <Plus className="w-6 h-6" />
                    </button>
                </div>

                {/* Status */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        {count === 0 ? (
                            "Let's start counting!"
                        ) : count > 0 ? (
                            "Going up! 📈"
                        ) : (
                            "Going down! 📉"
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Counter;