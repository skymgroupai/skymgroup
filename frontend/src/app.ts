// 🔥 هذا الملف يوضع في: frontend/src/app.ts

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Admin } from "./pages/Admin";
import { Details } from "./pages/Details";

const app = document.getElementById("app");

const render = () => {
  const path = window.location.pathname;
  if (path === "/") {
    app!.innerHTML = Home();
  } else if (path === "/login") {
    app!.innerHTML = Login();
  } else if (path === "/signup") {
    app!.innerHTML = Signup();
  } else if (path === "/admin") {
    app!.innerHTML = Admin();
  } else if (path.startsWith("/details")) {
    const title = "Details Page";
    const videos = [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    ];
    app!.innerHTML = Details(title, videos);
  } else {
    app!.innerHTML = "<h2 class='text-white p-4'>404 - Page Not Found</h2>";
  }
};

window.addEventListener("popstate", render);
document.addEventListener("DOMContentLoaded", render);
