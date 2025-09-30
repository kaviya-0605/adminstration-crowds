// import React from 'react';
// import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

// interface Zone {
//   id: string;
//   name: string;
//   capacity: number;
//   current: number;
//   trend: 'up' | 'down' | 'stable';
// }

// interface CongestionHeatmapProps {
//   zones: Zone[];
// }

// export default function CongestionHeatmap({ zones }: CongestionHeatmapProps) {
//   const getZoneColor = (occupancy: number) => {
//     if (occupancy >= 80) return 'bg-red-500';
//     if (occupancy >= 60) return 'bg-amber-500';
//     return 'bg-green-500';
//   };

//   const getTrendIcon = (trend: string) => {
//     switch (trend) {
//       case 'up': return <TrendingUp className="w-4 h-4 text-red-500" />;
//       case 'down': return <TrendingDown className="w-4 h-4 text-green-500" />;
//       default: return <Minus className="w-4 h-4 text-gray-500" />;
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-800">Congestion Monitoring</h3>
//         <div className="flex space-x-2 text-sm">
//           <div className="flex items-center space-x-1">
//             <div className="w-3 h-3 bg-green-500 rounded"></div>
//             <span>Low</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <div className="w-3 h-3 bg-amber-500 rounded"></div>
//             <span>Medium</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <div className="w-3 h-3 bg-red-500 rounded"></div>
//             <span>High</span>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         {zones.map((zone) => {
//           const occupancy = Math.round((zone.current / zone.capacity) * 100);
          
//           return (
//             <div
//               key={zone.id}
//               className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <h4 className="font-medium text-gray-800">{zone.name}</h4>
//                 {getTrendIcon(zone.trend)}
//               </div>
              
//               <div className="space-y-2">
//                 <div className="flex justify-between text-sm text-gray-600">
//                   <span>{zone.current}/{zone.capacity}</span>
//                   <span className="font-medium">{occupancy}%</span>
//                 </div>
                
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div
//                     className={`h-2 rounded-full transition-all duration-500 ${getZoneColor(occupancy)}`}
//                     style={{ width: `${occupancy}%` }}
//                   ></div>
//                 </div>
                
//                 <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${
//                   occupancy >= 80 ? 'bg-red-100 text-red-800' :
//                   occupancy >= 60 ? 'bg-amber-100 text-amber-800' :
//                   'bg-green-100 text-green-800'
//                 }`}>
//                   {occupancy >= 80 ? 'Critical' : occupancy >= 60 ? 'Moderate' : 'Normal'}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }








import React from 'react';
import { TrendingUp, TrendingDown, Minus, Users, Activity } from 'lucide-react';

interface Zone {
  id: string;
  name: string;
  capacity: number;
  current: number;
  trend: 'up' | 'down' | 'stable';
  history?: number[]; // Historical data for the chart
}

interface CongestionHeatmapProps {
  zones: Zone[];
}

export default function CongestionHeatmap({ zones }: CongestionHeatmapProps) {
  const getZoneColor = (occupancy: number, type: 'bg' | 'text' | 'gradient' = 'bg') => {
    if (occupancy >= 80) {
      return type === 'bg' ? 'bg-red-500' : 
             type === 'text' ? 'text-red-600' : 
             'from-red-400 to-red-600';
    }
    if (occupancy >= 60) {
      return type === 'bg' ? 'bg-amber-500' : 
             type === 'text' ? 'text-amber-600' : 
             'from-amber-400 to-amber-600';
    }
    return type === 'bg' ? 'bg-green-500' : 
           type === 'text' ? 'text-green-600' : 
           'from-green-400 to-green-600';
  };

  const getCardBackground = (occupancy: number) => {
    if (occupancy >= 80) return 'bg-gradient-to-br from-red-25 to-red-50 border-red-100';
    if (occupancy >= 60) return 'bg-gradient-to-br from-amber-25 to-amber-50 border-amber-100';
    return 'bg-gradient-to-br from-green-25 to-green-50 border-green-100';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-green-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  // Sample data for the line chart (in real app, this would come from props)
  const crowdHistory = [45, 52, 38, 65, 72, 58, 75, 82, 68, 55, 48, 62];
  const maxCrowd = Math.max(...crowdHistory);
  const minCrowd = Math.min(...crowdHistory);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Congestion Monitoring</h3>
          <p className="text-sm text-gray-500 mt-1">Real-time zone occupancy and crowd trends</p>
        </div>
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-gray-600">Low</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-amber-500 rounded"></div>
            <span className="text-gray-600">Medium</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-gray-600">High</span>
          </div>
        </div>
      </div>

      {/* Zones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {zones.map((zone) => {
          const occupancy = Math.round((zone.current / zone.capacity) * 100);
          
          return (
            <div
              key={zone.id}
              className={`border-2 rounded-xl p-4 transition-all duration-200 hover:shadow-md ${getCardBackground(occupancy)}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-600" />
                  <h4 className="font-semibold text-gray-900">{zone.name}</h4>
                </div>
                {getTrendIcon(zone.trend)}
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">{zone.current}</span>
                  <span className="text-sm text-gray-500">of {zone.capacity}</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${getZoneColor(occupancy, 'bg')}`}
                    style={{ width: `${occupancy}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${getZoneColor(occupancy, 'text')}`}>
                    {occupancy}% Occupied
                  </span>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    occupancy >= 80 ? 'bg-red-100 text-red-800' :
                    occupancy >= 60 ? 'bg-amber-100 text-amber-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {occupancy >= 80 ? 'Critical' : occupancy >= 60 ? 'Moderate' : 'Normal'}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Crowd Trend Line Chart */}
      <div className="border-t pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <h4 className="text-lg font-semibold text-gray-900">Crowd Trend Analysis</h4>
          </div>
          <div className="text-sm text-gray-500">
            Last 12 hours
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-end justify-between h-32 mb-4">
            {crowdHistory.map((value, index) => {
              const percentage = ((value - minCrowd) / (maxCrowd - minCrowd)) * 100;
              const height = Math.max(20, percentage); // Minimum height of 20%
              
              return (
                <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                  <div
                    className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer"
                    style={{
                      height: `${height}%`,
                      background: `linear-gradient(to top, ${getZoneColor(value, 'gradient')})`,
                      minHeight: '8px'
                    }}
                    title={`${value} people`}
                  />
                  <span className="text-xs text-gray-500">{index + 1}h</span>
                </div>
              );
            })}
          </div>

          {/* Chart Statistics */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">{maxCrowd}</div>
              <div className="text-sm text-gray-500">Peak</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {Math.round(crowdHistory.reduce((a, b) => a + b, 0) / crowdHistory.length)}
              </div>
              <div className="text-sm text-gray-500">Average</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{minCrowd}</div>
              <div className="text-sm text-gray-500">Low</div>
            </div>
          </div>

          {/* Gradient Legend */}
          <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-blue-200">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-2 rounded bg-gradient-to-r from-green-400 to-green-600"></div>
              <span className="text-xs text-gray-600">Low Density</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-2 rounded bg-gradient-to-r from-amber-400 to-amber-600"></div>
              <span className="text-xs text-gray-600">Medium</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-2 rounded bg-gradient-to-r from-red-400 to-red-600"></div>
              <span className="text-xs text-gray-600">High Density</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}