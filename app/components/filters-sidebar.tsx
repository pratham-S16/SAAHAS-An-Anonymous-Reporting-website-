"use client";

import { useState } from "react";
import { Checkbox } from "@/app/ui/checkbox";
import { Slider } from "@/app/ui/slider";
import { Switch } from "@/app/ui/switch";
import { Label } from "@/app/ui/label";

interface FiltersSidebarProps {
  onFilterChange: (filters: {
    state: string;
    specialization: string;
  }) => void;
}

export function FiltersSidebar({ onFilterChange }: FiltersSidebarProps) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");

  const states = ["New Delhi", "Maharashtra", "Uttar Pradesh", "Bangalore", "Kerala", "Tamil Nadu"];

  const specializations = [
    "Criminal Lawyer",
    "Corporate Lawyer",
    "Family Lawyer",
    "Real Estate",
    "Immigration Lawyer",
    "Intellectual Property Lawyer",
  ];

  // 🔹 Handle State Selection (single select)
  const handleStateChange = (value: string) => {
    const newState = selectedState === value ? "" : value;
    setSelectedState(newState);

    onFilterChange({
      state: newState,
      specialization: selectedSpec,
    });
  };

  // 🔹 Handle Specialization Selection
  const handleSpecChange = (value: string) => {
    const newSpec = selectedSpec === value ? "" : value;
    setSelectedSpec(newSpec);

    onFilterChange({
      state: selectedState,
      specialization: newSpec,
    });
  };

  return (
    <div className="sticky top-[120px] w-full md:w-[280px] bg-white rounded-2xl shadow-sm p-6 space-y-8">

      {/* STATE FILTER */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          State
        </h3>

        <div className="space-y-3">
          {states.map((state) => (
            <div key={state} className="flex items-center gap-3">
              <Checkbox
                id={state}
                checked={selectedState === state}
                onCheckedChange={() => handleStateChange(state)}
              />

              <label
                htmlFor={state}
                className="text-sm text-gray-700 cursor-pointer hover:text-[#565eeb]"
              >
                {state}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* SPECIALIZATION FILTER */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Specialization
        </h3>

        <div className="space-y-3">
          {specializations.map((spec) => (
            <div key={spec} className="flex items-center gap-3">
              <Checkbox
                id={spec}
                checked={selectedSpec === spec}
                onCheckedChange={() => handleSpecChange(spec)}
              />

              <label
                htmlFor={spec}
                className="text-sm text-gray-700 cursor-pointer hover:text-[#565eeb]"
              >
                {spec}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE (UI ONLY FOR NOW) */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Years of Experience
        </h3>

        <div className="pt-2">
          <Slider defaultValue={[5, 20]} max={30} step={1} />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>5 years</span>
            <span>20 years</span>
          </div>
        </div>
      </div>

      {/* AVAILABILITY (UI ONLY FOR NOW) */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Availability
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-gray-700">
              Online Consultation
            </Label>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <Label className="text-sm text-gray-700">
              In-Person Meeting
            </Label>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
}