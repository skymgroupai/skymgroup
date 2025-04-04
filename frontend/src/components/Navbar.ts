// 🔥 هذا الملف يوضع في: frontend/src/components/Navbar.ts

export const Navbar = () => {
    return `
      <nav class="navbar fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-900 shadow-lg z-50 transition-all duration-300">
        <div class="flex items-center space-x-4">
          <img src="/public/images/logo.png" alt="Logo" class="w-10 h-10 rounded-full" />
          <span class="text-white font-bold text-xl">SkymGroup</span>
        </div>
        <div class="flex items-center space-x-4">
          <a href="/" class="text-white">Home</a>
          <a href="/services" class="text-white">Services</a>
          <a href="/about" class="text-white">About</a>
          <a href="/contact" class="text-white">Contact</a>
          <a href="/blogs" class="text-white">Blogs</a>
          <a href="/login" class="text-white">Login</a>
          <a href="/signup" class="text-white">Sign-up</a>
        </div>
      </nav>
    `;
  };
  