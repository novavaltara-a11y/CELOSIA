// script.js - Complete Error-Free Client Side Runtime Module

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. STATE CONFIGURATIONS
  let globalCartCounter = 0;
  let globalWishlistCounter = 0;
  const wishlistedItemsSet = new Set();

  // 2. DOM INTERFACE SELECTORS
  const cartCounterUI = document.getElementById('cart-count');
  const wishlistCounterUI = document.getElementById('wishlist-count');
  const chatBubbleTrigger = document.getElementById('chat-trigger-btn');
  const chatWindowPanel = document.getElementById('chat-window');
  const closeChatPanelBtn = document.getElementById('close-chat');
  const chatInputField = document.getElementById('chat-input-field');
  const sendChatMsgBtn = document.getElementById('send-chat-msg');
  const chatMessagesContainer = document.getElementById('chat-box-messages');
  const automaticQuickChips = document.querySelectorAll('.chat-chip');

  // 3. CART PROGRAMMING SUBSYSTEM
  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart-btn')) {
      globalCartCounter++;
      cartCounterUI.innerText = globalCartCounter;
      
      // Luxury subtle dynamic modal update simulation
      const cardContext = event.target.closest('[data-product-id]');
      const productName = cardContext ? cardContext.querySelector('h3').innerText : 'Item';
      
      // Standard notification validation approach
      alert(`${productName} added securely to checkout cart!`);
    }
  });

  // 4. WISHLIST PROGRAMMING SUBSYSTEM 
  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('wishlist-btn')) {
      const targetBtn = event.target;
      const cardContext = targetBtn.closest('[data-product-id]');
      const productId = cardContext ? cardContext.getAttribute('data-product-id') : Math.random().toString();

      if (wishlistedItemsSet.has(productId)) {
        wishlistedItemsSet.delete(productId);
        globalWishlistCounter--;
        targetBtn.innerText = '🤍';
        targetBtn.style.color = 'black';
      } else {
        wishlistedItemsSet.add(productId);
        globalWishlistCounter++;
        targetBtn.innerText = '❤️';
      }

      // Toggle state representation for metric counter badge
      if (globalWishlistCounter > 0) {
        wishlistCounterUI.classList.remove('hidden');
        wishlistCounterUI.innerText = globalWishlistCounter;
      } else {
        wishlistCounterUI.classList.add('hidden');
      }
    }
  });

  // 5. SHOPPING BOT CHAT UTILITY SYSTEM (INTERACTION CONTROLLER)
  const toggleChatSystem = () => {
    if (chatWindowPanel.classList.contains('hidden')) {
      chatWindowPanel.classList.remove('hidden');
      setTimeout(() => {
        chatWindowPanel.classList.remove('translate-y-10', 'opacity-0');
      }, 10);
    } else {
      chatWindowPanel.classList.add('translate-y-10', 'opacity-0');
      setTimeout(() => {
        chatWindowPanel.classList.add('hidden');
      }, 300);
    }
  };

  chatBubbleTrigger.addEventListener('click', toggleChatSystem);
  closeChatPanelBtn.addEventListener('click', toggleChatSystem);

  // Dynamic Content Response Core Engine
  const executeMessageDelivery = (customText) => {
    const rawMessage = customText || chatInputField.value.trim();
    if (!rawMessage) return;

    // Append outgoing user node
    const userMsgNode = document.createElement('div');
    userMsgNode.className = 'flex items-start justify-end space-x-2 w-full';
    userMsgNode.innerHTML = `
      <div class="bg-black text-white p-3 rounded-xl shadow-sm text-xs max-w-[80%] leading-relaxed">
        <p>${rawMessage}</p>
      </div>
    `;
    chatMessagesContainer.appendChild(userMsgNode);
    if(!customText) chatInputField.value = ''; // clean input
    
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    // Simulate luxury AI response loop delay
    setTimeout(() => {
      const assistantResponseNode = document.createElement('div');
      assistantResponseNode.className = 'flex items-start space-x-2 max-w-[85%]';
      assistantResponseNode.innerHTML = `
        <div class="w-6 h-6 rounded-full bg-black text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">C</div>
        <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
          <p class="text-xs text-gray-800 leading-relaxed">Let me look up that information for you. Our global inventory is processing your selection... ✨</p>
        </div>
      `;
      chatMessagesContainer.appendChild(assistantResponseNode);
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }, 800);
  };

  sendChatMsgBtn.addEventListener('click', () => executeMessageDelivery(null));
  chatInputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') executeMessageDelivery(null);
  });

  // Action chips listener routing
  automaticQuickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      executeMessageDelivery(chip.innerText);
    });
  });

});
      
