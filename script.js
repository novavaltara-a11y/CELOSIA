// --- C-STYLE PREMIUM ENTERPRISE UNIFIED ENGINE ---

// 1. INSTAGRAM STYLE GATEKEEPER FORCE PROTOCOL
function enforceGlobalSecurityLock() {
  const activeUser = localStorage.getItem("celosia_user_email");
  const currentPath = window.location.pathname;
  
  // Agar user logged in nahi hai aur login.html par nahi hai, toh bounce back to login
  if (!activeUser && !currentPath.includes("login.html")) {
    window.location.href = "login.html";
  }
}

// 2. UNIFIED GLOBAL PREMIUM NAVIGATION INJECTION (Ensures identical icons on ALL pages)
function injectUnifiedNavigationDocks() {
  const activeUser = localStorage.getItem("celosia_user_email");
  const cart = JSON.parse(localStorage.getItem("celosia_cart")) || [];
  const totalQty = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  // Desktop Header Inner Sync
  const desktopHeaderContainer = document.getElementById("cstyle-global-desktop-header");
  if (desktopHeaderContainer) {
    desktopHeaderContainer.innerHTML = `
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <a href="index.html" class="flex items-center space-x-2.5 flex-shrink-0">
          <div class="w-8 h-8 rounded-full border-2 border-black dark:border-white flex items-center justify-center font-bold text-sm tracking-tighter">C</div>
          <span class="text-base font-bold tracking-[0.25em] uppercase">C-STYLE</span>
        </a>
        <nav class="hidden lg:flex items-center space-x-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
          <a href="index.html" class="text-black dark:text-white transition">New In</a>
          <a href="products.html" class="hover:text-black dark:hover:text-white transition">Catalog</a>
          <a href="orders-tracker.html" class="hover:text-black dark:hover:text-white transition">My Orders</a>
        </nav>
        <div class="flex items-center space-x-6 text-xs font-bold">
          <button onclick="toggleGlobalThemeEngine()" class="text-sm bg-gray-100 dark:bg-zinc-800 p-2 rounded-xl">🌓</button>
          <a href="profile.html" class="hover:text-black dark:hover:text-white transition flex items-center gap-1">👤 Account</a>
          <a href="cart.html" class="hover:text-black dark:hover:text-white transition relative flex items-center gap-1">
            🛒 Bag <span class="bg-black dark:bg-white text-white dark:text-black text-[9px] px-1.5 py-0.5 rounded-full ml-1">${totalQty}</span>
          </a>
        </div>
      </div>
    `;
  }

  // Mobile App Bottom persistent Dock (Fixed Identical Layout across all platforms)
  let mobileDock = document.getElementById("cstyle-global-mobile-dock");
  if (!mobileDock) {
    mobileDock = document.createElement("div");
    mobileDock.id = "cstyle-global-mobile-dock";
    document.body.appendChild(mobileDock);
  }

  // Ensure security block does not break layout if logged out
  if (!activeUser) { mobileDock.className = "hidden"; return; }

  mobileDock.className = "md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-t border-gray-100 dark:border-zinc-900 h-20 px-6 flex items-center justify-between z-50 rounded-t-3xl shadow-2xl transition-all";
  mobileDock.innerHTML = `
    <a href="index.html" class="flex flex-col items-center justify-center ${window.location.pathname.includes('index.html') ? 'text-black dark:text-white' : 'text-gray-400'}">
      <span class="text-lg">🏠</span><span class="text-[9px] font-bold tracking-widest uppercase mt-1">Home</span>
    </a>
    <a href="products.html" class="flex flex-col items-center justify-center ${window.location.pathname.includes('products.html') ? 'text-black dark:text-white' : 'text-gray-400'}">
      <span class="text-lg">🔍</span><span class="text-[9px] font-bold tracking-widest uppercase mt-1">Catalog</span>
    </a>
    <a href="cart.html" class="flex flex-col items-center justify-center ${window.location.pathname.includes('cart.html') ? 'text-black dark:text-white' : 'text-gray-400'} relative">
      <span class="text-lg">🛒</span><span class="absolute top-0 right-1 bg-black dark:bg-white text-white dark:text-black text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">${totalQty}</span>
      <span class="text-[9px] font-bold tracking-widest uppercase mt-1">Bag</span>
    </a>
    <a href="orders-tracker.html" class="flex flex-col items-center justify-center ${window.location.pathname.includes('orders-tracker.html') ? 'text-black dark:text-white' : 'text-gray-400'}">
      <span class="text-lg">📦</span><span class="text-[9px] font-bold tracking-widest uppercase mt-1">Orders</span>
    </a>
    <a href="profile.html" class="flex flex-col items-center justify-center ${window.location.pathname.includes('profile.html') ? 'text-black dark:text-white' : 'text-gray-400'}">
      <span class="text-lg">👤</span><span class="text-[9px] font-bold tracking-widest uppercase mt-1">Profile</span>
    </a>
  `;
}

// 3. THEME MANAGEMENT STATE CONTROLLER
window.toggleGlobalThemeEngine = function() {
  const currentTheme = localStorage.getItem("cstyle_theme") || "light";
  const targetTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem("cstyle_theme", targetTheme);
  applyCachedThemeState();
};

function applyCachedThemeState() {
  const savedTheme = localStorage.getItem("cstyle_theme") || "light";
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// 4. TOAST NOTIFICATION UTILITY BLOCK
window.showPremiumToast = function(title, description, type = 'success') {
  const existingToast = document.getElementById('cstyle-global-toast');
  if(existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.id = 'cstyle-global-toast';
  toast.className = 'fixed top-6 right-6 z-[9999] max-w-sm w-full bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl p-4 shadow-xl flex items-start gap-3 transition-all duration-500 opacity-0 translate-y-[-20px]';
  
  const iconBg = type === 'success' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-red-50 text-red-700';
  toast.innerHTML = `
    <div class="w-8 h-8 rounded-xl ${iconBg} flex items-center justify-center font-bold text-xs flex-shrink-0">✦</div>
    <div>
      <h5 class="text-[11px] font-bold uppercase tracking-widest text-gray-900 dark:text-white">${title}</h5>
      <p class="text-[11px] text-gray-400 font-medium">${description}</p>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => { toast.classList.remove('opacity-0', 'translate-y-[-20px]'); }, 50);
  setTimeout(() => { toast.remove(); }, 3500);
};

// INITIALIZE RUNTIME ATOMIC COMPONENT TRAPS
document.addEventListener("DOMContentLoaded", () => {
  enforceGlobalSecurityLock();
  applyCachedThemeState();
  injectUnifiedNavigationDocks();
});
    
