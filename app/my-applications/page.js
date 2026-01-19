"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const API_URL =
  (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001").replace(/\/$/, "");

export default function MyApplications() {
  const router = useRouter();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Private Route Check
  useEffect(() => {
    const loggedIn = Cookies.get("loggedIn") === "true";
    if (!loggedIn) {
      router.push("/login");
      return;
    }

    fetchApplications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ Fetch Applications
  const fetchApplications = async () => {
    try {
      const res = await fetch(`${API_URL}/applications`);
      if (!res.ok) throw new Error("Failed to fetch applications");

      const data = await res.json();
      setApplications(Array.isArray(data) ? data : []);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to load applications. Please start backend server.",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update only status
  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`${API_URL}/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      // ✅ Update local UI instantly
      setApplications((prev) =>
        prev.map((app) =>
          (app.id || app._id) === id ? { ...app, status: newStatus } : app
        )
      );

      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Status updated successfully.",
        timer: 1200,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update status. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Applications
          </h1>
        </div>

        {/* List */}
        <div className="space-y-4">
          {loading ? (
            <p className="text-gray-500 dark:text-gray-400">
              Loading applications...
            </p>
          ) : applications.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No applications yet.
            </p>
          ) : (
            applications.map((app) => {
              const appId = app.id || app._id;

              return (
                <div
                  key={appId}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {app.companyName || app.company || "Unknown Company"}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mt-2 break-all">
                    Job Link:{" "}
                    <a
                      href={app.jobPostLink || app.jobLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {app.jobPostLink || app.jobLink}
                    </a>
                  </p>

                  {app.location && (
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Location: {app.location}
                    </p>
                  )}

                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Job Type: {app.jobType || "Remote"}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Applied:{" "}
                    {app.appliedDateTime
                      ? new Date(app.appliedDateTime).toLocaleString()
                      : app.appliedAt
                      ? new Date(app.appliedAt).toLocaleString()
                      : "N/A"}
                  </p>

                  {/* ✅ Only status update */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Status (Editable)
                    </label>

                    <select
                      value={app.status || "Applied"}
                      onChange={(e) => updateStatus(appId, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="Applied">Applied</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Interview Call">Interview Call</option>
                      <option value="Selected">Selected</option>
                    </select>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
