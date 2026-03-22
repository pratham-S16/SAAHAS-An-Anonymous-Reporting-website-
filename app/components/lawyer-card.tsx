import { MapPin, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/app/ui/button";
import { Badge } from "@/app/ui/badge";

export interface Lawyer {
  id: string;
  name: string;
  avatar?: string;
  specialization: string[];
  experience: number;
  location: string;
  rating: number;
  verified: boolean;
  initials: string;
}

interface LawyerCardProps {
  lawyer: Lawyer;
}

export function LawyerCard({ lawyer }: LawyerCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 group hover:-translate-y-1">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Avatar and Info */}
        <div className="flex-1 flex gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#565eeb] to-[#7c82f0] flex items-center justify-center text-white text-xl font-semibold">
              {lawyer.avatar ? (
                <img
                  src={lawyer.avatar}
                  alt={lawyer.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                lawyer.initials
              )}
            </div>
            {lawyer.verified && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-xl font-semibold text-[#565eeb] group-hover:text-[#4650d6] transition-colors">
                {lawyer.name}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{lawyer.location}</span>
              </div>
            </div>

            {/* Specializations */}
            <div className="flex flex-wrap gap-2">
              {lawyer.specialization.map((spec, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-[#f4f3ff] text-[#565eeb] hover:bg-[#e8e6ff] rounded-full px-3 py-1"
                >
                  {spec}
                </Badge>
              ))}
            </div>

            {/* Experience and Rating */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-gray-700">
                <span className="font-medium">{lawyer.experience}</span>
                <span>years experience</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-900">
                  {lawyer.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex md:flex-col gap-3 justify-end">
          <Button
            variant="default"
            className="bg-[#565eeb] hover:bg-[#4650d6] text-white rounded-xl px-6 shadow-sm transition-all hover:shadow-md"
          >
            View Profile
          </Button>
          <Button
            variant="outline"
            className="border-[#565eeb] text-[#565eeb] hover:bg-[#f4f3ff] rounded-xl px-6 transition-all"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
