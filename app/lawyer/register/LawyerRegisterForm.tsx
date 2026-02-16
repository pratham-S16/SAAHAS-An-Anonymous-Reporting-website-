"use client";

import { useState } from "react";
// import toast from "react-hot-toast";
import { Toaster, toast} from "react-hot-toast"

export default function LawyerRegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    barId: "",
    state: "",
    specialization: "",
    experience: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/lawyer/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

       setFormData({
      name: "",
      email: "",
      password: "",
      barId: "",
      state: "",
      specialization: "",
      experience: "",
    });
      toast.success("Registration successful. Awaiting admin verification.");
      
    } catch (err: any) {
      toast.error(err.message || "Registration failed.");
       setFormData({
      name: "",
      email: "",
      password: "",
      barId: "",
      state: "",
      specialization: "",
      experience: "",
    });
    }

   

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Input
        label="Bar Council ID"
        name="barId"
        value={formData.barId}
        onChange={handleChange}
      />
      <Input
        label="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
      />
      <Input
        label="Specialization"
        name="specialization"
        value={formData.specialization}
        onChange={handleChange}
      />
      <Input
        label="Years of Experience"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#565eeb] hover:bg-[#4b52d4] cursor-pointer text-white py-3 rounded-xl font-medium transition duration-300 shadow-md"
      >
        {loading ? "Processing..." : "Register as Lawyer"}
      </button>

      <Toaster/>
    </form>
  );
}

function Input({ label, name, value, onChange, type = "text" }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#565eeb] focus:border-transparent outline-none transition"
      />
    </div>
  );
}
