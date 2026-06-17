// 1. Supabase Connection Credentials
const SUPABASE_URL = "https://dnnsppyyffpdldacdtcb.supabase.co";
const SUPABASE_KEY = "sb_publishable_ThipgO2QplsOrnJcgBs_Hg_q6NrhdiD";

// 2. Real-time Array to hold products from database
let PRODUCTS = [];

// Fetch Products from Supabase Database
async function fetchProductsFromDatabase() {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Database connectivity issue");
    }

    const data = await response.json();
    
    // Mapping Supabase columns to match frontend layout structure
    PRODUCTS = data.map(item => ({
      id: item.id,
      name: item.title,
      price: parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0,
      category: item.tag || "Core Collection",
      img: item.image,
      description: item.description
    }));

    console.log("Database Sync Completed! Live Items Loaded:", PRODUCTS);

    // Dispatch event so individual template pages (catalog/details) refresh dynamically
    document.dispatchEvent(new CustomEvent("productsLoaded", { detail: PRODUCTS }));

  } catch (error) {
    console.error("Error fetching live inventory:", error);
    // Fallback Mock System if database is unreachable
    PRODUCTS = [
      { id: 101, name: "Ribbed Knit Top", price: 29.90, category: "Tops", img: "https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=400" },
      { id: 102, name: "Wide-Leg Jeans", price: 49.90, category: "Bottoms", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400" }
    ];
  }
}

// Initialize Local Storage Systems if empty
if (!localStorage.getItem("celosia_cart")) localStorage.setItem("celosia_cart", JSON.stringify([]));
if (!localStorage.getItem("celosia_orders")) {
  const dummyOrders = [
    { orderId: "CLS-9982", date: "June 10, 2026", total: 79.80, items: "Wide-Leg Jeans, Ribbed Knit Top", status: "Delivered" },
    { orderId: "CLS-1024", date: "June 14, 2026", total: 34.90, items: "Linen Blend Shirt", status: "In Transit" }
  ];
  localStorage.setItem("celosia_orders", JSON.stringify(dummyOrders));
}

// GLOBAL SEARCH FUNCTIONALITY
function initializeSearch() {
  const searchInput = document.getElementById("global-search");
  if (!searchInput) return;

  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value.toLowerCase().trim();
      if (query !== "") {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
      }
    }
  });
}

// LIVE CART COUNTER UPDATE
function updateCartCount() {
  const cartCountEl = document.getElementById("cart-count");
  if (!cartCountEl) return;
  const cart = JSON.parse(localStorage.getItem("celosia_cart")) || [];
  cartCountEl.textContent = cart.length;
}

// PROFILE DASHBOARD RENDERER (Amazon Style)
function renderProfileDashboard() {
  const orderListContainer = document.getElementById("amazon-order-list");
  if (!orderListContainer) return;

  const orders = JSON.parse(localStorage.getItem("celosia_orders")) || [];
  
  if (orders.length === 0) {
    orderListContainer.innerHTML = `<p class="text-xs text-gray-400">You haven't placed any orders yet.</p>`;
    return;
  }

  let html = "";
  orders.forEach(order => {
    html += `
      <div class="border border-gray-200 rounded-xl p-4 space-y-3 bg-gray-50/50">
        <div class="flex justify-between items-center text-[11px] font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100 pb-2">
          <div>Order ID: <span class="text-black">${order.orderId}</span></div>
          <div>Date: <span class="text-black">${order.date}</span></div>
        </div>
        <div class="flex justify-between items-start pt-1">
          <div>
            <h4 class="text-xs font-bold text-gray-800">${order.items}</h4>
            <p class="text-[11px] text-gray-400 mt-0.5">Status: <span class="text-green-600 font-bold">${order.status}</span></p>
          </div>
          <div class="text-xs font-bold text-gray-900">$${order.total.toFixed(2)}</div>
        </div>
      </div>
    `;
  });
  orderListContainer.innerHTML = html;
}

// Initialize everything on DOM Load
document.addEventListener("DOMContentLoaded", async () => {
  initializeSearch();
  updateCartCount();
  renderProfileDashboard();
  // Fetch live products instantly from Supabase
  await fetchProductsFromDatabase();
});
      
