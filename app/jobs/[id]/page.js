'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function JobDetails() {
  const { id } = useParams();

  const { data: job, isLoading, error } = useQuery({
    queryKey: ['job', id],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/jobs/${id}`);
      if (!res.ok) throw new Error('Failed to fetch job details');
      return res.json();
    },
  });

  if (isLoading) return <div className="text-center py-8">Loading job details...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading job details</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/jobs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4 inline-block">
          ← Back to Jobs
        </Link>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{job.company}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-600 dark:text-gray-400"><strong>Location:</strong> {job.location}</p>
              <p className="text-gray-600 dark:text-gray-400"><strong>Job Type:</strong> {job.jobType}</p>
              <p className="text-gray-600 dark:text-gray-400"><strong>Status:</strong> {job.status}</p>
              <p className="text-gray-600 dark:text-gray-400"><strong>Applied Date:</strong> {new Date(job.appliedDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400"><strong>Job Link:</strong></p>
              <a
                href={job.jobLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                View Job Posting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}