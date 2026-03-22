import { SearchX } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">
      <div className="w-24 h-24 bg-[#f4f3ff] rounded-full flex items-center justify-center mb-6">
        <SearchX className="w-12 h-12 text-[#565eeb]" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        No lawyers match your filters
      </h3>
      <p className="text-gray-600 text-center max-w-md">
        Try adjusting your search criteria or removing some filters to see more
        results
      </p>
    </div>
  );
}
