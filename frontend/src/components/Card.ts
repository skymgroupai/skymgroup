// 🔥 هذا الملف يوضع في: frontend/src/components/Card.ts

interface CardProps {
    title: string;
    image: string;
    description: string;
    link: string;
  }
  
  export const Card = ({ title, image, description, link }: CardProps) => {
    return `
      <div class="card bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition relative">
        <img src="${image}" alt="${title}" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-white font-bold text-lg mb-2">${title}</h3>
          <p class="text-gray-400 text-sm">${description}</p>
        </div>
        <a href="${link}" class="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 hover:opacity-100 transition">
          <button class="mb-4 px-4 py-2 bg-blue-600 text-white rounded-full">View Details</button>
        </a>
      </div>
    `;
  };
  