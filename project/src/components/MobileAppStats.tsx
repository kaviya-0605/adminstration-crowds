import React from 'react';
import { 
  Calendar, 
  Car, 
  Home, 
  Coffee, 
  Heart,
  TrendingUp,
  Users
} from 'lucide-react';

interface Stat {
  label: string;
  value: number;
  change: number;
  icon: React.ReactNode;
  color: string;
}

interface MobileAppStatsProps {
  stats: Stat[];
}

export default function MobileAppStats({ stats }: MobileAppStatsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Mobile App Statistics</h3>
        <div className="flex items-center space-x-1 text-sm text-green-600">
          <TrendingUp className="w-4 h-4" />
          <span>Live Data</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-lg ${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${
                stat.change >= 0 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {stat.change >= 0 ? '+' : ''}{stat.change}%
              </div>
            </div>
            
            <div className="text-2xl font-bold text-gray-800 mb-1">
              {stat.value.toLocaleString()}
            </div>
            
            <div className="text-sm text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}