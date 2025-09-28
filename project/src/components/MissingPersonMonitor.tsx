// import React from 'react';
// import { MapPin, Clock, Phone, Eye } from 'lucide-react';

// interface MissingPerson {
//   id: string;
//   name: string;
//   age: number;
//   description: string;
//   lastSeen: string;
//   location: string;
//   photo: string;
//   reportedBy: string;
//   contact: string;
//   timestamp: string;
// }

// interface MissingPersonMonitorProps {
//   persons: MissingPerson[];
// }

// export default function MissingPersonMonitor({ persons }: MissingPersonMonitorProps) {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-gray-800">finding Person Monitoring</h3>
//         <div className="text-sm text-red-600 font-medium">
//           {persons.length} Active Cases
//         </div>
//       </div>

//       <div className="space-y-4">
//         {persons.map((person) => (
//           <div
//             key={person.id}
//             className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg hover:shadow-md transition-shadow"
//           >
//             <div className="flex items-start space-x-4">
//               <div className="w-16 h-16 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden">
//                 <img
//                   src={person.photo}
//                   alt={person.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               <div className="flex-1 min-w-0">
//                 <div className="flex items-start justify-between mb-2">
//                   <div>
//                     <h4 className="font-semibold text-gray-800">{person.name}</h4>
//                     <p className="text-sm text-gray-600">Age: {person.age} years</p>
//                   </div>
//                   <div className="text-xs text-gray-500 flex items-center space-x-1">
//                     <Clock className="w-3 h-3" />
//                     <span>{person.timestamp}</span>
//                   </div>
//                 </div>
                
//                 <p className="text-sm text-gray-700 mb-3">{person.description}</p>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
//                   <div className="flex items-center space-x-1 text-red-600">
//                     <MapPin className="w-3 h-3" />
//                     <span>Last seen: {person.location}</span>
//                   </div>
//                   <div className="flex items-center space-x-1 text-gray-600">
//                     <Eye className="w-3 h-3" />
//                     <span>{person.lastSeen}</span>
//                   </div>
//                   <div className="flex items-center space-x-1 text-blue-600">
//                     <Phone className="w-3 h-3" />
//                     <span>Contact: {person.contact}</span>
//                   </div>
//                   <div className="text-gray-600">
//                     Reported by: {person.reportedBy}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Eye, Download, ZoomIn, RefreshCw } from 'lucide-react';

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

interface DetectedImage {
  id: string;
  imageUrl: string;
  timestamp: string;
  cameraLocation: string;
  confidence: number;
  similarityScore?: number;
  boundingBox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

interface MissingPersonMonitorProps {
  persons: MissingPerson[];
}

export default function MissingPersonMonitor({ persons }: MissingPersonMonitorProps) {
  const [detectedImages, setDetectedImages] = useState<DetectedImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  // Fetch detected images for a specific missing person
  const fetchDetectedImages = async (personId: string) => {
    setLoading(true);
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`/api/missing-persons/${personId}/detections`);
      if (response.ok) {
        const data = await response.json();
        setDetectedImages(data);
      } else {
        console.error('Failed to fetch detected images');
        setDetectedImages([]);
      }
    } catch (error) {
      console.error('Error fetching detected images:', error);
      setDetectedImages([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all recent detections (alternative approach)
  const fetchAllDetections = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/detections/recent');
      if (response.ok) {
        const data = await response.json();
        setDetectedImages(data);
      }
    } catch (error) {
      console.error('Error fetching detections:', error);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch detections when component mounts
  useEffect(() => {
    fetchAllDetections();
  }, []);

  const handlePersonClick = (personId: string) => {
    setSelectedPerson(selectedPerson === personId ? null : personId);
    if (selectedPerson !== personId) {
      fetchDetectedImages(personId);
    }
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowImageModal(true);
  };

  const downloadImage = (imageUrl: string, detectionId: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `detection-${detectionId}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const refreshDetections = () => {
    if (selectedPerson) {
      fetchDetectedImages(selectedPerson);
    } else {
      fetchAllDetections();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Missing Person Monitoring</h3>
          <p className="text-sm text-gray-600">AI-powered person detection and matching</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={refreshDetections}
            disabled={loading}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <div className="text-sm text-red-600 font-medium">
            {persons.length} Active Cases
          </div>
        </div>
      </div>

      {/* Missing Persons List */}
      <div className="space-y-4 mb-8">
        {persons.map((person) => (
          <div
            key={person.id}
            className={`border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg hover:shadow-md transition-all cursor-pointer ${
              selectedPerson === person.id ? 'ring-2 ring-red-300' : ''
            }`}
            onClick={() => handlePersonClick(person.id)}
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

      {/* Detected Images Section */}
      <div className="border-t pt-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-md font-semibold text-gray-800">
            {selectedPerson 
              ? `Recent Detections for ${persons.find(p => p.id === selectedPerson)?.name}`
              : 'Recent Person Detections'
            }
          </h4>
          <span className="text-sm text-gray-500">
            {detectedImages.length} images found
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <RefreshCw className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : detectedImages.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {detectedImages.map((detection) => (
              <div key={detection.id} className="relative group">
                <div className="bg-gray-100 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-all duration-200">
                  <img 
                    src={detection.imageUrl} 
                    alt={`Detection ${detection.id}`}
                    className="w-full h-24 object-cover cursor-pointer"
                    onClick={() => handleImageClick(detection.imageUrl)}
                  />
                  <div className="p-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-gray-700">
                        {detection.cameraLocation}
                      </span>
                      <span className="text-xs text-green-600 font-medium">
                        {Math.round(detection.confidence * 100)}%
                      </span>
                    </div>
                    {detection.similarityScore && (
                      <div className="text-xs text-blue-600 mb-1">
                        Match: {Math.round(detection.similarityScore * 100)}%
                      </div>
                    )}
                    <div className="text-xs text-gray-500">
                      {new Date(detection.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-1">
                  <button
                    onClick={() => handleImageClick(detection.imageUrl)}
                    className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700"
                    title="View image"
                  >
                    <ZoomIn className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => downloadImage(detection.imageUrl, detection.id)}
                    className="bg-green-600 text-white p-1 rounded hover:bg-green-700"
                    title="Download image"
                  >
                    <Download className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Eye className="w-12 h-12 mx-auto mb-2 text-gray-300" />
            <p>No detected images found</p>
            <p className="text-sm">Images from surveillance cameras will appear here</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {showImageModal && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">Detected Person Image</h3>
              <button
                onClick={() => setShowImageModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <img 
                src={selectedImage} 
                alt="Detected person" 
                className="max-w-full h-auto rounded mx-auto"
              />
            </div>
            <div className="p-4 border-t flex justify-end space-x-2">
              <button
                onClick={() => downloadImage(selectedImage, 'enlarged')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
              <button
                onClick={() => setShowImageModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}