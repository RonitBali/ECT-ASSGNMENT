import React from 'react';

const Cards = () => {
    const User = {
        name: 'Ronit Bali',
        age: 20,
        country: 'India',
        Roll_no: '1/22/FET/BCS/130'
    };
  
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-slate-500 shadow-lg rounded-2xl p-6 w-80 text-center border border-gray-200 hover:shadow-2xl transition-all">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">User Card</h1>
                <h2 className="text-lg font-semibold text-[#872341]">Name: <span className="text-white">{User.name}</span></h2>
                <h2 className="text-lg font-semibold text-[#872341]">Age: <span className="text-white">{User.age}</span></h2>
                <h2 className="text-lg font-semibold text-[#872341]">Country: <span className="text-white">{User.country}</span></h2>
                <h2 className="text-lg font-semibold text-[#872341]">Roll No: <span className="text-white">{User.Roll_no}</span></h2>
            </div>
        </div>
    );
};

export default Cards;
