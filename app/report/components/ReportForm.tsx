"use client";
import React, { useState } from 'react';
import { Upload, Info } from 'lucide-react';
import { InfoModal } from './InfoModal';
import { Toaster, toast} from "react-hot-toast"

export function ReportForm() {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [incidentDate, setIncidentDate] = useState('');
  const [incidentTime, setIncidentTime] = useState('');
  const [pressure, setPressure] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [policeStation, setPoliceStation] = useState('');
  const [consent, setConsent] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const files = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const uploadFiles = async () => {
  if (uploadedFiles.length === 0) return [];

  const formData = new FormData();
  uploadedFiles.forEach(file => formData.append("files", file));

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error);

  return data.files; // array of URLs
};


  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setIsSubmitting(true);
    const evidenceUrls = await uploadFiles();

    const res = await fetch("/api/report", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      category,
      description,
      incidentDate,
      incidentTime,
      state,
      district,
      policeStation,
      email,
      pressure,
      evidenceFiles: evidenceUrls,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    toast.success("Report submitted. Your tracking token: " + data.token,{
      duration:10000,
    });
  } else {
    toast.error(data.error || "Something went wrong");
  }
    
    // Mock submission
    // alert('Report submitted successfully. Your tracking token: ' + Math.random().toString(36).substring(2, 15).toUpperCase());
    
    // Reset form
    setCategory('');
    setDescription('');
    setEmail('');
    setIncidentDate('');
    setIncidentTime('');
    setPressure('');
    setState('');
    setDistrict('');
    setPoliceStation('');
    setConsent(false);
    setUploadedFiles([]);
    setIsSubmitting(false);
  };

  const isFormValid = category && description.trim().length > 0 && state && district && policeStation && consent;

  return (
    <>
      <section className="w-full py-4 md:py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100/50 p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Category Selection */}
              <div className="space-y-3">
                <label htmlFor="category" className="block text-gray-900">
                  What type of incident would you like to report?
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565EEB]/20 focus:border-[#565EEB] transition-all"
                  required
                >
                  <option value="">Select a category...</option>
                  <option value="harassment">Harassment</option>
                  <option value="abuse">Abuse</option>
                  <option value="threat">Threat</option>
                  <option value="workplace">Workplace</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <label htmlFor="description" className="block text-gray-900">
                  Please describe what happened
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what happened in your own words…"
                  rows={8}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565EEB]/20 focus:border-[#565EEB] transition-all resize-none"
                  required
                />
                <p className="text-sm text-gray-500">
                  Take your time. Share as much or as little as you feel comfortable with.
                </p>
              </div>

              {/* Date and Time Section */}
              <div className="space-y-3">
                <label className="block text-gray-900">
                  Approximate date and time of incident
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="date"
                      id="incident-date"
                      max={new Date().toISOString().split("T")[0]}
                      value={incidentDate}
                      onChange={(e) => setIncidentDate(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565EEB]/20 focus:border-[#565EEB] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="time"
                      id="incident-time"
                      value={incidentTime}
                      onChange={(e) => setIncidentTime(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565EEB]/20 focus:border-[#565EEB] transition-all"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  If you don't remember the exact time, an approximation is helpful
                </p>
              </div>

              {/* Location Details */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <h3 className="text-gray-900" style={{ fontWeight: 500 }}>
                  Location Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="state" className="block text-gray-700">
                      State <span className="text-[#565EEB]">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="e.g., Maharashtra"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565EEB]/20 focus:border-[#565EEB] transition-all"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="district" className="block text-gray-700">
                      District <span className="text-[#565EEB]">*</span>
                    </label>
                    <input
                      type="text"
                      id="district"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="e.g., Mumbai"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565EEB]/20 focus:border-[#565EEB] transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="police-station" className="block text-gray-700">
                    Nearest police station <span className="text-[#565EEB]">*</span>
                  </label>
                  <input
                    type="text"
                    id="police-station"
                    value={policeStation}
                    onChange={(e) => setPoliceStation(e.target.value)}
                    placeholder="Enter the nearest police station"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565EEB]/20 focus:border-[#565EEB] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email (Optional) */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <label htmlFor="email" className="block text-gray-900">
                  Email address <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565EEB]/20 focus:border-[#565EEB] transition-all"
                />
                <p className="text-sm text-gray-500">
                  Providing an email is completely optional. We'll only use it to send you updates if you choose to share it.
                </p>
              </div>

              {/* Pressure from someone (Optional) */}
              <div className="space-y-3">
                <label htmlFor="pressure" className="block text-gray-900">
                  Any kind of pressure from someone? <span className="text-gray-500">(optional)</span>
                </label>
                <textarea
                  id="pressure"
                  value={pressure}
                  onChange={(e) => setPressure(e.target.value)}
                  placeholder="If you're experiencing any pressure or threats related to this incident, please share here…"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565EEB]/20 focus:border-[#565EEB] transition-all resize-none"
                />
                <p className="text-sm text-gray-500">
                  This information helps us understand the urgency and provide appropriate support.
                </p>
              </div>

              {/* File Upload */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <label className="block text-gray-900">
                  Supporting evidence <span className="text-gray-500">(optional)</span>
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                    dragActive 
                      ? 'border-[#565EEB] bg-indigo-50' 
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="file"
                    id="file-upload"
                    multiple
                    onChange={handleFileInput}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*,audio/*,.pdf,.doc,.docx"
                  />
                  <Upload className="w-10 h-10 mx-auto mb-3 text-gray-400" strokeWidth={1.5} />
                  <p className="text-gray-600 mb-1">
                    Drag & drop files here, or click to browse
                  </p>
                  <p className="text-sm text-gray-500">
                    Images, audio, or documents
                  </p>
                </div>
                
                {uploadedFiles.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-indigo-50 px-4 py-2 rounded-lg">
                        <span className="text-sm text-gray-700 truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== index))}
                          className="text-sm text-gray-500 hover:text-gray-700 ml-2"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Consent Checkbox */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-[#565EEB] focus:ring-2 focus:ring-[#565EEB]/20 cursor-pointer"
                    required
                  />
                  <span className="text-gray-700 select-none">
                    I understand this report is anonymous and truthful to the best of my knowledge
                  </span>
                </label>
              </div>

              {/* Submit Section */}
              <div className="space-y-4 pt-2">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg transition-all ${
                    isFormValid && !isSubmitting
                      ? 'bg-[#565EEB] hover:bg-[#4850d4] text-white cursor-pointer shadow-md hover:shadow-lg'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit Anonymously
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full text-[#565EEB] hover:text-[#4850d4] transition-colors flex items-center justify-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  What happens after submission?
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Toaster/>
    </>
  );
}