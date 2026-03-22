import { Checkbox } from "@/app/ui/checkbox";
import { Slider } from "@/app/ui/slider";
import { Switch } from "@/app/ui/switch";
import { Label } from "@/app/ui/label";

export function FiltersSidebar() {
  return (
    <div className="sticky top-[120px] w-full md:w-[280px] bg-white rounded-2xl shadow-sm p-6 space-y-8">
      {/* State Filter */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          State
        </h3>
        <div className="space-y-3">
          {["California", "New York", "Texas", "Florida", "Illinois"].map(
            (state) => (
              <div key={state} className="flex items-center gap-3">
                <Checkbox id={state} />
                <label
                  htmlFor={state}
                  className="text-sm text-gray-700 cursor-pointer hover:text-[#565eeb] transition-colors"
                >
                  {state}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      {/* Specialization Filter */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Specialization
        </h3>
        <div className="space-y-3">
          {[
            "Criminal Law",
            "Corporate Law",
            "Family Law",
            "Real Estate",
            "Immigration",
            "Intellectual Property",
          ].map((spec) => (
            <div key={spec} className="flex items-center gap-3">
              <Checkbox id={spec} />
              <label
                htmlFor={spec}
                className="text-sm text-gray-700 cursor-pointer hover:text-[#565eeb] transition-colors"
              >
                {spec}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Range */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Years of Experience
        </h3>
        <div className="pt-2">
          <Slider defaultValue={[5, 20]} max={30} step={1} className="mb-2" />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>5 years</span>
            <span>20 years</span>
          </div>
        </div>
      </div>

      {/* Availability Toggle */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Availability
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="online" className="text-sm text-gray-700">
              Online Consultation
            </Label>
            <Switch id="online" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="offline" className="text-sm text-gray-700">
              In-Person Meeting
            </Label>
            <Switch id="offline" />
          </div>
        </div>
      </div>
    </div>
  );
}
