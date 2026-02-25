"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BackHome } from "@/app/components/BackHome";


export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Store JWT
      localStorage.setItem("token", data.token);

      // Redirect to dashboard
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#565eeb] to-[#7a82ff] px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
           <BackHome/>
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Admin Login
        </h1>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565eeb]/30 focus:border-[#565eeb]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@saahas.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565eeb]/30 focus:border-[#565eeb]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 mt-3 bg-[#565eeb] hover:bg-[#4b53d4] text-white rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}