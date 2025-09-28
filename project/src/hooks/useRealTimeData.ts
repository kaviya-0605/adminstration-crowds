import { useState, useEffect } from 'react';

// Simulate real-time data updates
export function useRealTimeData() {
  const [data, setData] = useState({
    zones: [
      { id: '1', name: 'Main Temple', capacity: 500, current: 420, trend: 'up' as const },
      { id: '2', name: 'Entrance Hall', capacity: 200, current: 95, trend: 'stable' as const },
      { id: '3', name: 'Prayer Hall', capacity: 300, current: 180, trend: 'down' as const },
      { id: '4', name: 'Dining Area', capacity: 150, current: 85, trend: 'up' as const },
      { id: '5', name: 'Parking Area', capacity: 100, current: 45, trend: 'stable' as const },
      { id: '6', name: 'Gift Shop', capacity: 80, current: 25, trend: 'down' as const },
    ],
    
    alerts: [
      {
        id: '1',
        type: 'medical' as const,
        message: 'Medical emergency reported near main entrance',
        location: 'Main Entrance - Gate 1',
        timestamp: '2 minutes ago',
        priority: 'high' as const,
      },
      {
        id: '2',
        type: 'missing' as const,
        message: 'Missing child reported - 8 year old boy',
        location: 'Prayer Hall',
        timestamp: '5 minutes ago',
        priority: 'high' as const,
      },
    ],

    parkingSpaces: Array.from({ length: 50 }, (_, i) => ({
      id: String(i + 1),
      type: Math.random() > 0.8 ? 'bus' as const : 'car' as const,
      occupied: Math.random() > 0.6,
      zone: Math.random() > 0.5 ? 'A' : 'B',
    })),

    queues: [
      { id: '1', name: 'Main Darshan', current: 45, waitTime: 25, status: 'normal' as const },
      { id: '2', name: 'Aarti Queue', current: 82, waitTime: 45, status: 'delayed' as const },
      { id: '3', name: 'Prasad Counter', current: 156, waitTime: 85, status: 'critical' as const },
      { id: '4', name: 'Special Darshan', current: 12, waitTime: 10, status: 'normal' as const },
    ],

    mobileStats: [
      {
        label: 'Registrations Booked',
        value: 1247,
        change: 12,
        icon: '📅',
        color: 'bg-blue-100 text-blue-600',
      },
      {
        label: 'Parking Booked',
        value: 384,
        change: 8,
        icon: '🚗',
        color: 'bg-green-100 text-green-600',
      },
      {
        label: 'Accommodation Booked',
        value: 156,
        change: -3,
        icon: '🏠',
        color: 'bg-purple-100 text-purple-600',
      },
      {
        label: 'Prasad Booked',
        value: 892,
        change: 15,
        icon: '🍽️',
        color: 'bg-orange-100 text-orange-600',
      },
      {
        label: 'Seva/Pooja Booked',
        value: 267,
        change: 6,
        icon: '🙏',
        color: 'bg-pink-100 text-pink-600',
      },
    ],

    missingPersons: [
      {
        id: '1',
        name: 'Arjun Kumar',
        age: 8,
        description: 'Wearing blue t-shirt and black shorts, approximately 4 feet tall',
        lastSeen: '30 minutes ago',
        location: 'Prayer Hall, Section B',
        photo: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=150',
        reportedBy: 'Parents - Raj Kumar',
        contact: '+91 98765 43210',
        timestamp: '10:30 AM',
      },
    ],

    assistanceRequests: [
      {
        id: '1',
        name: 'Sunita Devi',
        type: 'wheelchair' as const,
        priority: 'high' as const,
        location: 'Main Entrance',
        status: 'pending' as const,
        timestamp: '5 minutes ago',
        description: 'Elderly lady needs wheelchair assistance to reach main temple',
      },
      {
        id: '2',
        name: 'Ramesh Patel',
        type: 'vision' as const,
        priority: 'medium' as const,
        location: 'Gift Shop',
        status: 'assigned' as const,
        timestamp: '12 minutes ago',
        description: 'Visually impaired visitor needs guidance to parking area',
        assignedTo: 'Volunteer - Amit Singh',
      },
    ],

    kioskActivities: [
      {
        id: '1',
        kioskId: 'K001',
        type: 'emergency' as const,
        message: 'Emergency button pressed - Medical assistance needed',
        timestamp: '2 minutes ago',
        status: 'active' as const,
        priority: 'high' as const,
      },
      {
        id: '2',
        kioskId: 'K003',
        type: 'registration' as const,
        message: 'New visitor registration completed',
        timestamp: '5 minutes ago',
        status: 'resolved' as const,
        priority: 'low' as const,
      },
    ],
  });

  // Update data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        zones: prevData.zones.map(zone => ({
          ...zone,
          current: Math.max(0, Math.min(zone.capacity, zone.current + Math.floor(Math.random() * 21) - 10)),
          trend: Math.random() > 0.7 ? 
            (Math.random() > 0.5 ? 'up' : 'down') : 
            zone.trend,
        })),
        parkingSpaces: prevData.parkingSpaces.map(space => ({
          ...space,
          occupied: Math.random() > 0.1 ? space.occupied : !space.occupied,
        })),
        queues: prevData.queues.map(queue => ({
          ...queue,
          current: Math.max(0, queue.current + Math.floor(Math.random() * 11) - 5),
          waitTime: Math.max(5, queue.waitTime + Math.floor(Math.random() * 11) - 5),
        })),
        mobileStats: prevData.mobileStats.map(stat => ({
          ...stat,
          value: Math.max(0, stat.value + Math.floor(Math.random() * 21) - 10),
          change: Math.floor(Math.random() * 31) - 15,
        })),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const dismissAlert = (id: string) => {
    setData(prevData => ({
      ...prevData,
      alerts: prevData.alerts.filter(alert => alert.id !== id),
    }));
  };

  const parkingStats = {
    total: data.parkingSpaces.length,
    occupied: data.parkingSpaces.filter(space => space.occupied).length,
    available: data.parkingSpaces.filter(space => !space.occupied).length,
  };

  return {
    ...data,
    parkingStats,
    dismissAlert,
  };
}