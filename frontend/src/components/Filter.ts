// 🔥 هذا الملف يوضع في: frontend/src/components/Filter.ts

export const Filter = () => {
    return `
      <section class="py-8 px-4 bg-gray-800">
        <div class="flex flex-wrap gap-4 justify-center">
          <button class="filter-btn px-4 py-2 bg-gray-700 text-white rounded-full">All</button>
          <button class="filter-btn px-4 py-2 bg-gray-700 text-white rounded-full">AI Models</button>
          <button class="filter-btn px-4 py-2 bg-gray-700 text-white rounded-full">AI Jobs</button>
          <button class="filter-btn px-4 py-2 bg-gray-700 text-white rounded-full">Programming Languages</button>
        </div>
        <div id="sub-filter" class="mt-4 flex flex-wrap gap-2 justify-center"></div>
      </section>
    `;
  };
  