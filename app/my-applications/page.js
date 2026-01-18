'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

export default function MyApplications() {
  const router = useRouter();
  const [applications, setApplications] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nextId, setNextId] = useState(1);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      appliedDateTime: new Date().toISOString().slice(0, 16), // YYYY-MM-DDTHH:MM
    }
  });

  useEffect(() => {
    if (Cookies.get('loggedIn') !== 'true') {
      router.push('/login');
      return;
    }
    const stored = localStorage.getItem('jobApplications');
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setApplications(JSON.parse(stored));
    }
  }, [router]);

  const onSubmit = (data) => {
    const newApp = {
      id: nextId,
      ...data,
    };
    setNextId(nextId + 1);
    const updated = [...applications, newApp];
    setApplications(updated);
    localStorage.setItem('jobApplications', JSON.stringify(updated));
    setIsModalOpen(false);
    reset();
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Application added successfully!',
    });
  };

  const handleAddNew = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Applications</h1>
          <button
            onClick={handleAddNew}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New Application
          </button>
        </div>

        <div className="space-y-4">
          {applications.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No applications yet.</p>
          ) : (
            applications.map((app) => (
              <div key={app.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{app.companyName}</h2>
                <p className="text-gray-600 dark:text-gray-300">Job Link: <a href={app.jobPostLink} target="_blank" rel="noopener noreferrer" className="text-blue-600">{app.jobPostLink}</a></p>
                {app.location && <p className="text-gray-600 dark:text-gray-300">Location: {app.location}</p>}
                <p className="text-gray-600 dark:text-gray-300">Job Type: {app.jobType}</p>
                <p className="text-gray-600 dark:text-gray-300">Applied: {new Date(app.appliedDateTime).toLocaleString()}</p>
                <p className="text-gray-600 dark:text-gray-300">Status: {app.status}</p>
              </div>
            ))
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Add New Application</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Company Name *</label>
                  <input
                    {...register('companyName', { required: 'Company Name is required' })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Job Post Link *</label>
                  <input
                    type="url"
                    {...register('jobPostLink', { required: 'Job Post Link is required' })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.jobPostLink && <p className="text-red-500 text-sm">{errors.jobPostLink.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                  <input
                    {...register('location')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Job Type</label>
                  <select
                    {...register('jobType')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Applied Date & Time</label>
                  <input
                    type="datetime-local"
                    {...register('appliedDateTime')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                  <select
                    {...register('status')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="Applied">Applied</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Interview Call">Interview Call</option>
                    <option value="Selected">Selected</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}