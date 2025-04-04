// 🔥 هذا الملف يوضع في: frontend/src/pages/Details.ts

import { Navbar } from "../components/Navbar";

export const Details = (title: string, videos: string[]) => {
  return `
    ${Navbar()}
    <section class="min-h-screen bg-gray-900 text-white p-4">
      <h2 class="text-3xl mb-6 text-center">${title} - Videos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${videos
          .map(
            (video) => `
            <div class="bg-gray-800 p-4 rounded shadow">
              <iframe src="${video}" class="w-full h-48 mb-2 rounded" frameborder="0" allowfullscreen></iframe>
            </div>
          `
          )
          .join("")}
      </div>
    </section>
  `;
};
