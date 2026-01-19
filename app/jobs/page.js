"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import PostJobModal from "@/components/PostJobModal";

const API_URL =
  (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001").replace(/\/$/, "");

function JobsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = Cookies.get("loggedIn") === "true";

  // ✅ Open modal automatically after login redirect (?post=true)
  useEffect(() => {
    const post = searchParams.get("post");

    if (post === "true" && isLoggedIn) {
      setShowModal(true);

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete("post");
      window.history.replaceState({}, "", newUrl.toString());
    }
  }, [searchParams, isLoggedIn]);

  // ✅ Fetch jobs from API
  const { data: jobs = [], isLoading, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/jobs`);
      if (!response.ok) throw new Error("Failed to fetch jobs");
      return response.json();
    },
  });

  // ✅ Post job to API
  const postJobMutation = useMutation({
    mutationFn: async (jobData) => {
      const response = await fetch(`${API_URL}/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      if (!response.ok) throw new Error("Failed to post job");
      return response.json();
    },

    onSuccess: (newJob) => {
      queryClient.setQueryData(["jobs"], (oldJobs) => {
        return [newJob, ...(oldJobs || [])];
      });

      setShowModal(false);

      Swal.fire({
        icon: "success",
        title: "Job Posted Successfully!",
        text: "Your job post has been added.",
      });
    },

    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to post job. Please try again.",
      });
    },
  });

  const handlePostJob = () => {
    if (!isLoggedIn) {
      router.push("/login?post=true");
      return;
    }
    setShowModal(true);
  };

  if (isLoading) return <div className="text-center py-8">Loading jobs...</div>;

  if (isError)
    return (
      <div className="text-center py-8 text-red-500">Error loading jobs!</div>
    );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Job Posts
          </h1>

          <button
            onClick={handlePostJob}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Post a Job
          </button>
        </div>

        {/* Job Cards */}
        {jobs.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400 py-12">
            No job posts found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id || job._id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                {/* ✅ Position */}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {job.position || "No Position"}
                </h2>

                {/* ✅ Job Link */}
                <p className="text-gray-600 dark:text-gray-400 mb-2 break-all">
                  Link:{" "}
                  <a
                    href={job.jobLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {job.jobLink}
                  </a>
                </p>

                {/* ✅ Location */}
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  Location: {job.location || "Not specified"}
                </p>

                {/* ✅ Job Type */}
                <p className="text-gray-600 dark:text-gray-400">
                  Type: {job.jobType || "Remote"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <PostJobModal
          onClose={() => setShowModal(false)}
          onSubmit={postJobMutation.mutate}
          loading={postJobMutation.isPending}
        />
      )}
    </div>
  );
}

export default function Jobs() {
  return (
    <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
      <JobsContent />
    </Suspense>
  );
}
