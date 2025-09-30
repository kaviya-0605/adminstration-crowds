import { ParkingSpace, ParkingStats } from '../types/parking';

export const generateParkingSpaces = (): ParkingSpace[] => {
  const spaces: ParkingSpace[] = [];
  const zones = ['A', 'B', 'C', 'D'];
  const statuses: Array<'available' | 'occupied' | 'grace-period' | 'fine'> = [
    'available', 'occupied', 'grace-period', 'fine'
  ];

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 8; col++) {
      const id = `${zones[col % zones.length]}${row * 8 + col + 1}`;
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      
      spaces.push({
        id,
        type: Math.random() > 0.7 ? 'bus' : 'car',
        occupied: status !== 'available',
        zone: zones[col % zones.length],
        status,
        position: { row, col },
        booking: status !== 'available' ? {
          userName: `User${Math.floor(Math.random() * 1000)}`,
          startTime: new Date(Date.now() - Math.random() * 3600000).toISOString(),
          endTime: new Date(Date.now() + Math.random() * 3600000).toISOString(),
          fee: Math.floor(Math.random() * 100) + 50,
          fineAmount: status === 'fine' ? Math.floor(Math.random() * 50) + 20 : undefined,
          qrCode: `QR${Math.floor(Math.random() * 10000)}`
        } : undefined
      });
    }
  }
  
  return spaces;
};

export const calculateStats = (spaces: ParkingSpace[]): ParkingStats => {
  const totalSpaces = spaces.length;
  const occupiedSpaces = spaces.filter(space => space.status === 'occupied').length;
  const availableSpaces = spaces.filter(space => space.status === 'available').length;
  const gracePeriodSpaces = spaces.filter(space => space.status === 'grace-period').length;
  const fineSpaces = spaces.filter(space => space.status === 'fine').length;
  
  const totalRevenue = spaces.reduce((sum, space) => 
    sum + (space.booking?.fee || 0) + (space.booking?.fineAmount || 0), 0
  );
  
  const todayBookings = spaces.filter(space => space.booking).length;
  const utilizationRate = (occupiedSpaces / totalSpaces) * 100;

  return {
    totalSpaces,
    occupiedSpaces,
    availableSpaces,
    gracePeriodSpaces,
    fineSpaces,
    totalRevenue,
    todayBookings,
    utilizationRate
  };
};