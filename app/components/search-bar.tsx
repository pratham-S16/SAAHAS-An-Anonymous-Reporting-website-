import { MapPin, Briefcase, Award, Search } from "lucide-react";
import { Button } from "@/app/ui/button";

interface SearchBarProps {
  onSearch: () => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
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
              className="bg-transparent border-none outline-none w-full text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Specialization Field */}
          <div className="flex items-center gap-3 flex-1 min-w-[200px] px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <Briefcase className="w-5 h-5 text-gray-400" />
            <select className="bg-transparent border-none outline-none w-full text-gray-700 cursor-pointer">
              <option value="">Specialization</option>
              <option value="criminal">Criminal Law</option>
              <option value="corporate">Corporate Law</option>
              <option value="family">Family Law</option>
              <option value="real-estate">Real Estate</option>
              <option value="immigration">Immigration</option>
              <option value="intellectual">Intellectual Property</option>
            </select>
          </div>

          {/* Experience Field */}
          <div className="flex items-center gap-3 flex-1 min-w-[200px] px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <Award className="w-5 h-5 text-gray-400" />
            <select className="bg-transparent border-none outline-none w-full text-gray-700 cursor-pointer">
              <option value="">Experience</option>
              <option value="0-5">0-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10-20">10-20 years</option>
              <option value="20+">20+ years</option>
            </select>
          </div>

          {/* Search Button */}
          <Button
            onClick={onSearch}
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
