// import React from 'react';
// import { AlertTriangle, Clock, MapPin, X } from 'lucide-react';

// interface Alert {
//   id: string;
//   type: 'fire' | 'medical' | 'missing' | 'security';
//   message: string;
//   location: string;
//   timestamp: string;
//   priority: 'high' | 'medium' | 'low';
// }

// interface EmergencyAlertsProps {
//   alerts: Alert[];
//   onDismiss: (id: string) => void;
// }

// const alertColors = {
//   fire: 'bg-red-500 border-red-600',
//   medical: 'bg-orange-500 border-orange-600',
//   missing: 'bg-amber-500 border-amber-600',
//   security: 'bg-purple-500 border-purple-600',
// };

// const priorityColors = {
//   high: 'text-red-600 bg-red-100',
//   medium: 'text-amber-600 bg-amber-100',
//   low: 'text-green-600 bg-green-100',
// };

// export default function EmergencyAlerts({ alerts, onDismiss }: EmergencyAlertsProps) {
//   if (alerts.length === 0) return null;

//   return (
//     <div className="mb-6">
//       {alerts.map((alert) => (
//         <div
//           key={alert.id}
//           className={`${alertColors[alert.type]} text-white p-4 rounded-lg mb-3 shadow-lg animate-pulse`}
//         >
//           <div className="flex items-start justify-between">
//             <div className="flex items-start space-x-3">
//               <AlertTriangle className="w-6 h-6 mt-0.5 flex-shrink-0" />
//               <div className="flex-1">
//                 <div className="flex items-center space-x-2 mb-2">
//                   <span className="font-bold text-sm uppercase tracking-wide">
//                     {alert.type} Alert
//                   </span>
//                   <span className={`px-2 py-1 text-xs rounded-full ${priorityColors[alert.priority]}`}>
//                     {alert.priority.toUpperCase()}
//                   </span>
//                 </div>
//                 <p className="font-medium mb-2">{alert.message}</p>
//                 <div className="flex items-center space-x-4 text-sm opacity-90">
//                   <div className="flex items-center space-x-1">
//                     <MapPin className="w-4 h-4" />
//                     <span>{alert.location}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Clock className="w-4 h-4" />
//                     <span>{alert.timestamp}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => onDismiss(alert.id)}
//               className="text-white hover:text-gray-200 transition-colors ml-4"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }






import React from 'react';
import { AlertTriangle, Clock, MapPin, X } from 'lucide-react';

interface Alert {
  id: string;
  type: 'fire' | 'medical' | 'missing' | 'security';
  message: string;
  location: string;
  timestamp: string;
  priority: 'high' | 'medium' | 'low';
}

interface EmergencyAlertsProps {
  alerts: Alert[];
  onDismiss: (id: string) => void;
}

const alertColors = {
  fire: 'bg-red-500 border-red-600',
  medical: 'bg-orange-500 border-orange-600',
  missing: 'bg-amber-500 border-amber-600',
  security: 'bg-purple-500 border-purple-600',
};

const priorityColors = {
  high: 'text-red-600 bg-red-100',
  medium: 'text-amber-600 bg-amber-100',
  low: 'text-green-600 bg-green-100',
};

export default function EmergencyAlerts({ alerts, onDismiss }: EmergencyAlertsProps) {
  if (alerts.length === 0) return null;

  return (
    <div className="mb-6">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`${alertColors[alert.type]} text-white p-3 rounded-lg mb-2 shadow-lg animate-pulse`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-bold text-xs uppercase tracking-wide">
                    {alert.type} Alert
                  </span>
                  <span className={`px-1.5 py-0.5 text-xs rounded-full ${priorityColors[alert.priority]}`}>
                    {alert.priority.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm font-medium mb-1">{alert.message}</p>
                <div className="flex items-center space-x-3 text-xs opacity-90">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{alert.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{alert.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => onDismiss(alert.id)}
              className="text-white hover:text-gray-200 transition-colors ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}