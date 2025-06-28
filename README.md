## Features

### Authentication

- User registration and login using Supabase Auth.
- Session persistence across page reloads.
- Profile page with editable full name.
- Secure logout with toast feedback.

### Project Management

- Create new projects.
- View your personal list of projects.
- View project details.
- Delete projects with confirmation prompts.
- Real-time UI updates after changes.

### Task Management

- Add tasks to a project using a modal.
- Edit tasks: name, description, priority, and status.
- Delete tasks with confirmation.
- View and update tasks directly in a modal.
- All data synced with Supabase and local state.

### Dashboard Statistics

- Total number of projects.
- Total number of tasks.
- Task breakdown by status: Pending, In Process, Done.
- Overall progress percentage.
- Displayed in a clean and responsive widget.

### User Experience

- Responsive design for desktop and mobile.
- Reusable modal components for tasks.
- Custom toast notifications for all actions.
- Fixed minimalist Navbar layout.
- Modern UI with Tailwind CSS.
- Google Fonts (Manrope, Geist) integration.

### State Management

- Global state handled with Zustand.
- Local state synced with Supabase database.
- Modular structure for profile, projects, and tasks.

---

## Tech Stack

- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- State Management: [Zustand](https://zustand-demo.pmnd.rs/)
- Backend & Auth: [Supabase](https://supabase.com/)
- Notifications: [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- Fonts: [Google Fonts (Manrope, Geist)](https://fonts.google.com/)

---

# Installation

Follow these steps to run the project locally:

1. **Clone the repository:**

```bash
git clone https://github.com/martinvruiz/projectmanager.git
cd projectmanager
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_KEY=your-key
```

4. **Start the development serve**

```bash
npm run dev

```
