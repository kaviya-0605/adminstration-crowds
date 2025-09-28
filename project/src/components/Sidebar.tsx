import React from 'react';
import { 
  Users, 
  Search, 
  Shield, 
  Accessibility, 
  AlertTriangle, 
  Settings, 
  LogOut,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'crowd', label: 'Crowd Analysis', icon: BarChart3 },
  { id: 'missing', label: 'findind Person', icon: Search },
  { id: 'offender', label: 'Offender Monitoring', icon: Shield },
  { id: 'disabled', label: 'Disabled Assistance', icon: Accessibility },
  { id: 'emergency', label: 'Emergency', icon: AlertTriangle },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'logout', label: 'Logout', icon: LogOut },
];

export default function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-40">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-orange-800">SHREE</h1>
        <p className="text-sm text-gray-600 mt-1">Management System</p>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-all duration-200 ${
                isActive
                  ? 'bg-blue-50 border-r-3 border-blue-500 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-blue-500' : 'text-gray-500'}`} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}