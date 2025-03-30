import React, { useState } from "react";
import { Sparkles, RotateCcw, DollarSign } from 'lucide-react';

const symbols = ["🍒", "🍋", "🍊", "🍉", "⭐", "🔔"];
const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

const Slotmachine = () => {
  const [slots, setSlots] = useState(Array(3).fill("❓"));
  const [message, setMessage] = useState("Place Your Bet!");
  const [isSpinning, setIsSpinning] = useState(false);
  const [coins, setCoins] = useState(100);

  const spin = () => {
    if (isSpinning || coins < 10) return;
    
    setCoins(prev => prev - 10);
    setIsSpinning(true);
    setMessage("🎲 Spinning...");

    // Create spinning animation effect
    const spinDuration = 2000;
    const intervalDuration = 100;
    const intervals = spinDuration / intervalDuration;
    let count = 0;

    const spinInterval = setInterval(() => {
      setSlots(Array.from({ length: 3 }, getRandomSymbol));
      count++;

      if (count >= intervals) {
        clearInterval(spinInterval);
        const finalSlots = Array.from({ length: 3 }, getRandomSymbol);
        setSlots(finalSlots);
        setIsSpinning(false);

        // Check win condition
        if (finalSlots.every(s => s === finalSlots[0])) {
          setMessage("🎉 JACKPOT! +50 COINS! 🎉");
          setCoins(prev => prev + 50);
        } else if (finalSlots[0] === finalSlots[1] || finalSlots[1] === finalSlots[2]) {
          setMessage("🎈 Small Win! +20 COINS! 🎈");
          setCoins(prev => prev + 20);
        } else {
          setMessage("Try again! -10 COINS");
        }
      }
    }, intervalDuration);
  };

  const resetGame = () => {
    setCoins(100);
    setSlots(Array(3).fill("❓"));
    setMessage("Place Your Bet!");
    setIsSpinning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-red-900 to-purple-900 flex flex-col items-center justify-center p-4">
      {/* Title Card */}
      <div className="bg-red-100/30 backdrop-blur-sm rounded-xl p-4 mb-6 text-center">
        <h1 className="text-2xl font-bold text-white">Ronit Bali</h1>
        <p className="text-white text-sm">1/22/FET/BCS/130</p>
      </div>

      {/* Main Game Container */}
      <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 w-full max-w-md border-2 border-yellow-500/30">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 text-transparent bg-clip-text">
              Lucky Slots
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-yellow-400/10 px-4 py-2 rounded-full">
            <DollarSign className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold">{coins}</span>
          </div>
        </div>

        {/* Slots Display */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 mb-6">
          <div className="flex justify-around items-center">
            {slots.map((symbol, index) => (
              <div
                key={index}
                className={`text-7xl transition-all duration-100 ${
                  isSpinning ? 'animate-bounce' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {symbol}
              </div>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="text-center mb-6">
          <p className="text-white text-lg font-medium">{message}</p>
        </div>

        {/* Controls */}
        <div className="flex gap-4">
          <button
            onClick={resetGame}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
          <button
            onClick={spin}
            disabled={isSpinning || coins < 10}
            className={`flex-1 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 
              ${isSpinning || coins < 10
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white hover:from-yellow-500 hover:to-yellow-700'
              }`}
          >
            SPIN (10 COINS)
          </button>
        </div>

        {/* Game Over */}
        {coins < 10 && (
          <div className="mt-6 text-center">
            <p className="text-red-400 font-medium">Game Over! Click Reset to try again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slotmachine;