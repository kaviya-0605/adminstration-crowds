// import React from 'react';
// import { Clock, Users, AlertCircle } from 'lucide-react';

// interface Queue {
//   id: string;
//   name: string;
//   current: number;
//   waitTime: number;
//   status: 'normal' | 'delayed' | 'critical';
// }

// interface QueueManagementProps {
//   queues: Queue[];
// }

// export default function QueueManagement({ queues }: QueueManagementProps) {
//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'critical': return 'bg-red-100 text-red-800 border-red-200';
//       case 'delayed': return 'bg-amber-100 text-amber-800 border-amber-200';
//       default: return 'bg-green-100 text-green-800 border-green-200';
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'critical': return <AlertCircle className="w-4 h-4" />;
//       case 'delayed': return <Clock className="w-4 h-4" />;
//       default: return <Users className="w-4 h-4" />;
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <h3 className="text-lg font-semibold text-gray-800 mb-4">Queue Management</h3>
      
//       <div className="space-y-4">
//         {queues.map((queue) => (
//           <div
//             key={queue.id}
//             className="border rounded-lg p-4 hover:shadow-md transition-shadow"
//           >
//             <div className="flex items-center justify-between mb-3">
//               <h4 className="font-medium text-gray-800">{queue.name}</h4>
//               <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(queue.status)}`}>
//                 {getStatusIcon(queue.status)}
//                 <span className="capitalize">{queue.status}</span>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-blue-600">{queue.current}</div>
//                 <div className="text-sm text-gray-600">People in Queue</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-amber-600">{queue.waitTime} min</div>
//                 <div className="text-sm text-gray-600">Est. Wait Time</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







// import React from 'react';
// import { Clock, Users, AlertCircle } from 'lucide-react';

// interface Queue {
//   id: string;
//   name: string;
//   current: number;
//   waitTime: number;
//   status: 'normal' | 'delayed' | 'critical';
// }

// interface QueueManagementProps {
//   queues: Queue[];
// }

// export default function QueueManagement({ queues }: QueueManagementProps) {
//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'critical': return 'bg-red-50 text-red-700 border-red-200';
//       case 'delayed': return 'bg-amber-50 text-amber-700 border-amber-200';
//       default: return 'bg-emerald-50 text-emerald-700 border-emerald-200';
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'critical': return <AlertCircle className="w-4 h-4" />;
//       case 'delayed': return <Clock className="w-4 h-4" />;
//       default: return <Users className="w-4 h-4" />;
//     }
//   };

//   const getQueueColor = (status: string, type: 'current' | 'wait') => {
//     if (type === 'current') {
//       switch (status) {
//         case 'critical': return 'text-red-600';
//         case 'delayed': return 'text-amber-600';
//         default: return 'text-blue-600';
//       }
//     } else {
//       switch (status) {
//         case 'critical': return 'text-red-600';
//         case 'delayed': return 'text-amber-600';
//         default: return 'text-gray-600';
//       }
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl border border-gray-200 p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-lg font-semibold text-gray-900">Queue Status</h3>
//         <div className="text-sm text-gray-500">
//           {queues.length} Active
//         </div>
//       </div>
      
//       <div className="space-y-3">
//         {queues.map((queue) => (
//           <div
//             key={queue.id}
//             className="border border-gray-100 rounded-lg p-4 hover:border-gray-200 transition-colors bg-gray-50"
//           >
//             <div className="flex items-center justify-between mb-3">
//               <h4 className="font-medium text-gray-900">{queue.name}</h4>
//               <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm border ${getStatusColor(queue.status)}`}>
//                 {getStatusIcon(queue.status)}
//                 <span className="capitalize font-medium">{queue.status}</span>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//               <div className="text-center">
//                 <div className={`text-2xl font-bold ${getQueueColor(queue.status, 'current')}`}>
//                   {queue.current}
//                 </div>
//                 <div className="text-sm text-gray-500">In Queue</div>
//               </div>
//               <div className="text-center">
//                 <div className={`text-2xl font-bold ${getQueueColor(queue.status, 'wait')}`}>
//                   {queue.waitTime}
//                 </div>
//                 <div className="text-sm text-gray-500">Wait (min)</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import { Clock, Users, AlertCircle } from 'lucide-react';

// interface Queue {
//   id: string;
//   name: string;
//   current: number;
//   waitTime: number;
//   status: 'normal' | 'delayed' | 'critical';
// }

// interface QueueManagementProps {
//   queues: Queue[];
// }

// export default function QueueManagement({ queues }: QueueManagementProps) {
//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'critical': return 'bg-red-100 text-red-800 border-red-300';
//       case 'delayed': return 'bg-amber-100 text-amber-800 border-amber-300';
//       default: return 'bg-emerald-100 text-emerald-800 border-emerald-300';
//     }
//   };

//   const getCardBackground = (status: string) => {
//     switch (status) {
//       case 'critical': return 'bg-gradient-to-r from-red-25 to-red-50 hover:from-red-50 hover:to-red-100';
//       case 'delayed': return 'bg-gradient-to-r from-amber-25 to-amber-50 hover:from-amber-50 hover:to-amber-100';
//       default: return 'bg-gradient-to-r from-emerald-25 to-emerald-50 hover:from-emerald-50 hover:to-emerald-100';
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'critical': return <AlertCircle className="w-4 h-4" />;
//       case 'delayed': return <Clock className="w-4 h-4" />;
//       default: return <Users className="w-4 h-4" />;
//     }
//   };

//   const getQueueColor = (status: string, type: 'current' | 'wait') => {
//     if (type === 'current') {
//       switch (status) {
//         case 'critical': return 'text-red-700';
//         case 'delayed': return 'text-amber-700';
//         default: return 'text-blue-700';
//       }
//     } else {
//       switch (status) {
//         case 'critical': return 'text-red-700';
//         case 'delayed': return 'text-amber-700';
//         default: return 'text-gray-700';
//       }
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-lg font-semibold text-gray-900">Queue Status</h3>
//         <div className="text-sm text-gray-500">
//           {queues.length} Active
//         </div>
//       </div>
      
//       <div className="space-y-3">
//         {queues.map((queue) => (
//           <div
//             key={queue.id}
//             className={`border rounded-lg p-4 transition-all duration-200 shadow-sm hover:shadow-md ${getCardBackground(queue.status)}`}
//           >
//             <div className="flex items-center justify-between mb-3">
//               <h4 className="font-medium text-gray-900">{queue.name}</h4>
//               <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm border ${getStatusColor(queue.status)}`}>
//                 {getStatusIcon(queue.status)}
//                 <span className="capitalize font-medium">{queue.status}</span>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//               <div className="text-center">
//                 <div className={`text-2xl font-bold ${getQueueColor(queue.status, 'current')}`}>
//                   {queue.current}
//                 </div>
//                 <div className="text-sm text-gray-600">In Queue</div>
//               </div>
//               <div className="text-center">
//                 <div className={`text-2xl font-bold ${getQueueColor(queue.status, 'wait')}`}>
//                   {queue.waitTime}
//                 </div>
//                 <div className="text-sm text-gray-600">Wait (min)</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







import React from 'react';
import { Clock, Users, AlertCircle } from 'lucide-react';

interface Queue {
  id: string;
  name: string;
  current: number;
  waitTime: number;
  status: 'normal' | 'delayed' | 'critical';
}

interface QueueManagementProps {
  queues: Queue[];
}

export default function QueueManagement({ queues }: QueueManagementProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'delayed': return 'bg-amber-100 text-amber-800 border-amber-300';
      default: return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    }
  };

  const getCardBackground = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-gradient-to-r from-red-50 to-red-100';
      case 'delayed': return 'bg-gradient-to-r from-amber-50 to-amber-100';
      default: return 'bg-gradient-to-r from-emerald-50 to-emerald-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return <AlertCircle className="w-4 h-4" />;
      case 'delayed': return <Clock className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const getQueueColor = (status: string, type: 'current' | 'wait') => {
    if (type === 'current') {
      switch (status) {
        case 'critical': return 'text-red-700';
        case 'delayed': return 'text-amber-700';
        default: return 'text-blue-700';
      }
    } else {
      switch (status) {
        case 'critical': return 'text-red-700';
        case 'delayed': return 'text-amber-700';
        default: return 'text-gray-700';
      }
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Queue Status</h3>
        <div className="text-sm text-gray-500">
          {queues.length} Active
        </div>
      </div>
      
      <div className="space-y-3">
        {queues.map((queue) => (
          <div
            key={queue.id}
            className={`border rounded-lg p-4 transition-all duration-200 shadow-sm hover:shadow-md ${getCardBackground(queue.status)}`}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900">{queue.name}</h4>
              <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm border ${getStatusColor(queue.status)}`}>
                {getStatusIcon(queue.status)}
                <span className="capitalize font-medium">{queue.status}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${getQueueColor(queue.status, 'current')}`}>
                  {queue.current}
                </div>
                <div className="text-sm text-gray-600">In Queue</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${getQueueColor(queue.status, 'wait')}`}>
                  {queue.waitTime}
                </div>
                <div className="text-sm text-gray-600">Wait (min)</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}