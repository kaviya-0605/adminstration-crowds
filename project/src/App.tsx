// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import EmergencyAlerts from './components/EmergencyAlerts';
// import CongestionHeatmap from './components/CongestionHeatmap';
// import ParkingGrid from './components/ParkingGrid';
// import QueueManagement from './components/QueueManagement';
// import MobileAppStats from './components/MobileAppStats';
// import MissingPersonMonitor from './components/MissingPersonMonitor';
// import DisabledAssistance from './components/DisabledAssistance';
// import KioskIntegration from './components/KioskIntegration';
// import AgentButton from './components/AgentButton';
// import LiveCrowdDetection from './components/LiveCrowdDetection';
// import { useRealTimeData } from './hooks/useRealTimeData';

// function App() {
//   const [activeItem, setActiveItem] = useState('dashboard');
//   const {
//     zones,
//     alerts,
//     parkingSpaces,
//     parkingStats,
//     queues,
//     mobileStats,
//     missingPersons,
//     assistanceRequests,
//     kioskActivities,
//     dismissAlert,
//   } = useRealTimeData();

//   const renderMainContent = () => {
//     switch (activeItem) {
//       case 'dashboard':
//         return (
//           <div className="space-y-6">
//             <EmergencyAlerts alerts={alerts} onDismiss={dismissAlert} />
            
//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
//               <CongestionHeatmap zones={zones} />
//               <QueueManagement queues={queues} />
//             </div>

//             <KioskIntegration 
//               activities={kioskActivities} 
//               onlineKiosks={8} 
//               totalKiosks={10} 
//             />
//           </div>
//         );
      
//       case 'crowd':
//         return (
//           <LiveCrowdDetection />
//         );
      
//       case 'missing':
//         return (
//           <div className="space-y-6">
//             <EmergencyAlerts 
//               alerts={alerts.filter(alert => alert.type === 'missing')} 
//               onDismiss={dismissAlert} 
//             />
//             <MissingPersonMonitor persons={missingPersons} />
//           </div>
//         );
      
//       case 'disabled':
//         return (
//           <div className="space-y-6">
//             <DisabledAssistance requests={assistanceRequests} />
//           </div>
//         );
      
//       case 'emergency':
//         return (
//           <div className="space-y-6">
//             <EmergencyAlerts alerts={alerts} onDismiss={dismissAlert} />
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <MissingPersonMonitor persons={missingPersons} />
//               <DisabledAssistance requests={assistanceRequests} />
//             </div>
//           </div>
//         );
      
//       default:
//         return (
//           <div className="flex items-center justify-center h-64">
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                 {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)} Management
//               </h2>
//               <p className="text-gray-600">This section is under development.</p>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      
//       <main className="flex-1 ml-64 p-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-6">
//             <h1 className="text-3xl font-bold text-gray-800">Temple Management Dashboard</h1>
//             <p className="text-gray-600 mt-1">
//               Real-time monitoring and management system
//             </p>
//           </div>

//           {renderMainContent()}
//         </div>
//       </main>

//       <AgentButton />
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import EmergencyAlerts from './components/EmergencyAlerts';
// import CongestionHeatmap from './components/CongestionHeatmap';
// import ParkingGrid from './components/ParkingGrid';
// import QueueManagement from './components/QueueManagement';
// import MobileAppStats from './components/MobileAppStats';
// import MissingPersonMonitor from './components/MissingPersonMonitor';
// import DisabledAssistance from './components/DisabledAssistance';
// import KioskIntegration from './components/KioskIntegration';
// import AgentButton from './components/AgentButton';
// import LiveCrowdDetection from './components/LiveCrowdDetection';
// import { useRealTimeData } from './hooks/useRealTimeData';

// function App() {
//   const [activeItem, setActiveItem] = useState('dashboard');
//   const {
//     zones,
//     alerts,
//     parkingSpaces,
//     parkingStats,
//     queues,
//     mobileStats,
//     missingPersons,
//     assistanceRequests,
//     kioskActivities,
//     dismissAlert,
//   } = useRealTimeData();

//   const renderMainContent = () => {
//     switch (activeItem) {
//       case 'dashboard':
//         return (
//           <div className="space-y-6">
//             <EmergencyAlerts alerts={alerts} onDismiss={dismissAlert} />
            
//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
//               <CongestionHeatmap zones={zones} />
//               <QueueManagement queues={queues} />
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <ParkingGrid spaces={parkingSpaces} stats={parkingStats} />
//               <KioskIntegration 
//                 activities={kioskActivities} 
//                 onlineKiosks={8} 
//                 totalKiosks={10} 
//               />
//             </div>

//             {/* Mobile App Statistics Section - Moved to bottom */}
//             <MobileAppStats stats={mobileStats} />
//           </div>
//         );
      
//       case 'crowd':
//         return (
//           <LiveCrowdDetection />
//         );
      
//       case 'parking':
//         return (
//           <div className="space-y-6">
//             <ParkingGrid spaces={parkingSpaces} stats={parkingStats} />
//           </div>
//         );
      
//       case 'missing':
//         return (
//           <div className="space-y-6">
//             <EmergencyAlerts 
//               alerts={alerts.filter(alert => alert.type === 'missing')} 
//               onDismiss={dismissAlert} 
//             />
//             <MissingPersonMonitor persons={missingPersons} />
//           </div>
//         );
      
//       case 'disabled':
//         return (
//           <div className="space-y-6">
//             <DisabledAssistance requests={assistanceRequests} />
//           </div>
//         );
      
//       case 'emergency':
//         return (
//           <div className="space-y-6">
//             <EmergencyAlerts alerts={alerts} onDismiss={dismissAlert} />
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <MissingPersonMonitor persons={missingPersons} />
//               <DisabledAssistance requests={assistanceRequests} />
//             </div>
//           </div>
//         );
      
//       default:
//         return (
//           <div className="flex items-center justify-center h-64">
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                 {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)} Management
//               </h2>
//               <p className="text-gray-600">This section is under development.</p>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      
//       <main className="flex-1 ml-64 p-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-6">
//             <h1 className="text-3xl font-bold text-gray-800">Temple Management Dashboard</h1>
//             <p className="text-gray-600 mt-1">
//               Real-time monitoring and management system
//             </p>
//           </div>

//           {renderMainContent()}
//         </div>
//       </main>

//       <AgentButton />
//     </div>
//   );
// }

// export default App;







// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import EmergencyAlerts from './components/EmergencyAlerts';
// import CongestionHeatmap from './components/CongestionHeatmap';
// import ParkingGrid from './components/ParkingGrid';
// import QueueManagement from './components/QueueManagement';
// import MobileAppStats from './components/MobileAppStats';
// import MissingPersonMonitor from './components/MissingPersonMonitor';
// import DisabledAssistance from './components/DisabledAssistance';
// import KioskIntegration from './components/KioskIntegration';
// import AgentButton from './components/AgentButton';
// import LiveCrowdDetection from './components/LiveCrowdDetection';
// import { useRealTimeData } from './hooks/useRealTimeData';

// function App() {
//   const [activeItem, setActiveItem] = useState('dashboard');
//   const {
//     zones,
//     alerts,
//     parkingSpaces,
//     parkingStats,
//     queues,
//     mobileStats,
//     missingPersons,
//     assistanceRequests,
//     kioskActivities,
//     dismissAlert,
//   } = useRealTimeData();

//   const renderMainContent = () => {
//     switch (activeItem) {
//       case 'dashboard':
//         return (
//           <div className="space-y-6">
//             {/* Emergency Alerts at the top */}
//             <EmergencyAlerts alerts={alerts} onDismiss={dismissAlert} />
            
//             {/* Main Grid - 2 columns */}
//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
//               <div className="space-y-6">
//                 {/* Congestion Heatmap - Top Left */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                   <CongestionHeatmap zones={zones} />
//                 </div>
                
//                 {/* Parking Grid - Bottom Left */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                   <ParkingGrid spaces={parkingSpaces} stats={parkingStats} />
//                 </div>
//               </div>
              
//               <div className="space-y-6">
//                 {/* Kiosk Integration - Top Right */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                   <KioskIntegration 
//                     activities={kioskActivities} 
//                     onlineKiosks={8} 
//                     totalKiosks={10} 
//                   />
//                 </div>
                
//                 {/* Compact Queue Management - Middle Right */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-lg font-semibold text-gray-800">Queue Status</h3>
//                     <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
//                       Live
//                     </span>
//                   </div>
//                   <QueueManagement queues={queues} compact={true} />
//                 </div>
                
//                 {/* Mobile App Stats - Bottom Right */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                   <MobileAppStats stats={mobileStats} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
      
//       case 'crowd':
//         return (
//           <LiveCrowdDetection />
//         );
      
//       case 'parking':
//         return (
//           <div className="space-y-6">
//             <ParkingGrid spaces={parkingSpaces} stats={parkingStats} />
//           </div>
//         );
      
//       case 'missing':
//         return (
//           <div className="space-y-6">
//             <EmergencyAlerts 
//               alerts={alerts.filter(alert => alert.type === 'missing')} 
//               onDismiss={dismissAlert} 
//             />
//             <MissingPersonMonitor persons={missingPersons} />
//           </div>
//         );
      
//       case 'disabled':
//         return (
//           <div className="space-y-6">
//             <DisabledAssistance requests={assistanceRequests} />
//           </div>
//         );
      
//       case 'emergency':
//         return (
//           <div className="space-y-6">
//             <EmergencyAlerts alerts={alerts} onDismiss={dismissAlert} />
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <MissingPersonMonitor persons={missingPersons} />
//               <DisabledAssistance requests={assistanceRequests} />
//             </div>
//           </div>
//         );
      
//       default:
//         return (
//           <div className="flex items-center justify-center h-64">
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                 {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)} Management
//               </h2>
//               <p className="text-gray-600">This section is under development.</p>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      
//       <main className="flex-1 ml-64 p-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Temple Management Dashboard
//                 </h1>
//                 <p className="text-gray-600 mt-2 flex items-center">
//                   <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
//                   Real-time monitoring and management system
//                 </p>
//               </div>
//               <div className="text-right">
//                 <div className="text-sm text-gray-500">Last updated</div>
//                 <div className="text-lg font-semibold text-gray-800">
//                   {new Date().toLocaleTimeString()}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           {renderMainContent()}
//         </div>
//       </main>

//       <AgentButton />
//     </div>
//   );
// }

// export default App;







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

// Import the new utility functions and types
import { generateParkingSpaces, calculateStats } from './utils/parkingData';
import { ParkingSpace, ParkingStats } from './types/parking';

function App() {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [parkingSpaces, setParkingSpaces] = useState<ParkingSpace[]>([]);
  const [parkingStats, setParkingStats] = useState<ParkingStats | null>(null);
  
  const {
    zones,
    alerts,
    queues,
    mobileStats,
    missingPersons,
    assistanceRequests,
    kioskActivities,
    dismissAlert,
  } = useRealTimeData();

  // Initialize parking data
  React.useEffect(() => {
    const spaces = generateParkingSpaces();
    setParkingSpaces(spaces);
    setParkingStats(calculateStats(spaces));
  }, []);

  // Function to refresh parking data
  const refreshParkingData = () => {
    const newSpaces = generateParkingSpaces();
    setParkingSpaces(newSpaces);
    setParkingStats(calculateStats(newSpaces));
  };

  const renderMainContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Emergency Alerts at the top */}
            <EmergencyAlerts alerts={alerts} onDismiss={dismissAlert} />
            
            {/* Main Grid - 2 columns */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="space-y-6">
                {/* Congestion Heatmap - Top Left */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <CongestionHeatmap zones={zones} />
                </div>
                
                {/* Parking Grid - Bottom Left */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  {parkingStats && (
                    <ParkingGrid spaces={parkingSpaces} stats={parkingStats} />
                  )}
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Kiosk Integration - Top Right */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <KioskIntegration 
                    activities={kioskActivities} 
                    onlineKiosks={8} 
                    totalKiosks={10} 
                  />
                </div>
                
                {/* Compact Queue Management - Middle Right */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Queue Status</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      Live
                    </span>
                  </div>
                  <QueueManagement queues={queues} compact={true} />
                </div>
                
                {/* Mobile App Stats - Bottom Right */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <MobileAppStats stats={mobileStats} />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'crowd':
        return (
          <LiveCrowdDetection />
        );
      
      case 'parking':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Parking Management</h2>
              <button
                onClick={refreshParkingData}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Refresh Parking Data
              </button>
            </div>
            {parkingStats && (
              <ParkingGrid spaces={parkingSpaces} stats={parkingStats} />
            )}
          </div>
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
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Temple Management Dashboard
                </h1>
                <p className="text-gray-600 mt-2 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Real-time monitoring and management system
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Last updated</div>
                <div className="text-lg font-semibold text-gray-800">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          {renderMainContent()}
        </div>
      </main>

      <AgentButton />
    </div>
  );
}

export default App;