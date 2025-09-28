import React, { useState, useEffect } from 'react';
import { Camera, Users, AlertTriangle, Eye, RefreshCw } from 'lucide-react';

interface DetectedPerson {
  id: string;
  x: number;
  y: number;
  confidence: number;
  type: 'person' | 'child' | 'elderly' | 'disabled';
}

interface CameraFeed {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'maintenance';
  personCount: number;
  detectedPersons: DetectedPerson[];
  lastUpdate: string;
  alertLevel: 'low' | 'medium' | 'high';
}

export default function LiveCrowdDetection() {
  const [selectedCamera, setSelectedCamera] = useState('cam1');
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const [cameras] = useState<CameraFeed[]>([
    {
      id: 'cam1',
      name: 'Main Entrance',
      location: 'Gate 1 - Primary Entry',
      status: 'online',
      personCount: 47,
      detectedPersons: [
        { id: '1', x: 120, y: 80, confidence: 0.95, type: 'person' },
        { id: '2', x: 200, y: 150, confidence: 0.88, type: 'child' },
        { id: '3', x: 350, y: 120, confidence: 0.92, type: 'elderly' },
        { id: '4', x: 180, y: 200, confidence: 0.87, type: 'person' },
        { id: '5', x: 280, y: 90, confidence: 0.91, type: 'disabled' },
      ],
      lastUpdate: '2 seconds ago',
      alertLevel: 'high',
    },
    {
      id: 'cam2',
      name: 'Prayer Hall',
      location: 'Main Temple Area',
      status: 'online',
      personCount: 156,
      detectedPersons: [
        { id: '6', x: 150, y: 100, confidence: 0.94, type: 'person' },
        { id: '7', x: 250, y: 180, confidence: 0.89, type: 'elderly' },
        { id: '8', x: 320, y: 140, confidence: 0.93, type: 'person' },
        { id: '9', x: 100, y: 220, confidence: 0.86, type: 'child' },
      ],
      lastUpdate: '1 second ago',
      alertLevel: 'high',
    },
    {
      id: 'cam3',
      name: 'Dining Area',
      location: 'Community Kitchen',
      status: 'online',
      personCount: 23,
      detectedPersons: [
        { id: '10', x: 180, y: 120, confidence: 0.91, type: 'person' },
        { id: '11', x: 300, y: 160, confidence: 0.88, type: 'person' },
      ],
      lastUpdate: '3 seconds ago',
      alertLevel: 'medium',
    },
    {
      id: 'cam4',
      name: 'Parking Area',
      location: 'Vehicle Parking Zone',
      status: 'online',
      personCount: 12,
      detectedPersons: [
        { id: '12', x: 200, y: 100, confidence: 0.90, type: 'person' },
      ],
      lastUpdate: '1 second ago',
      alertLevel: 'low',
    },
    {
      id: 'cam5',
      name: 'Gift Shop',
      location: 'Souvenir Counter',
      status: 'maintenance',
      personCount: 0,
      detectedPersons: [],
      lastUpdate: '5 minutes ago',
      alertLevel: 'low',
    },
    {
      id: 'cam6',
      name: 'Exit Gate',
      location: 'Gate 2 - Secondary Exit',
      status: 'online',
      personCount: 31,
      detectedPersons: [
        { id: '13', x: 160, y: 140, confidence: 0.92, type: 'person' },
        { id: '14', x: 240, y: 110, confidence: 0.89, type: 'elderly' },
        { id: '15', x: 320, y: 180, confidence: 0.94, type: 'person' },
      ],
      lastUpdate: '2 seconds ago',
      alertLevel: 'medium',
    },
  ]);

  const selectedCameraData = cameras.find(cam => cam.id === selectedCamera);

  const getPersonTypeColor = (type: string) => {
    switch (type) {
      case 'child': return 'bg-blue-500';
      case 'elderly': return 'bg-purple-500';
      case 'disabled': return 'bg-orange-500';
      default: return 'bg-green-500';
    }
  };

  const getAlertLevelColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-amber-600 bg-amber-100';
      default: return 'text-green-600 bg-green-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-600 bg-green-100';
      case 'offline': return 'text-red-600 bg-red-100';
      default: return 'text-amber-600 bg-amber-100';
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // This would normally update with real camera data
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Live Crowd Detection</h2>
          <p className="text-gray-600">AI-powered real-time person detection and counting</p>
        </div>
        <button
          onClick={handleRefresh}
          className={`flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
            isRefreshing ? 'animate-pulse' : ''
          }`}
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Camera Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cameras.map((camera) => (
          <div
            key={camera.id}
            onClick={() => setSelectedCamera(camera.id)}
            className={`bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-xl ${
              selectedCamera === camera.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Camera className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-800">{camera.name}</h3>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(camera.status)}`}>
                {camera.status.toUpperCase()}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{camera.location}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-lg font-bold text-blue-600">{camera.personCount}</span>
                <span className="text-sm text-gray-600">detected</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getAlertLevelColor(camera.alertLevel)}`}>
                {camera.alertLevel.toUpperCase()}
              </span>
            </div>
            
            <div className="text-xs text-gray-500 mt-2">
              Last update: {camera.lastUpdate}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Camera Detail View */}
      {selectedCameraData && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{selectedCameraData.name}</h3>
              <p className="text-gray-600">{selectedCameraData.location}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(selectedCameraData.status)}`}>
                {selectedCameraData.status.toUpperCase()}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm ${getAlertLevelColor(selectedCameraData.alertLevel)}`}>
                Alert: {selectedCameraData.alertLevel.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Camera Feed Simulation */}
          <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4" style={{ height: '400px' }}>
            {/* Simulated camera background */}
            <div 
              className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 relative"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              {/* Detection boxes */}
              {selectedCameraData.detectedPersons.map((person) => (
                <div
                  key={person.id}
                  className="absolute border-2 border-green-400 bg-green-400 bg-opacity-20"
                  style={{
                    left: `${person.x}px`,
                    top: `${person.y}px`,
                    width: '40px',
                    height: '80px',
                  }}
                >
                  <div className="absolute -top-6 left-0 bg-green-400 text-black text-xs px-1 rounded">
                    {person.type} ({Math.round(person.confidence * 100)}%)
                  </div>
                  <div className={`absolute top-1 left-1 w-2 h-2 rounded-full ${getPersonTypeColor(person.type)}`}></div>
                </div>
              ))}
              
              {/* Camera info overlay */}
              <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">LIVE</span>
                </div>
              </div>
              
              {/* Person count overlay */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span className="text-lg font-bold">{selectedCameraData.personCount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detection Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-green-600">
                {selectedCameraData.detectedPersons.filter(p => p.type === 'person').length}
              </div>
              <div className="text-sm text-gray-600">Adults</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-blue-600">
                {selectedCameraData.detectedPersons.filter(p => p.type === 'child').length}
              </div>
              <div className="text-sm text-gray-600">Children</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-purple-600">
                {selectedCameraData.detectedPersons.filter(p => p.type === 'elderly').length}
              </div>
              <div className="text-sm text-gray-600">Elderly</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-orange-600">
                {selectedCameraData.detectedPersons.filter(p => p.type === 'disabled').length}
              </div>
              <div className="text-sm text-gray-600">Disabled</div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Adults</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Children</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Elderly</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Disabled</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}