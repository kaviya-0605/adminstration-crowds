import React from 'react';
import { Car, Truck } from 'lucide-react';

interface ParkingSpace {
  id: string;
  type: 'car' | 'bus';
  occupied: boolean;
  zone: string;
}

interface ParkingGridProps {
  spaces: ParkingSpace[];
  stats: {
    total: number;
    occupied: number;
    available: number;
  };
}

export default function ParkingGrid({ spaces, stats }: ParkingGridProps) {
  const occupancyRate = Math.round((stats.occupied / stats.total) * 100);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Parking Management</h3>
        <div className="text-sm text-gray-600">
          Live Updates • {occupancyRate}% Occupied
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
          <div className="text-sm text-gray-600">Total Spaces</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-600">{stats.occupied}</div>
          <div className="text-sm text-gray-600">Occupied</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{stats.available}</div>
          <div className="text-sm text-gray-600">Available</div>
        </div>
      </div>

      <div className="grid grid-cols-10 gap-1">
        {spaces.map((space) => (
          <div
            key={space.id}
            className={`aspect-square rounded border-2 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 ${
              space.occupied
                ? 'bg-red-500 border-red-600 text-white'
                : 'bg-green-500 border-green-600 text-white hover:bg-green-400'
            }`}
            title={`Space ${space.id} - ${space.zone} - ${space.occupied ? 'Occupied' : 'Available'}`}
          >
            {space.type === 'car' ? (
              <Car className="w-3 h-3" />
            ) : (
              <Truck className="w-3 h-3" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded border"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded border"></div>
          <span>Occupied</span>
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
    </div>
  );
}