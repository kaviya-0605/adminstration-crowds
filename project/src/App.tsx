import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import EmergencyAlerts from './components/EmergencyAlerts';
import CongestionHeatmap from './components/CongestionHeatmap';
import ParkingGrid from './components/ParkingGrid';
import QueueManagement from './components/QueueManagement';
import MobileAppStats from './components/MobileAppStats';
import MissingPersonMonitor from './components/MissingPersonMonitor';
import DisabledAssistance from './components/DisabledAssistance';
import KioskIntegration from './components/KioskIntegration';
import AgentButton from './components/AgentButton';
import LiveCrowdDetection from './components/LiveCrowdDetection';
import { useRealTimeData } from './hooks/useRealTimeData';

function App() {
  const [activeItem, setActiveItem] = useState('dashboard');
  const {
    zones,
    alerts,
    parkingSpaces,
    parkingStats,
    queues,
    mobileStats,
    missingPersons,
    assistanceRequests,
    kioskActivities,
    dismissAlert,
  } = useRealTimeData();

  const renderMainContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <EmergencyAlerts alerts={alerts} onDismiss={dismissAlert} />
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <CongestionHeatmap zones={zones} />
              <QueueManagement queues={queues} />
            </div>

            <KioskIntegration 
              activities={kioskActivities} 
              onlineKiosks={8} 
              totalKiosks={10} 
            />
          </div>
        );
      
      case 'crowd':
        return (
          <LiveCrowdDetection />
        );
      
      case 'missing':
        return (
          <div className="space-y-6">
            <EmergencyAlerts 
              alerts={alerts.filter(alert => alert.type === 'missing')} 
              onDismiss={dismissAlert} 
            />
            <MissingPersonMonitor persons={missingPersons} />
          </div>
        );
      
      case 'disabled':
        return (
          <div className="space-y-6">
            <DisabledAssistance requests={assistanceRequests} />
          </div>
        );
      
      case 'emergency':
        return (
          <div className="space-y-6">
            <EmergencyAlerts alerts={alerts} onDismiss={dismissAlert} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MissingPersonMonitor persons={missingPersons} />
              <DisabledAssistance requests={assistanceRequests} />
            </div>
          </div>
        );
      
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)} Management
              </h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      
      <main className="flex-1 ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Temple Management Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Real-time monitoring and management system
            </p>
          </div>

          {renderMainContent()}
        </div>
      </main>

      <AgentButton />
    </div>
  );
}

export default App;