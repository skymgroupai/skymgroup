// 🔥 هذا الملف يوضع في: frontend/src/pages/Home.ts

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Filter } from "../components/Filter";

export const Home = () => {
  return `
    ${Navbar()}
    ${Hero()}
    ${Filter()}
    <section class="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-900">
      <!-- Cards will be dynamically inserted here -->
      <div id="cards-container" class="col-span-full flex flex-wrap gap-4 justify-center"></div>
    </section>
  `;
};
