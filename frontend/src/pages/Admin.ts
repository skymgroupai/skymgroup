// 🔥 هذا الملف يوضع في: frontend/src/pages/Admin.ts

import { Navbar } from "../components/Navbar";

export const Admin = () => {
  return `
    ${Navbar()}
    <section class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h2 class="text-3xl mb-4">Admin Panel</h2>
      <p class="mb-4">Here you can manage models, languages, and jobs.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <a href="/admin/models" class="bg-gray-800 p-4 rounded shadow text-center">Manage AI Models</a>
        <a href="/admin/languages" class="bg-gray-800 p-4 rounded shadow text-center">Manage Languages</a>
        <a href="/admin/jobs" class="bg-gray-800 p-4 rounded shadow text-center">Manage AI Jobs</a>
      </div>
    </section>
  `;
};
