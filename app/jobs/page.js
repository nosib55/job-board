"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import PostJobModal from "@/components/PostJobModal";

// ✅ Demo Jobs (No API)
const demoJobs = [
  {
    id: 1,
    company: "Google",
    location: "Dhaka, Bangladesh",
    jobType: "Remote",
  },
  {
    id: 2,
    company: "Amazon",
    location: "Chattogram, Bangladesh",
    jobType: "Onsite",
  },
  {
    id: 3,
    company: "Microsoft",
    location: "Sylhet, Bangladesh",
    jobType: "Remote",
  },
];

function JobsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = Cookies.get("loggedIn") === "true";

  useEffect(() => {
    if (searchParams.get("post") === "true" && isLoggedIn) {
      setShowModal(true);

      const newUrl = new URL(window.location);
      newUrl.searchParams.delete("post");
      window.history.replaceState({}, "", newUrl);
    }
  }, [searchParams, isLoggedIn]);

  // ✅ Fetch demo jobs instead of API
  const { data: jobs, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      return demoJobs;
    },
  });

  // ✅ Post job mutation (adds to query cache)
  const postJobMutation = useMutation({
    mutationFn: async (jobData) => {
      // simulate new job creation
      const newJob = {
        id: Date.now(),
        ...jobData,
      };
      return newJob;
    },
    onSuccess: (newJob) => {
      // ✅ Update list instantly (no API)
      queryClient.setQueryData(["jobs"], (oldJobs = []) => {
        return [newJob, ...oldJobs];
      });

      setShowModal(false);

      Swal.fire({
        icon: "success",
        title: "Job Posted Successfully!",
        text: "Your job application has been added.",
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Job Applications
          </h1>

          <button
            onClick={handlePostJob}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Post a Job
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs?.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {job.company}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mb-1">
                Location: {job.location}
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Type: {job.jobType}
              </p>

              {/* Job details page removed as per user request */}
            </div>
          ))}
        </div>
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
