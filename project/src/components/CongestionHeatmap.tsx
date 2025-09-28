import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface Zone {
  id: string;
  name: string;
  capacity: number;
  current: number;
  trend: 'up' | 'down' | 'stable';
}

interface CongestionHeatmapProps {
  zones: Zone[];
}

export default function CongestionHeatmap({ zones }: CongestionHeatmapProps) {
  const getZoneColor = (occupancy: number) => {
    if (occupancy >= 80) return 'bg-red-500';
    if (occupancy >= 60) return 'bg-amber-500';
    return 'bg-green-500';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-green-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Congestion Monitoring</h3>
        <div className="flex space-x-2 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Low</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-amber-500 rounded"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>High</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {zones.map((zone) => {
          const occupancy = Math.round((zone.current / zone.capacity) * 100);
          
          return (
            <div
              key={zone.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-800">{zone.name}</h4>
                {getTrendIcon(zone.trend)}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{zone.current}/{zone.capacity}</span>
                  <span className="font-medium">{occupancy}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${getZoneColor(occupancy)}`}
                    style={{ width: `${occupancy}%` }}
                  ></div>
                </div>
                
                <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                  occupancy >= 80 ? 'bg-red-100 text-red-800' :
                  occupancy >= 60 ? 'bg-amber-100 text-amber-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {occupancy >= 80 ? 'Critical' : occupancy >= 60 ? 'Moderate' : 'Normal'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}