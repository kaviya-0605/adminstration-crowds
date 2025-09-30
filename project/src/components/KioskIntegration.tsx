// import React from 'react';
// import { Monitor, AlertCircle, CheckCircle, Clock, Users } from 'lucide-react';

// interface KioskActivity {
//   id: string;
//   kioskId: string;
//   type: 'registration' | 'emergency' | 'information' | 'complaint';
//   message: string;
//   timestamp: string;
//   status: 'active' | 'resolved' | 'pending';
//   priority: 'high' | 'medium' | 'low';
// }

// interface KioskIntegrationProps {
//   activities: KioskActivity[];
//   onlineKiosks: number;
//   totalKiosks: number;
// }

// export default function KioskIntegration({ activities, onlineKiosks, totalKiosks }: KioskIntegrationProps) {
//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case 'emergency': return <AlertCircle className="w-4 h-4 text-red-500" />;
//       case 'registration': return <Users className="w-4 h-4 text-blue-500" />;
//       case 'information': return <Monitor className="w-4 h-4 text-green-500" />;
//       default: return <Clock className="w-4 h-4 text-amber-500" />;
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'resolved': return <CheckCircle className="w-4 h-4 text-green-500" />;
//       case 'active': return <AlertCircle className="w-4 h-4 text-red-500" />;
//       default: return <Clock className="w-4 h-4 text-amber-500" />;
//     }
//   };

//   const getPriorityColor = (priority: string) => {
//     switch (priority) {
//       case 'high': return 'bg-red-100 text-red-800';
//       case 'medium': return 'bg-amber-100 text-amber-800';
//       default: return 'bg-green-100 text-green-800';
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-800">Kiosk Integration</h3>
//         <div className="flex items-center space-x-4 text-sm">
//           <div className="flex items-center space-x-1">
//             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//             <span>{onlineKiosks}/{totalKiosks} Online</span>
//           </div>
//           <div className="text-green-600 font-medium">Live Feed</div>
//         </div>
//       </div>

//       {/* Kiosk Status */}
//       <div className="grid grid-cols-3 gap-4 mb-6">
//         <div className="bg-blue-50 rounded-lg p-3 text-center">
//           <div className="text-lg font-bold text-blue-600">{onlineKiosks}</div>
//           <div className="text-sm text-gray-600">Online Kiosks</div>
//         </div>
//         <div className="bg-green-50 rounded-lg p-3 text-center">
//           <div className="text-lg font-bold text-green-600">
//             {activities.filter(a => a.type === 'registration').length}
//           </div>
//           <div className="text-sm text-gray-600">Registrations</div>
//         </div>
//         <div className="bg-red-50 rounded-lg p-3 text-center">
//           <div className="text-lg font-bold text-red-600">
//             {activities.filter(a => a.type === 'emergency').length}
//           </div>
//           <div className="text-sm text-gray-600">Emergencies</div>
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <div className="space-y-3 max-h-64 overflow-y-auto">
//         <h4 className="font-medium text-gray-800 mb-3">Recent Activity</h4>
//         {activities.map((activity) => (
//           <div
//             key={activity.id}
//             className="border rounded-lg p-3 hover:shadow-md transition-shadow"
//           >
//             <div className="flex items-start justify-between mb-2">
//               <div className="flex items-center space-x-2">
//                 {getTypeIcon(activity.type)}
//                 <span className="font-medium text-gray-800">
//                   Kiosk {activity.kioskId}
//                 </span>
//                 <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(activity.priority)}`}>
//                   {activity.priority.toUpperCase()}
//                 </span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 {getStatusIcon(activity.status)}
//                 <span className="text-xs text-gray-500">{activity.timestamp}</span>
//               </div>
//             </div>
//             <p className="text-sm text-gray-700">{activity.message}</p>
//             <div className="text-xs text-gray-500 mt-1 capitalize">
//               Type: {activity.type} • Status: {activity.status}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





import React from 'react';
import { Monitor, AlertCircle, CheckCircle, Clock, Users } from 'lucide-react';

interface KioskActivity {
  id: string;
  kioskId: string;
  type: 'registration' | 'emergency' | 'information' | 'complaint';
  message: string;
  timestamp: string;
  status: 'active' | 'resolved' | 'pending';
  priority: 'high' | 'medium' | 'low';
}

interface KioskIntegrationProps {
  activities: KioskActivity[];
  onlineKiosks: number;
  totalKiosks: number;
}

export default function KioskIntegration({ activities, onlineKiosks, totalKiosks }: KioskIntegrationProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'emergency': return <AlertCircle className="w-4 h-4 text-rose-500" />;
      case 'registration': return <Users className="w-4 h-4 text-indigo-500" />;
      case 'information': return <Monitor className="w-4 h-4 text-cyan-500" />;
      default: return <Clock className="w-4 h-4 text-amber-500" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'active': return <AlertCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-amber-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getActivityCardColor = (type: string) => {
    switch (type) {
      case 'emergency':
        return 'bg-rose-50 border-rose-200 hover:border-rose-300';
      case 'registration':
        return 'bg-indigo-50 border-indigo-200 hover:border-indigo-300';
      case 'information':
        return 'bg-cyan-50 border-cyan-200 hover:border-cyan-300';
      case 'complaint':
        return 'bg-amber-50 border-amber-200 hover:border-amber-300';
      default:
        return 'bg-gray-50 border-gray-200 hover:border-gray-300';
    }
  };

  const getTypeTextColor = (type: string) => {
    switch (type) {
      case 'emergency': return 'text-rose-700';
      case 'registration': return 'text-indigo-700';
      case 'information': return 'text-cyan-700';
      case 'complaint': return 'text-amber-700';
      default: return 'text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Kiosk Integration</h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>{onlineKiosks}/{totalKiosks} Online</span>
          </div>
          <div className="text-green-600 font-medium">Live Feed</div>
        </div>
      </div>

      {/* Kiosk Status */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-cyan-50 border border-cyan-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-cyan-600">{onlineKiosks}</div>
          <div className="text-sm text-cyan-700">Online Kiosks</div>
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-indigo-600">
            {activities.filter(a => a.type === 'registration').length}
          </div>
          <div className="text-sm text-indigo-700">Registrations</div>
        </div>
        <div className="bg-rose-50 border border-rose-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-rose-600">
            {activities.filter(a => a.type === 'emergency').length}
          </div>
          <div className="text-sm text-rose-700">Emergencies</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        <h4 className="font-medium text-gray-800 mb-3">Recent Activity</h4>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`border rounded-lg p-3 hover:shadow-md transition-all duration-200 ${getActivityCardColor(activity.type)}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                {getTypeIcon(activity.type)}
                <span className="font-medium text-gray-800">
                  Kiosk {activity.kioskId}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs border ${getPriorityColor(activity.priority)}`}>
                  {activity.priority.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(activity.status)}
                <span className="text-xs text-gray-500">{activity.timestamp}</span>
              </div>
            </div>
            <p className="text-sm text-gray-700">{activity.message}</p>
            <div className={`text-xs font-medium mt-1 capitalize ${getTypeTextColor(activity.type)}`}>
              Type: {activity.type} • Status: {activity.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}