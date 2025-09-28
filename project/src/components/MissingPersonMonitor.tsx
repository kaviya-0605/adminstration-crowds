import React from 'react';
import { MapPin, Clock, Phone, Eye } from 'lucide-react';

interface MissingPerson {
  id: string;
  name: string;
  age: number;
  description: string;
  lastSeen: string;
  location: string;
  photo: string;
  reportedBy: string;
  contact: string;
  timestamp: string;
}

interface MissingPersonMonitorProps {
  persons: MissingPerson[];
}

export default function MissingPersonMonitor({ persons }: MissingPersonMonitorProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Missing Person Monitoring</h3>
        <div className="text-sm text-red-600 font-medium">
          {persons.length} Active Cases
        </div>
      </div>

      <div className="space-y-4">
        {persons.map((person) => (
          <div
            key={person.id}
            className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{person.name}</h4>
                    <p className="text-sm text-gray-600">Age: {person.age} years</p>
                  </div>
                  <div className="text-xs text-gray-500 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{person.timestamp}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-3">{person.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-1 text-red-600">
                    <MapPin className="w-3 h-3" />
                    <span>Last seen: {person.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Eye className="w-3 h-3" />
                    <span>{person.lastSeen}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-600">
                    <Phone className="w-3 h-3" />
                    <span>Contact: {person.contact}</span>
                  </div>
                  <div className="text-gray-600">
                    Reported by: {person.reportedBy}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}