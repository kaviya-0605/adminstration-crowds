export interface ParkingSpace {
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

export interface ParkingStats {
  totalSpaces: number;
  occupiedSpaces: number;
  availableSpaces: number;
  gracePeriodSpaces: number;
  fineSpaces: number;
  totalRevenue: number;
  todayBookings: number;
  utilizationRate: number;
}