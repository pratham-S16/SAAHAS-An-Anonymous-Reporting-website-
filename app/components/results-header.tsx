import { ArrowUpDown } from "lucide-react";

interface ResultsHeaderProps {
  count: number;
  onSortChange: (value: string) => void;
}

export function ResultsHeader({ count, onSortChange }: ResultsHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        <span className="text-[#565eeb]">{count}</span> Verified Lawyers Found
      </h2>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Sort by:</span>
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 hover:border-[#565eeb] transition-colors cursor-pointer">
          <ArrowUpDown className="w-4 h-4 text-gray-400" />
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-transparent border-none outline-none text-sm text-gray-700 cursor-pointer"
          >
            <option value="relevance">Relevance</option>
            <option value="experience">Experience</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
}
