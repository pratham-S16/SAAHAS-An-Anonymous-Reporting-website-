"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

type ReportStatus = "submitted" | "under_review" | "forwarded";

interface ReportData {
  status: ReportStatus;
  createdAt: string;
}

export default function TrackReportPage() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [report, setReport] = useState<ReportData | null>(null);

  const handleTrack = async () => {
    if (!token.trim()) {
      setError("Please enter a tracking token.");
      return;
    }

    setLoading(true);
    setError("");
    setReport(null);

    try {
      const res = await fetch(`/api/report/${token}`)
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Invalid token");
      }

      setReport(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const statusStyles: Record<ReportStatus, string> = {
    submitted: "bg-blue-100 text-blue-700",
    under_review: "bg-amber-100 text-amber-700",
    forwarded: "bg-green-100 text-green-700",
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-7 h-7 text-[#565EEB]" />
          <h1 className="text-2xl font-semibold text-gray-900">
            Track Your Report
          </h1>
        </div>

        <p className="text-gray-600 mb-8">
          Enter your anonymous tracking token to check the current status of your
          report.
        </p>

        {/* Token Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tracking Token
            </label>
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="e.g. SHS-8F2A9X"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#565EEB]/30 focus:border-[#565EEB]"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            onClick={handleTrack}
            disabled={loading}
            className="w-full bg-[#565EEB] hover:bg-[#4a52d6] text-white py-3 rounded-lg transition disabled:opacity-60"
          >
            {loading ? "Checking..." : "Check Status"}
          </button>
        </div>

        {/* Result Card */}
        {report && (
          <div className="mt-8 border rounded-xl p-6 bg-gray-50 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Status</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[report.status]}`}
              >
                {report.status.replace("_", " ").toUpperCase()}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Submitted On</span>
              <span className="text-gray-600">
                {new Date(report.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        )}

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 mt-8 text-center">
          No personal information is required. This token is the only way to
          track your report.
        </p>
      </div>
    </section>
  );
}
