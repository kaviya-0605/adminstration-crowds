// import React from 'react';
// import { Car, Truck } from 'lucide-react';

// interface ParkingSpace {
//   id: string;
//   type: 'car' | 'bus';
//   occupied: boolean;
//   zone: string;
// }

// interface ParkingGridProps {
//   spaces: ParkingSpace[];
//   stats: {
//     total: number;
//     occupied: number;
//     available: number;
//   };
// }

// export default function ParkingGrid({ spaces, stats }: ParkingGridProps) {
//   const occupancyRate = Math.round((stats.occupied / stats.total) * 100);

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-800">Parking Management</h3>
//         <div className="text-sm text-gray-600">
//           Live Updates • {occupancyRate}% Occupied
//         </div>
//       </div>

//       <div className="grid grid-cols-3 gap-4 mb-6">
//         <div className="bg-blue-50 rounded-lg p-4 text-center">
//           <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
//           <div className="text-sm text-gray-600">Total Spaces</div>
//         </div>
//         <div className="bg-red-50 rounded-lg p-4 text-center">
//           <div className="text-2xl font-bold text-red-600">{stats.occupied}</div>
//           <div className="text-sm text-gray-600">Occupied</div>
//         </div>
//         <div className="bg-green-50 rounded-lg p-4 text-center">
//           <div className="text-2xl font-bold text-green-600">{stats.available}</div>
//           <div className="text-sm text-gray-600">Available</div>
//         </div>
//       </div>

//       <div className="grid grid-cols-10 gap-1">
//         {spaces.map((space) => (
//           <div
//             key={space.id}
//             className={`aspect-square rounded border-2 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 ${
//               space.occupied
//                 ? 'bg-red-500 border-red-600 text-white'
//                 : 'bg-green-500 border-green-600 text-white hover:bg-green-400'
//             }`}
//             title={`Space ${space.id} - ${space.zone} - ${space.occupied ? 'Occupied' : 'Available'}`}
//           >
//             {space.type === 'car' ? (
//               <Car className="w-3 h-3" />
//             ) : (
//               <Truck className="w-3 h-3" />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-green-500 rounded border"></div>
//           <span>Available</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-red-500 rounded border"></div>
//           <span>Occupied</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Car className="w-4 h-4 text-gray-600" />
//           <span>Car</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Truck className="w-4 h-4 text-gray-600" />
//           <span>Bus</span>
//         </div>
//       </div>
//     </div>
//   );
// }







// import React, { useState, useEffect } from 'react';
// import { Car, Truck, RefreshCw, Clock, AlertTriangle, DollarSign, Users, TrendingUp } from 'lucide-react';

// interface ParkingSpace {
//   id: string;
//   type: 'car' | 'bus';
//   occupied: boolean;
//   zone: string;
//   status: 'available' | 'occupied' | 'grace-period' | 'fine';
//   position: { row: number; col: number };
//   booking?: {
//     userName: string;
//     startTime: string;
//     endTime: string;
//     fee: number;
//     fineAmount?: number;
//     qrCode?: string;
//   };
// }

// interface ParkingStats {
//   totalSpaces: number;
//   occupiedSpaces: number;
//   availableSpaces: number;
//   gracePeriodSpaces: number;
//   fineSpaces: number;
//   totalRevenue: number;
//   todayBookings: number;
//   utilizationRate: number;
// }

// interface SpaceModalProps {
//   space: ParkingSpace | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const SpaceModal: React.FC<SpaceModalProps> = ({ space, isOpen, onClose }) => {
//   if (!isOpen || !space) return null;

//   const formatTime = (timeString: string) => {
//     return new Date(timeString).toLocaleString();
//   };

//   const getStatusBadge = (status: string) => {
//     const badges = {
//       available: 'bg-green-100 text-green-800',
//       occupied: 'bg-red-100 text-red-800',
//       'grace-period': 'bg-yellow-100 text-yellow-800',
//       fine: 'bg-orange-100 text-orange-800'
//     };
    
//     return `px-3 py-1 rounded-full text-sm font-medium ${badges[status as keyof typeof badges]}`;
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//         <div className="flex items-center justify-between p-6 border-b">
//           <h2 className="text-xl font-bold text-gray-800">
//             Parking Space {space.id}
//           </h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             ✕
//           </button>
//         </div>
        
//         <div className="p-6">
//           <div className="mb-4">
//             <span className={getStatusBadge(space.status)}>
//               {space.status.charAt(0).toUpperCase() + space.status.slice(1).replace('-', ' ')}
//             </span>
//           </div>
          
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                 📍
//               </div>
//               <div>
//                 <p className="font-medium text-gray-800">Zone</p>
//                 <p className="text-gray-600">{space.zone}</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                 {space.type === 'car' ? <Car className="w-4 h-4" /> : <Truck className="w-4 h-4" />}
//               </div>
//               <div>
//                 <p className="font-medium text-gray-800">Vehicle Type</p>
//                 <p className="text-gray-600 capitalize">{space.type}</p>
//               </div>
//             </div>
            
//             {space.booking && (
//               <>
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
//                     👤
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">Booked by</p>
//                     <p className="text-gray-600">{space.booking.userName}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                     ⏰
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">Duration</p>
//                     <p className="text-gray-600">
//                       {formatTime(space.booking.startTime)} - {formatTime(space.booking.endTime)}
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
//                     💳
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">Payment</p>
//                     <p className="text-gray-600">
//                       Fee: ₹{space.booking.fee}
//                       {space.booking.fineAmount && (
//                         <span className="text-red-600 ml-2">
//                           Fine: ₹{space.booking.fineAmount}
//                         </span>
//                       )}
//                     </p>
//                   </div>
//                 </div>
                
//                 {space.booking.qrCode && (
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
//                       📱
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-800">QR Code</p>
//                       <p className="text-gray-600 font-mono text-sm">{space.booking.qrCode}</p>
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
          
//           {space.status === 'available' && (
//             <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
//               <p className="text-green-800 font-medium">This space is available for booking!</p>
//             </div>
//           )}
          
//           {space.status === 'fine' && (
//             <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
//               <p className="text-orange-800 font-medium">Fine Required</p>
//               <p className="text-orange-600 text-sm mt-1">
//                 Grace period exceeded. Additional fine of ₹{space.booking?.fineAmount} required.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// interface ParkingGridProps {
//   spaces: ParkingSpace[];
//   stats: ParkingStats;
// }

// export default function ParkingGrid({ spaces, stats }: ParkingGridProps) {
//   const [selectedSpace, setSelectedSpace] = useState<ParkingSpace | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSpaceClick = (space: ParkingSpace) => {
//     setSelectedSpace(space);
//     setIsModalOpen(true);
//   };

//   const getSpaceColor = (space: ParkingSpace) => {
//     if (space.status === 'available') {
//       return 'bg-green-500 hover:bg-green-600 border-green-600';
//     } else if (space.status === 'occupied') {
//       return 'bg-red-500 hover:bg-red-600 border-red-600';
//     } else if (space.status === 'grace-period') {
//       return 'bg-yellow-500 hover:bg-yellow-600 border-yellow-600';
//     } else if (space.status === 'fine') {
//       return 'bg-orange-500 hover:bg-orange-600 border-orange-600';
//     }
//     return space.occupied 
//       ? 'bg-red-500 border-red-600 text-white' 
//       : 'bg-green-500 border-green-600 text-white hover:bg-green-400';
//   };

//   const getStatusIcon = (space: ParkingSpace) => {
//     if (space.status === 'occupied') return '🚗';
//     if (space.status === 'grace-period') return '⏰';
//     if (space.status === 'fine') return '⚠️';
//     return space.type === 'car' ? <Car className="w-3 h-3" /> : <Truck className="w-3 h-3" />;
//   };

//   const statCards = [
//     {
//       title: 'Total Spaces',
//       value: stats.totalSpaces,
//       icon: Car,
//       color: 'bg-blue-500',
//       textColor: 'text-blue-600'
//     },
//     {
//       title: 'Occupied',
//       value: stats.occupiedSpaces,
//       icon: Car,
//       color: 'bg-red-500',
//       textColor: 'text-red-600'
//     },
//     {
//       title: 'Available',
//       value: stats.availableSpaces,
//       icon: Car,
//       color: 'bg-green-500',
//       textColor: 'text-green-600'
//     },
//     {
//       title: 'Grace Period',
//       value: stats.gracePeriodSpaces,
//       icon: Clock,
//       color: 'bg-yellow-500',
//       textColor: 'text-yellow-600'
//     },
//     {
//       title: 'Fine Required',
//       value: stats.fineSpaces,
//       icon: AlertTriangle,
//       color: 'bg-orange-500',
//       textColor: 'text-orange-600'
//     },
//     {
//       title: 'Today Revenue',
//       value: `₹${stats.totalRevenue}`,
//       icon: DollarSign,
//       color: 'bg-emerald-500',
//       textColor: 'text-emerald-600'
//     },
//     {
//       title: 'Bookings Today',
//       value: stats.todayBookings,
//       icon: Users,
//       color: 'bg-purple-500',
//       textColor: 'text-purple-600'
//     },
//     {
//       title: 'Utilization Rate',
//       value: `${stats.utilizationRate.toFixed(1)}%`,
//       icon: TrendingUp,
//       color: 'bg-indigo-500',
//       textColor: 'text-indigo-600'
//     }
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h3 className="text-2xl font-bold text-gray-800">Temple Parking</h3>
//           <p className="text-gray-600">Real-time parking space monitoring and management</p>
//         </div>
//         <div className="text-sm text-gray-600">
//           Live Updates • {stats.utilizationRate.toFixed(1)}% Utilization
//         </div>
//       </div>

//       {/* Enhanced Statistics Panel */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//         {statCards.map((card, index) => {
//           const Icon = card.icon;
//           return (
//             <div
//               key={index}
//               className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600 mb-1">
//                     {card.title}
//                   </p>
//                   <p className={`text-xl font-bold ${card.textColor}`}>
//                     {card.value}
//                   </p>
//                 </div>
//                 <div className={`p-2 rounded-full ${card.color}`}>
//                   <Icon className="h-4 w-4 text-white" />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Parking Grid */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold text-gray-800 mb-4">Parking Layout</h3>
//         <div className="grid grid-cols-10 gap-2">
//           {spaces.map((space) => (
//             <button
//               key={space.id}
//               onClick={() => handleSpaceClick(space)}
//               className={`
//                 aspect-square rounded border-2 flex flex-col items-center justify-center cursor-pointer 
//                 transition-all duration-200 hover:scale-105 text-white font-bold text-xs
//                 ${getSpaceColor(space)}
//               `}
//               title={`Space ${space.id} - ${space.zone} - ${space.status}`}
//             >
//               <div className="text-xs mb-1">
//                 {getStatusIcon(space)}
//               </div>
//               <div className="text-[10px]">{space.id}</div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Legend */}
//       <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-green-500 rounded border"></div>
//           <span>Available</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-red-500 rounded border"></div>
//           <span>Occupied</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-yellow-500 rounded border"></div>
//           <span>Grace Period</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="w-4 h-4 bg-orange-500 rounded border"></div>
//           <span>Fine Required</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Car className="w-4 h-4 text-gray-600" />
//           <span>Car</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Truck className="w-4 h-4 text-gray-600" />
//           <span>Bus</span>
//         </div>
//       </div>

//       <SpaceModal
//         space={selectedSpace}
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </div>
//   );
// }












import React, { useState, useEffect } from 'react';
import { Car, Truck, RefreshCw, Clock, AlertTriangle, DollarSign, Users, TrendingUp } from 'lucide-react';

interface ParkingSpace {
  id: string;
  type: 'car' | 'bus';
  occupied: boolean;
  zone: string;
  status: 'available' | 'occupied' | 'grace-period' | 'fine';
  position: { row: number; col: number };
  booking?: {
    userName: string;
    startTime: string;
    endTime: string;
    fee: number;
    fineAmount?: number;
    qrCode?: string;
  };
}

interface ParkingStats {
  totalSpaces: number;
  occupiedSpaces: number;
  availableSpaces: number;
  gracePeriodSpaces: number;
  fineSpaces: number;
  totalRevenue: number;
  todayBookings: number;
  utilizationRate: number;
}

interface SpaceModalProps {
  space: ParkingSpace | null;
  isOpen: boolean;
  onClose: () => void;
}

const SpaceModal: React.FC<SpaceModalProps> = ({ space, isOpen, onClose }) => {
  if (!isOpen || !space) return null;

  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleString();
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      available: 'bg-green-100 text-green-800',
      occupied: 'bg-red-100 text-red-800',
      'grace-period': 'bg-yellow-100 text-yellow-800',
      fine: 'bg-orange-100 text-orange-800'
    };
    
    return `px-3 py-1 rounded-full text-sm font-medium ${badges[status as keyof typeof badges]}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">
            Parking Space {space.id}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <span className={getStatusBadge(space.status)}>
              {space.status.charAt(0).toUpperCase() + space.status.slice(1).replace('-', ' ')}
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                📍
              </div>
              <div>
                <p className="font-medium text-gray-800">Zone</p>
                <p className="text-gray-600">{space.zone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                {space.type === 'car' ? <Car className="w-4 h-4" /> : <Truck className="w-4 h-4" />}
              </div>
              <div>
                <p className="font-medium text-gray-800">Vehicle Type</p>
                <p className="text-gray-600 capitalize">{space.type}</p>
              </div>
            </div>
            
            {space.booking && (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    👤
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Booked by</p>
                    <p className="text-gray-600">{space.booking.userName}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    ⏰
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Duration</p>
                    <p className="text-gray-600">
                      {formatTime(space.booking.startTime)} - {formatTime(space.booking.endTime)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    💳
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Payment</p>
                    <p className="text-gray-600">
                      Fee: ₹{space.booking.fee}
                      {space.booking.fineAmount && (
                        <span className="text-red-600 ml-2">
                          Fine: ₹{space.booking.fineAmount}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                
                {space.booking.qrCode && (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      📱
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">QR Code</p>
                      <p className="text-gray-600 font-mono text-sm">{space.booking.qrCode}</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          
          {space.status === 'available' && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium">This space is available for booking!</p>
            </div>
          )}
          
          {space.status === 'fine' && (
            <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-orange-800 font-medium">Fine Required</p>
              <p className="text-orange-600 text-sm mt-1">
                Grace period exceeded. Additional fine of ₹{space.booking?.fineAmount} required.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface ParkingGridProps {
  spaces: ParkingSpace[];
  stats: ParkingStats;
}

export default function ParkingGrid({ spaces, stats }: ParkingGridProps) {
  const [selectedSpace, setSelectedSpace] = useState<ParkingSpace | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSpaceClick = (space: ParkingSpace) => {
    setSelectedSpace(space);
    setIsModalOpen(true);
  };

  const getSpaceColor = (space: ParkingSpace) => {
    if (space.status === 'available') {
      return 'bg-green-500 hover:bg-green-600 border-green-600';
    } else if (space.status === 'occupied') {
      return 'bg-red-500 hover:bg-red-600 border-red-600';
    } else if (space.status === 'grace-period') {
      return 'bg-yellow-500 hover:bg-yellow-600 border-yellow-600';
    } else if (space.status === 'fine') {
      return 'bg-orange-500 hover:bg-orange-600 border-orange-600';
    }
    return space.occupied 
      ? 'bg-red-500 border-red-600 text-white' 
      : 'bg-green-500 border-green-600 text-white hover:bg-green-400';
  };

  const getStatusIcon = (space: ParkingSpace) => {
    if (space.status === 'occupied') return '🚗';
    if (space.status === 'grace-period') return '⏰';
    if (space.status === 'fine') return '⚠️';
    return space.type === 'car' ? <Car className="w-3 h-3" /> : <Truck className="w-3 h-3" />;
  };

  const statCards = [
    {
      title: 'Total Spaces',
      value: stats.totalSpaces,
      icon: Car,
      bgColor: 'bg-blue-50',
      iconBgColor: 'bg-blue-500',
      textColor: 'text-blue-700',
      iconColor: 'text-white',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Occupied',
      value: stats.occupiedSpaces,
      icon: Car,
      bgColor: 'bg-red-50',
      iconBgColor: 'bg-red-500',
      textColor: 'text-red-700',
      iconColor: 'text-white',
      borderColor: 'border-red-200'
    },
    {
      title: 'Available',
      value: stats.availableSpaces,
      icon: Car,
      bgColor: 'bg-green-50',
      iconBgColor: 'bg-green-500',
      textColor: 'text-green-700',
      iconColor: 'text-white',
      borderColor: 'border-green-200'
    },
    {
      title: 'Grace Period',
      value: stats.gracePeriodSpaces,
      icon: Clock,
      bgColor: 'bg-yellow-50',
      iconBgColor: 'bg-yellow-500',
      textColor: 'text-yellow-700',
      iconColor: 'text-white',
      borderColor: 'border-yellow-200'
    },
    {
      title: 'Fine Required',
      value: stats.fineSpaces,
      icon: AlertTriangle,
      bgColor: 'bg-orange-50',
      iconBgColor: 'bg-orange-500',
      textColor: 'text-orange-700',
      iconColor: 'text-white',
      borderColor: 'border-orange-200'
    },
    {
      title: 'Today Revenue',
      value: `₹${stats.totalRevenue}`,
      icon: DollarSign,
      bgColor: 'bg-emerald-50',
      iconBgColor: 'bg-emerald-500',
      textColor: 'text-emerald-700',
      iconColor: 'text-white',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Bookings Today',
      value: stats.todayBookings,
      icon: Users,
      bgColor: 'bg-purple-50',
      iconBgColor: 'bg-purple-500',
      textColor: 'text-purple-700',
      iconColor: 'text-white',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Utilization Rate',
      value: `${stats.utilizationRate.toFixed(1)}%`,
      icon: TrendingUp,
      bgColor: 'bg-indigo-50',
      iconBgColor: 'bg-indigo-500',
      textColor: 'text-indigo-700',
      iconColor: 'text-white',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Temple Parking </h3>
          <p className="text-gray-600">Real-time parking space monitoring and management</p>
        </div>
        <div className="text-sm text-gray-600">
          Live Updates • {stats.utilizationRate.toFixed(1)}% Utilization
        </div>
      </div>

      {/* Enhanced Statistics Panel */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className={`${card.bgColor} ${card.borderColor} rounded-lg p-4 border hover:shadow-md transition-all duration-200 hover:scale-105`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {card.title}
                  </p>
                  <p className={`text-xl font-bold ${card.textColor}`}>
                    {card.value}
                  </p>
                </div>
                <div className={`p-2 rounded-full ${card.iconBgColor}`}>
                  <Icon className={`h-4 w-4 ${card.iconColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Parking Grid */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Parking Layout</h3>
        <div className="grid grid-cols-10 gap-2">
          {spaces.map((space) => (
            <button
              key={space.id}
              onClick={() => handleSpaceClick(space)}
              className={`
                aspect-square rounded border-2 flex flex-col items-center justify-center cursor-pointer 
                transition-all duration-200 hover:scale-105 text-white font-bold text-xs
                ${getSpaceColor(space)}
              `}
              title={`Space ${space.id} - ${space.zone} - ${space.status}`}
            >
              <div className="text-xs mb-1">
                {getStatusIcon(space)}
              </div>
              <div className="text-[10px]">{space.id}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded border"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded border"></div>
          <span>Occupied</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-500 rounded border"></div>
          <span>Grace Period</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-orange-500 rounded border"></div>
          <span>Fine Required</span>
        </div>
        <div className="flex items-center space-x-2">
          <Car className="w-4 h-4 text-gray-600" />
          <span>Car</span>
        </div>
        <div className="flex items-center space-x-2">
          <Truck className="w-4 h-4 text-gray-600" />
          <span>Bus</span>
        </div>
      </div>

      <SpaceModal
        space={selectedSpace}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}