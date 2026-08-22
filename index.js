// index.js — renders products, manages cart in localStorage, updates header count
(function () {
  const CART_KEY = 'myntra_cart_v1';

  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch(e){ return {}; }
  }
  function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }

  function updateBagCount() {
    const cart = getCart();
    const count = Object.values(cart).reduce((s, it) => s + (it.qty || 0), 0);
    // find bag anchor
    const bagLink = document.querySelector('.action_bar a[href="bag.html"]') || document.querySelector('#end_icon');
    if (!bagLink) return;
    let badge = bagLink.querySelector('.bag-item-count');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'bag-item-count';
      bagLink.appendChild(badge);
    }
    badge.textContent = count;
    badge.style.display = count ? 'inline-block' : 'none';
  }                                                                                                                                  
  function addToCart(productId) {
    // look for the product in both main items and inserted items
    const allItems = [].concat(window.itemsData || [], window.insertedItems || []);
    const item = allItems.find(p => p.id === productId);
    if (!item) return;
    const cart = getCart();
    if (!cart[productId]) cart[productId] = { ...item, qty: 0 };
    cart[productId].qty = (cart[productId].qty || 0) + 1;
    saveCart(cart);
    updateBagCount();
  }

  function renderProducts() {
    const main = document.querySelector('main') || document.body;
    // create container only if not present
    let container = document.querySelector('.items-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'items-container';
      // place the container before the shopcat or at the end of main
      const shopcat = document.querySelector('.shopcat');
      if (shopcat) shopcat.parentNode.insertBefore(container, shopcat);
      else main.appendChild(container);
    }
    container.innerHTML = '';
    // Render products in the original `itemsData` order so existing positions remain unchanged
    (window.itemsData || []).forEach(prod => {
      const item = document.createElement('div');
      item.className = 'item-container';

      item.innerHTML = `
        <div style="position:relative">
          <img class="item-image" src="${prod.img}" alt="${prod.name}">
          <div class="rating">★ ${prod.rating}</div>
        </div>
        <div class="company-name">${prod.company}</div>
        <div class="item-name">${prod.name}</div>
        <div class="price"><span class="current-price">₹${prod.price}</span> <span class="original-price">₹${prod.original}</span> <span class="discount">${prod.discount}</span></div>
        <button class="btn-add-bag" data-id="${prod.id}">ADD TO BAG</button>
      `;

      container.appendChild(item);
    });

    // attach handlers
    container.querySelectorAll('.btn-add-bag').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = e.currentTarget.getAttribute('data-id');
        addToCart(id);
        e.currentTarget.textContent = 'ADDED';
        setTimeout(()=> e.currentTarget.textContent = 'ADD TO BAG', 900);
      });
    });
  }

  // Render items that should appear at a specific location (after the first poster)
  function renderInsertedItems() {
    const inserted = window.insertedItems || [];
    if (!inserted.length) return;
    const firstPoster = document.querySelector('.bannercontainer');
    const parent = firstPoster ? firstPoster.parentNode : document.querySelector('main') || document.body;
    if (!parent) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'inserted-items-container';
    // simple styling hook — consumers can style this in CSS
    wrapper.style.display = 'flex';
    wrapper.style.gap = '12px';
    wrapper.style.flexWrap = 'wrap';

    inserted.forEach(prod => {
      const item = document.createElement('div');
      item.className = 'item-container inserted-item';
      item.innerHTML = `
        <div style="position:relative">
          <img class="item-image" src="${prod.img}" alt="${prod.name}">
          <div class="rating">★ ${prod.rating}</div>
        </div>
        <div class="company-name">${prod.company}</div>
        <div class="item-name">${prod.name}</div>
        <div class="price"><span class="current-price">₹${prod.price}</span> <span class="original-price">₹${prod.original}</span> <span class="discount">${prod.discount}</span></div>
        <button class="btn-add-bag" data-id="${prod.id}">ADD TO BAG</button>
      `;
      wrapper.appendChild(item);
    });

    // insert wrapper after the first poster
    if (firstPoster && firstPoster.nextSibling) parent.insertBefore(wrapper, firstPoster.nextSibling);
    else parent.appendChild(wrapper);

    // attach handlers to inserted items
    wrapper.querySelectorAll('.btn-add-bag').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = e.currentTarget.getAttribute('data-id');
        addToCart(id);
        e.currentTarget.textContent = 'ADDED';
        setTimeout(()=> e.currentTarget.textContent = 'ADD TO BAG', 900);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Only render the full product grid on the main Myntra page.
    // If the current URL ends with 'Myntram.html' or the document contains
    // an element with class 'myntra-main' (future-proof), render products.
    const isMainPage = location.pathname.endsWith('Myntram.html') || !!document.querySelector('.myntra-main');
    if (isMainPage) {
      renderInsertedItems();
      renderProducts();
    }
    updateBagCount();
  });

  // expose helpers for bag page
  window.__myntraCart = {
    CART_KEY,
    getCart,
    saveCart,
    updateBagCount
  };

})();
