// 🔥 هذا الملف يوضع في: frontend/src/pages/Signup.ts

import { Navbar } from "../components/Navbar";

export const Signup = () => {
  return `
    ${Navbar()}
    <section class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h2 class="text-3xl mb-4">Sign Up</h2>
      <a href="/auth/google" class="bg-red-600 px-4 py-2 rounded-full mb-4">Sign up with Google</a>
      <form class="flex flex-col space-y-4 w-full max-w-sm">
        <input type="email" placeholder="Email" class="p-2 rounded bg-gray-800 text-white" />
        <input type="password" placeholder="Password" class="p-2 rounded bg-gray-800 text-white" />
        <button type="submit" class="bg-blue-600 px-4 py-2 rounded">Sign Up</button>
      </form>
    </section>
  `;
};
