import { Skeleton } from "@/app/ui/skeleton";

export function LoadingState() {
  return (
    <div className="space-y-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-sm p-6 animate-pulse"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex gap-4">
              {/* Avatar skeleton */}
              <Skeleton className="w-16 h-16 rounded-full flex-shrink-0" />

              <div className="flex-1 space-y-3">
                {/* Name skeleton */}
                <Skeleton className="h-6 w-48" />

                {/* Location skeleton */}
                <Skeleton className="h-4 w-32" />

                {/* Tags skeleton */}
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-6 w-32 rounded-full" />
                </div>

                {/* Experience and rating skeleton */}
                <Skeleton className="h-4 w-40" />
              </div>
            </div>

            {/* Buttons skeleton */}
            <div className="flex md:flex-col gap-3">
              <Skeleton className="h-10 w-32 rounded-xl" />
              <Skeleton className="h-10 w-32 rounded-xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
