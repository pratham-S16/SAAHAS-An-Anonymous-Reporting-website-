"use client";

import { useEffect, useState } from "react";
import { SearchBar } from "@/app/components/search-bar";
import { FiltersSidebar } from "@/app/components/filters-sidebar";
import { LawyerCard, type Lawyer } from "@/app/components/lawyer-card";
import { ResultsHeader } from "@/app/components/results-header";
import { EmptyState } from "@/app/components/empty-state";
import { LoadingState } from "@/app/components/loading-state";
import { Header } from "../report/components/Header";

type ViewState = "loading" | "results" | "empty";

export default function App() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [viewState, setViewState] = useState<ViewState>("loading");
  const [sortBy, setSortBy] = useState("relevance");

  const [filters, setFilters] = useState({
    state: "",
    specialization: "",
  });

  useEffect(() => {
    fetchLawyers();
  }, []);

  async function fetchLawyers(customFilters = filters) {
    try {
      setViewState("loading");

      const query = new URLSearchParams();

      if (customFilters.state) query.append("state", customFilters.state);
      if (customFilters.specialization)
        query.append("specialization", customFilters.specialization);

      const res = await fetch(`/api/lawyer/allLawyers?${query.toString()}`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      // 🔥 Transform backend → frontend
      const formattedLawyers: Lawyer[] = data.lawyers.map((l: any) => ({
        id: l._id,
        name: l.name,
        initials: l.name
          .split(" ")
          .map((n: string) => n[0])
          .join("")
          .toUpperCase(),
        specialization: Array.isArray(l.specialization)
          ? l.specialization
          : [l.specialization],
        experience: l.experience,
        location: l.state,
        rating: 4.5, // temp (you can add later)
        verified: true,
      }));

      setLawyers(formattedLawyers);

      if (formattedLawyers.length === 0) {
        setViewState("empty");
      } else {
        setViewState("results");
      }

    } catch (err) {
      console.error(err);
      setViewState("empty");
    }
  }

  const handleSearch = (searchData: {
    state: string;
    specialization: string;
  }) => {
    setFilters(searchData);
    fetchLawyers(searchData);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);

    // basic sorting (client-side for now)
    let sorted = [...lawyers];

    if (value === "experience") {
      sorted.sort((a, b) => b.experience - a.experience);
    }

    setLawyers(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 🔍 Search Bar */}
      <SearchBar onSearch={handleSearch} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Sidebar */}
          <aside className="w-full md:w-auto">
            <FiltersSidebar onFilterChange={handleSearch} />
          </aside>

          {/* Results */}
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