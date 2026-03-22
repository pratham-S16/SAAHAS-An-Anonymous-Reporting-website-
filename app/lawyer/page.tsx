"use client";
import  {useState}  from "react";
import { SearchBar } from "@/app/components/search-bar";
import { FiltersSidebar } from "@/app/components/filters-sidebar";
import { LawyerCard, type Lawyer } from "@/app/components/lawyer-card";
import { ResultsHeader } from "@/app/components/results-header";
import { EmptyState } from "@/app/components/empty-state";
import { LoadingState } from "@/app/components/loading-state";
import { Header } from "../report/components/Header";

// Mock data for lawyers
const mockLawyers: Lawyer[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    initials: "SM",
    specialization: ["Criminal Law", "Corporate Law"],
    experience: 15,
    location: "San Francisco, CA",
    rating: 4.9,
    verified: true,
  },
  {
    id: "2",
    name: "David Chen",
    initials: "DC",
    specialization: ["Intellectual Property"],
    experience: 12,
    location: "New York, NY",
    rating: 4.8,
    verified: true,
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    initials: "ER",
    specialization: ["Family Law", "Immigration"],
    experience: 8,
    location: "Los Angeles, CA",
    rating: 4.7,
    verified: true,
  },
  {
    id: "4",
    name: "Michael Thompson",
    initials: "MT",
    specialization: ["Real Estate", "Corporate Law"],
    experience: 20,
    location: "Austin, TX",
    rating: 5.0,
    verified: true,
  },
  {
    id: "5",
    name: "Jennifer Park",
    initials: "JP",
    specialization: ["Criminal Law"],
    experience: 10,
    location: "Chicago, IL",
    rating: 4.6,
    verified: true,
  },
  {
    id: "6",
    name: "Robert Williams",
    initials: "RW",
    specialization: ["Corporate Law", "Intellectual Property"],
    experience: 18,
    location: "San Francisco, CA",
    rating: 4.9,
    verified: true,
  },
  {
    id: "7",
    name: "Lisa Anderson",
    initials: "LA",
    specialization: ["Family Law"],
    experience: 7,
    location: "Miami, FL",
    rating: 4.5,
    verified: true,
  },
  {
    id: "8",
    name: "James Brown",
    initials: "JB",
    specialization: ["Immigration", "Real Estate"],
    experience: 14,
    location: "New York, NY",
    rating: 4.8,
    verified: true,
  },
];

type ViewState = "loading" | "results" | "empty";

export default function App() {
  const [lawyers] = useState<Lawyer[]>(mockLawyers);
  const [viewState, setViewState] = useState<ViewState>("results");
  const [sortBy, setSortBy] = useState("relevance");

  const handleSearch = () => {
    // Simulate search/loading
    setViewState("loading");
    setTimeout(() => {
      setViewState("results");
    }, 1000);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    // In a real app, this would trigger re-sorting of results
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <Header/>
      <SearchBar onSearch={handleSearch} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Filters Sidebar */}
          <aside className="w-full md:w-auto">
            <FiltersSidebar />
          </aside>

          {/* Right: Results Area */}
          <main className="flex-1 min-w-0">
            {viewState === "loading" && <LoadingState />}

            {viewState === "results" && (
              <>
                <ResultsHeader
                  count={lawyers.length}
                  onSortChange={handleSortChange}
                />
                <div className="space-y-4">
                  {lawyers.map((lawyer) => (
                    <LawyerCard key={lawyer.id} lawyer={lawyer} />
                  ))}
                </div>
              </>
            )}

            {viewState === "empty" && <EmptyState />}
          </main>
        </div>
      </div>
    </div>
  );
}
