This is a [Next.js](https://nextjs.org) project for a Job Application Tracker (JobBoard).
## demo
live link : https://job-board-nine-xi.vercel.app/
email : admin@jobboard.com
 pass : 123456



## Features

- **Landing Page**: Public page with navbar, footer, and 7 sections.
- **Login**: Mock login with hardcoded credentials (admin@jobboard.com / 123456).
- **Job List**: Fetch and display job applications from API.
- **Post Job**: Modal form to add new job applications (requires login).
- **Job Details**: View individual job details with external link.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TanStack Query (React Query)
- React Hook Form
- SweetAlert2
- js-cookie

## Getting Started

First, install dependencies:

```bash
npm install
```

Set the API URL (if different from default localhost:3001):

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Run the development server:

```bash
npm run dev
```


Deploy to Vercel or any platform supporting Next.js.
