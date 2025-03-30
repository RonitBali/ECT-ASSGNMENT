import React from 'react';
import { Mail, MapPin, Calendar, IdCard } from 'lucide-react'


const Cards = () => {
    const User = {
        name: 'Ronit Bali',
        age: 20,
        country: 'India',
        Roll_no: '1/22/FET/BCS/130'
    };
  
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="bg-white rounded-xl p-8 w-96 shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="relative">
                    {/* Avatar */}
                    <div className="w-24 h-24 mx-auto mb-4">
                        <img
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${User.name}`}
                            alt="Profile"
                            className="w-full h-full rounded-full border-4 border-purple-500"
                        />
                    </div>
                    
                    {/* Name */}
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        {User.name}
                    </h1>
                </div>

                {/* Details */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <Calendar className="w-5 h-5 text-purple-500" />
                        <div>
                            <p className="text-sm text-gray-500">Age</p>
                            <p className="font-medium text-gray-700">{User.age} years</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <MapPin className="w-5 h-5 text-purple-500" />
                        <div>
                            <p className="text-sm text-gray-500">Country</p>
                            <p className="font-medium text-gray-700">{User.country}</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <IdCard className="w-5 h-5 text-purple-500" />
                        <div>
                            <p className="text-sm text-gray-500">Roll Number</p>
                            <p className="font-medium text-gray-700">{User.Roll_no}</p>
                        </div>
                    </div>
                </div>

                {/* Contact Button */}
                <button className="mt-6 w-full bg-purple-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>Contact Me</span>
                </button>
            </div>
        </div>
    );
};

export default Cards;