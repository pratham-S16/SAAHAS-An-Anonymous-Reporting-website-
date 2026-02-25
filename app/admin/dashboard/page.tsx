"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { log } from "console";



interface DecodedToken {
  id: string;
  role: string;
  exp: number;
}

interface Lawyer {
  _id: string;
  name: string;
  email: string;
  state: string;
  specialization: string;
  experience: number;
  barId: string;
}

export default function AdminDashboard() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
   const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  function handleLogout() {
  localStorage.removeItem("token");
  router.replace("/admin/login");
}

  useEffect(() => {
    fetchPendingLawyers();
     const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/admin/login");
      return;
    }
       try {
      const decoded: DecodedToken = jwtDecode(token);

      // Check role
      if (decoded.role !== "ADMIN") {
        router.replace("/admin/login");
        return;
      }

      // Check expiry
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.removeItem("token");
        router.replace("/admin/login");
        return;
      }

      setAuthorized(true);
    } catch {
      localStorage.removeItem("token");
      router.replace("/admin/login");
    }
  }, [router]);
  

  

  if (!authorized) {
    return null; // prevent flicker
  }

  async function fetchPendingLawyers() {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("/api/admin/lawyers/pending", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setLawyers(data.lawyers);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  }

  async function handleAction(
    id: string,
    action: "APPROVED" | "REJECTED"
  ) {
    try {
      const token = localStorage.getItem("token");
      // console.log("id", id, "action", action, "token", token);
      const res = await fetch(
        `/api/admin/lawyers/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ action }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      // Refresh list after action
      fetchPendingLawyers();

    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div className="min-h-screen bg-[#f4f3ff] p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-[#565eeb] mb-6">
          Admin Dashboard – Pending Lawyers
        </h1>
        <button
          onClick={handleLogout}
          className="bg-gray-100 hover:bg-red-100 text-gray-900 hover:text-red-600 px-4 py-2 rounded-lg transition text-sm mb-4 cursor-pointer"
        >
          Logout
        </button>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && lawyers.length === 0 && (
          <p>No pending lawyers.</p>
        )}

        {!loading && lawyers.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f4f3ff] text-left">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">State</th>
                  <th className="p-3">Specialization</th>
                  <th className="p-3">Experience</th>
                  <th className="p-3">Bar ID</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {lawyers.map((lawyer) => (
                  <tr
                    key={lawyer._id}
                    className="border-t"
                  >
                    <td className="p-3">{lawyer.name}</td>
                    <td className="p-3">{lawyer.email}</td>
                    <td className="p-3">{lawyer.state}</td>
                    <td className="p-3">
                      {lawyer.specialization}
                    </td>
                    <td className="p-3">
                      {lawyer.experience} yrs
                    </td>
                    <td className="p-3">{lawyer.barId}</td>

                    <td className="p-3 flex gap-2 justify-center">
                      <button
                        onClick={() =>
                          handleAction(
                            lawyer._id,
                            "APPROVED"
                          )
                        }
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm cursor-pointer"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          handleAction(
                            lawyer._id,
                            "REJECTED"
                          )
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm cursor-pointer"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
        )}
        
      </div>
      
    </div>
  );
}
