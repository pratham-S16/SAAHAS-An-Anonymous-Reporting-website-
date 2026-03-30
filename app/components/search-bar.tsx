"use client";

import { useState } from "react";
import { MapPin, Briefcase, Award, Search } from "lucide-react";
import { Button } from "@/app/ui/button";

interface SearchBarProps {
  onSearch: (data: {
    state: string;
    specialization: string;
  }) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [stateValue, setStateValue] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState(""); // optional (future use)

  const handleSubmit = () => {
    onSearch({
      state: stateValue.trim(),
      specialization: specialization.trim(),
    });
  };

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-white rounded-2xl shadow-md p-4 flex flex-wrap md:flex-nowrap gap-3 items-center">

          {/* Location Field */}
          <div className="flex items-center gap-3 flex-1 min-w-[200px] px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <MapPin className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Specialization Field */}
          <div className="flex items-center gap-3 flex-1 min-w-[200px] px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <Briefcase className="w-5 h-5 text-gray-400" />
            <select
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-gray-700 cursor-pointer"
            >
              <option value="">Specialization</option>
              <option value="Criminal">Criminal Lawyer</option>
              <option value="Corporate">Corporate Lawyer</option>
              <option value="Family">Family Lawyer</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Immigration">Immigration</option>
              <option value="Intellectual Property">Intellectual Property</option>
            </select>
          </div>

          {/* Experience Field (optional for future) */}
          <div className="flex items-center gap-3 flex-1 min-w-[200px] px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <Award className="w-5 h-5 text-gray-400" />
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-gray-700 cursor-pointer"
            >
              <option value="">Experience</option>
              <option value="0-5">0-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10-20">10-20 years</option>
              <option value="20+">20+ years</option>
            </select>
          </div>

          {/* Search Button */}
          <Button
            onClick={handleSubmit}
            className="bg-[#565eeb] hover:bg-[#4650d6] text-white px-8 py-6 rounded-xl shadow-md transition-all hover:shadow-lg"
          >
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}