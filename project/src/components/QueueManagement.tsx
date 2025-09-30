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
//       case 'critical': return 'bg-gradient-to-r from-red-50 to-red-100';
//       case 'delayed': return 'bg-gradient-to-r from-amber-50 to-amber-100';
//       default: return 'bg-gradient-to-r from-emerald-50 to-emerald-100';
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
import { Clock, Users, AlertCircle, PieChart } from 'lucide-react';

interface Queue {
  id: string;
  name: string;
  current: number;
  waitTime: number;
  status: 'normal' | 'delayed' | 'critical';
  capacity?: number;
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
      case 'critical': return 'bg-gradient-to-br from-red-50 to-red-100 border-red-200';
      case 'delayed': return 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200';
      default: return 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return <AlertCircle className="w-3 h-3" />;
      case 'delayed': return <Clock className="w-3 h-3" />;
      default: return <Users className="w-3 h-3" />;
    }
  };

  // Calculate data for the pie chart
  const getPieChartData = () => {
    const totalQueues = queues.length;
    const critical = queues.filter(q => q.status === 'critical').length;
    const delayed = queues.filter(q => q.status === 'delayed').length;
    const normal = queues.filter(q => q.status === 'normal').length;

    return {
      critical: (critical / totalQueues) * 100,
      delayed: (delayed / totalQueues) * 100,
      normal: (normal / totalQueues) * 100,
      total: totalQueues
    };
  };

  const PieChartComponent = () => {
    const data = getPieChartData();
    const circumference = 2 * Math.PI * 30;
    
    // Calculate stroke dash arrays for each segment
    const criticalLength = (data.critical / 100) * circumference;
    const delayedLength = (data.delayed / 100) * circumference;
    const normalLength = (data.normal / 100) * circumference;

    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-3 border border-blue-200">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-gray-900 text-sm">Queue Distribution</h4>
          <PieChart className="w-4 h-4 text-blue-600" />
        </div>
        
        <div className="flex items-center justify-center space-x-4">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              {/* Normal segment */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#10b981"
                strokeWidth="20"
                fill="none"
                strokeDasharray={`${normalLength} ${circumference}`}
                strokeDashoffset="0"
              />
              {/* Delayed segment */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#f59e0b"
                strokeWidth="20"
                fill="none"
                strokeDasharray={`${delayedLength} ${circumference}`}
                strokeDashoffset={-normalLength}
              />
              {/* Critical segment */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#ef4444"
                strokeWidth="20"
                fill="none"
                strokeDasharray={`${criticalLength} ${circumference}`}
                strokeDashoffset={-(normalLength + delayedLength)}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-md font-bold text-gray-900">{data.total}</div>
                <div className="text-xs text-gray-600">Queues</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="text-xs">
                <div className="font-medium text-gray-900">Normal</div>
                <div className="text-gray-600">{Math.round(data.normal)}%</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <div className="text-xs">
                <div className="font-medium text-gray-900">Delayed</div>
                <div className="text-gray-600">{Math.round(data.delayed)}%</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="text-xs">
                <div className="font-medium text-gray-900">Critical</div>
                <div className="text-gray-600">{Math.round(data.critical)}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <PieChart className="w-4 h-4 text-blue-600" />
          <h3 className="text-sm font-semibold text-gray-900">Queue Analytics</h3>
        </div>
        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {queues.length} Active
        </div>
      </div>
      
      {/* Horizontal Grid for 4 Cards */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {queues.slice(0, 4).map((queue) => (
          <div
            key={queue.id}
            className={`border rounded-lg p-2 transition-all duration-200 hover:shadow-sm ${getCardBackground(queue.status)}`}
          >
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium text-gray-900 text-xs truncate">{queue.name}</h4>
              <div className={`flex items-center space-x-1 px-1.5 py-0.5 rounded-full text-xs border ${getStatusColor(queue.status)}`}>
                {getStatusIcon(queue.status)}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className={`text-base font-bold ${queue.status === 'critical' ? 'text-red-700' : queue.status === 'delayed' ? 'text-amber-700' : 'text-blue-700'}`}>
                  {queue.current}
                </div>
                <div className="text-xs text-gray-600">People</div>
              </div>
              <div className="text-center">
                <div className={`text-base font-bold ${queue.status === 'critical' ? 'text-red-700' : queue.status === 'delayed' ? 'text-amber-700' : 'text-gray-700'}`}>
                  {queue.waitTime}
                </div>
                <div className="text-xs text-gray-600">Min</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pie Chart Below */}
      <PieChartComponent />

      {/* Legend */}
      <div className="flex items-center justify-center space-x-3 mt-3 pt-2 border-t border-gray-100">
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Normal</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Delayed</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          <span className="text-xs text-gray-600">Critical</span>
        </div>
      </div>
    </div>
  );
}