// --- C-STYLE METRIC LUXURY CORE ENGINE ---
const SUPABASE_URL = "https://dnnsppyyffpdldacdtcb.supabase.co";
const SUPABASE_KEY = "sb_publishable_ThipgO2QplsOrnJcgBs_Hg_q6NrhdiD";

function enforceGlobalSecurityLock() {
  const activeUser = localStorage.getItem("celosia_user_email");
  const currentPath = window.location.pathname;
  if (!activeUser && !currentPath.includes("login.html")) {
    window.location.href = "login.html";
  }
}

function injectUnifiedNavigationDocks() {
  const activeUser = localStorage.getItem("celosia_user_email");
  if (!activeUser) return;

  const currentPath = window.location.pathname;
  const cart = JSON.parse(localStorage.getItem("celosia_cart")) || [];
  const totalQty = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  // 1. DESKTOP HEADER (Clean Layout - Heart, Profile aur extra icons permanently removed)
  const desktopHeaderContainer = document.getElementById("cstyle-global-desktop-header");
  if (desktopHeaderContainer) {
    desktopHeaderContainer.innerHTML = `
      <div class="max-w-7xl mx-auto flex items-center justify-between w-full">
        <a href="index.html" class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-full border border-black dark:border-white flex items-center justify-center font-bold text-xs text-black dark:text-white">C</div>
          <span class="text-xs font-bold tracking-[0.3em] uppercase text-black dark:text-white">C-STYLE</span>
        </a>
        <nav class="hidden md:flex items-center space-x-8 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
          <a href="index.html" class="${currentPath.includes('index.html') ? 'text-black dark:text-white' : 'hover:text-black dark:hover:text-white'} transition">New Arrivals</a>
          <a href="products.html" class="${currentPath.includes('products.html') ? 'text-black dark:text-white' : 'hover:text-black dark:hover:text-white'} transition">Catalog</a>
          <a href="orders-tracker.html" class="${currentPath.includes('orders-tracker.html') ? 'text-black dark:text-white' : 'hover:text-black dark:hover:text-white'} transition">Orders</a>
          <a href="profile.html" class="${currentPath.includes('profile.html') ? 'text-black dark:text-white' : 'hover:text-black dark:hover:text-white'} transition">Settings</a>
        </nav>
        <button onclick="toggleGlobalThemeEngine()" class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-zinc-800 text-xs text-black dark:text-white transition">🌓</button>
      </div>
    `;
  }

  // 2. FIXED MOBILE APP HUD DOCK
  let mobileDock = document.getElementById("cstyle-global-mobile-dock");
  if (!mobileDock) {
    mobileDock = document.createElement("div");
    mobileDock.id = "cstyle-global-mobile-dock";
    document.body.appendChild(mobileDock);
  }

  mobileDock.className = "md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-t border-gray-100 dark:border-zinc-900 h-20 px-6 flex items-center justify-between z-50 rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.03)] transition-all";
  
  mobileDock.innerHTML = `
    <a href="index.html" class="flex flex-col items-center justify-center transition ${currentPath.includes('index.html') ? 'text-black dark:text-white scale-105' : 'text-gray-400 dark:text-zinc-600'}">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M7.5 21h12m0 0V9.75m0 11.25s0-6 0-6h-3" /></svg>
      <span class="text-[8px] font-bold tracking-widest uppercase mt-1">Home</span>
    </a>
    <a href="products.html" class="flex flex-col items-center justify-center transition ${currentPath.includes('products.html') ? 'text-black dark:text-white scale-105' : 'text-gray-400 dark:text-zinc-600'}">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
      <span class="text-[8px] font-bold tracking-widest uppercase mt-1">Catalog</span>
    </a>
    <a href="cart.html" class="flex flex-col items-center justify-center relative transition ${currentPath.includes('cart.html') ? 'text-black dark:text-white scale-105' : 'text-gray-400 dark:text-zinc-600'}">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
      <span id="global-dock-cart-counter" class="absolute -top-1 -right-1.5 bg-black dark:bg-white text-white dark:text-black text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">${totalQty}</span>
      <span class="text-[8px] font-bold tracking-widest uppercase mt-1">Bag</span>
    </a>
    <a href="orders-tracker.html" class="flex flex-col items-center justify-center transition ${currentPath.includes('orders-tracker.html') ? 'text-black dark:text-white scale-105' : 'text-gray-400 dark:text-zinc-600'}">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
      <span class="text-[8px] font-bold tracking-widest uppercase mt-1">Orders</span>
    </a>
    <a href="profile.html" class="flex flex-col items-center justify-center transition ${currentPath.includes('profile.html') ? 'text-black dark:text-white scale-105' : 'text-gray-400 dark:text-zinc-600'}">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
      <span class="text-[8px] font-bold tracking-widest uppercase mt-1">Profile</span>
    </a>
  `;
}

// REAL-TIME COUNTER SYNC (Home page bag connection fix)
window.injectUnifiedNavigationDocks = injectUnifiedNavigationDocks;

window.toggleGlobalThemeEngine = function() {
  const currentTheme = localStorage.getItem("cstyle_theme") || "light";
  const targetTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem("cstyle_theme", targetTheme);
  applyCachedThemeState();
  window.location.reload(); // Instantly flips the current interface colors safely
};

function applyCachedThemeState() {
  const savedTheme = localStorage.getItem("cstyle_theme") || "light";
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  enforceGlobalSecurityLock();
  applyCachedThemeState();
  injectUnifiedNavigationDocks();
});
