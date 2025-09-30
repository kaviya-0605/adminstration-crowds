import React from 'react';
import { Accessibility, MapPin, Clock, User, AlertCircle } from 'lucide-react';

interface AssistanceRequest {
  id: string;
  name: string;
  type: 'wheelchair' | 'mobility' | 'vision' | 'hearing' | 'medical';
  priority: 'high' | 'medium' | 'low';
  location: string;
  status: 'pending' | 'assigned' | 'completed';
  timestamp: string;
  description: string;
  assignedTo?: string;
}

interface DisabledAssistanceProps {
  requests: AssistanceRequest[];
}

export default function DisabledAssistance({ requests }: DisabledAssistanceProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'assigned': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'wheelchair': return '♿';
      case 'mobility': return '🦯';
      case 'vision': return '👁️';
      case 'hearing': return '👂';
      case 'medical': return '🏥';
      default: return '❓';
    }
  };

  const pendingCount = requests.filter(r => r.status === 'pending').length;
  const assignedCount = requests.filter(r => r.status === 'assigned').length;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Disabled Assistance Queue</h3>
        <div className="flex space-x-2">
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
            {pendingCount} Pending
          </span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
            {assignedCount} Assigned
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {requests.map((request) => (
          <div
            key={request.id}
            className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${
              request.priority === 'high' ? 'border-l-4 border-l-red-500' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{getTypeIcon(request.type)}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{request.name}</h4>
                  <p className="text-sm text-gray-600 capitalize">{request.type} assistance</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs border ${getPriorityColor(request.priority)}`}>
                  {request.priority === 'high' && <AlertCircle className="w-3 h-3 inline mr-1" />}
                  {request.priority.toUpperCase()}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(request.status)}`}>
                  {request.status.toUpperCase()}
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-700 mb-3">{request.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-gray-600">
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{request.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{request.timestamp}</span>
              </div>
              {request.assignedTo && (
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>Assigned to: {request.assignedTo}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}














