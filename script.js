// --- C-STYLE PREMIUM CORE ENGINE UTILITIES ---

// Premium Non-Blocking Micro Toast System (Replaces cheap browser alert popups)
window.showPremiumToast = function(title, description, type = 'success') {
  const existingToast = document.getElementById('cstyle-global-toast');
  if(existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.id = 'cstyle-global-toast';
  toast.className = 'fixed top-6 right-6 z-[9999] max-w-sm w-full bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.08)] flex items-start gap-3 transition-all duration-500 opacity-0 translate-y-[-20px]';
  
  const icon = type === 'success' ? '✦' : (type === 'error' ? '⚠️' : 'ℹ️');
  const iconBg = type === 'success' ? 'bg-black text-white' : 'bg-amber-50 text-amber-700';

  toast.innerHTML = `
    <div class="w-8 h-8 rounded-xl ${iconBg} flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
      ${icon}
    </div>
    <div class="flex-grow space-y-0.5">
      <h5 class="text-[11px] font-bold text-gray-900 uppercase tracking-widest">${title}</h5>
      <p class="text-[11px] text-gray-400 font-medium leading-relaxed">${description}</p>
    </div>
  `;

  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.remove('opacity-0', 'translate-y-[-20px]');
    toast.classList.add('opacity-100', 'translate-y-0');
  }, 50);

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-[-20px]');
    setTimeout(() => toast.remove(), 500);
  }, 3500);
};

// Global Sync Engine for Synchronous Header Badges across pages
window.syncGlobalHeaderCounters = function() {
  const cart = JSON.parse(localStorage.getItem("celosia_cart")) || [];
  const wishlist = JSON.parse(localStorage.getItem("celosia_wishlist")) || [];
  
  const cartBadges = document.querySelectorAll('.global-cart-count');
  const wishBadges = document.querySelectorAll('.global-wishlist-count');
  
  const totalQty = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  cartBadges.forEach(el => {
    el.textContent = totalQty;
    el.classList.toggle('hidden', totalQty === 0);
  });

  wishBadges.forEach(el => {
    el.textContent = wishlist.length;
    el.classList.toggle('hidden', wishlist.length === 0);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  if(window.syncGlobalHeaderCounters) { window.syncGlobalHeaderCounters(); }
});
    
