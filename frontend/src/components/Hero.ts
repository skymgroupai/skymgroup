// 🔥 هذا الملف يوضع في: frontend/src/components/Hero.ts

export const Hero = () => {
    return `
      <section class="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div class="text-center">
          <h1 class="text-white text-4xl md:text-6xl font-bold mb-4">Welcome to SkymGroup</h1>
          <p class="text-gray-300 text-lg md:text-xl">Explore AI Models, Jobs & Programming Languages</p>
        </div>
        <aside class="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
          ${[1, 2, 3, 4, 5, 6, 7]
            .map(
              (num) =>
                `<img src="/public/images/side${num}.jpg" alt="Sidebar Image ${num}" class="w-12 h-12 rounded-full shadow-md" />`
            )
            .join("")}
        </aside>
      </section>
    `;
  };
  