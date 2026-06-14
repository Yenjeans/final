document.addEventListener("DOMContentLoaded", () => {
  // Render Header and Footer
  renderHeader();
  renderFooter();

  // Initialize Cart
  initCart();

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("fa-times");
    });
  }

  // Header Scroll Effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

/* --- RENDER HEADER --- */
function renderHeader() {
  const headerContainer = document.getElementById("site-header");
  if (!headerContainer) return;

  // Find active nav item
  const currentPath = window.location.pathname;
  const pageName = currentPath.split("/").pop() || "index.html";

  const navItems = [
    { name: "首頁", link: "index.html", activeName: "index.html" },
    { name: "公司簡介", link: "about.html", activeName: "about.html" },
    { name: "休閒鞋子", link: "casual.html", activeName: "casual.html" },
    { name: "正式鞋子", link: "formal.html", activeName: "formal.html" },
    { name: "配件", link: "accessories.html", activeName: "accessories.html" },
    { name: "其它類", link: "others.html", activeName: "others.html" },
    { name: "聯絡我們", link: "contact.html", activeName: "contact.html" }
  ];

  const logoPath = "assets/images/logo.png";

  headerContainer.innerHTML = `
    <div class="container header-container">
      <a href="index.html" class="logo">
        <img src="${logoPath}" alt="Aura Steps Logo" class="logo-img">
        <span class="logo-text">Aura Steps</span>
      </a>
      
      <ul class="nav-links">
        ${navItems.map(item => `
          <li class="${pageName === item.activeName ? 'active' : ''}">
            <a href="${item.link}">${item.name}</a>
          </li>
        `).join('')}
      </ul>
      
      <div class="header-actions">
        <button class="action-btn open-cart-btn" id="open-cart" aria-label="Open Shopping Cart">
          <i class="fas fa-shopping-bag"></i>
          <span class="cart-count" id="cart-badge">0</span>
        </button>
        <button class="action-btn menu-toggle" aria-label="Toggle Navigation Menu">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  `;
}

/* --- RENDER FOOTER --- */
function renderFooter() {
  const footerContainer = document.getElementById("site-footer");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>關於 Aura Steps</h4>
          <p>專為現代女性打造的高質感鞋履與配件品牌。我們深信，一雙好鞋能帶妳走向更美好的地方。結合人體工學與頂級工藝，讓優雅與舒適並存。</p>
          <div class="social-links">
            <a href="#" class="social-btn" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-btn" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-btn" aria-label="Line"><i class="fab fa-line"></i></a>
          </div>
        </div>
        
        <div class="footer-col">
          <h4>產品分類</h4>
          <ul>
            <li><a href="casual.html">休閒鞋子 (Casual)</a></li>
            <li><a href="formal.html">正式鞋子 (Formal)</a></li>
            <li><a href="accessories.html">精選配件 (Accessories)</a></li>
            <li><a href="others.html">其它類 (Others)</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>客戶服務</h4>
          <ul>
            <li><a href="about.html">關於我們</a></li>
            <li><a href="contact.html">聯絡我們</a></li>
            <li><a href="#">購物與配送須知</a></li>
            <li><a href="#">退換貨政策</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>訂閱我們</h4>
          <p>訂閱以獲取最新商品資訊與專屬優惠代碼。</p>
          <form class="newsletter-form" onsubmit="event.preventDefault(); alert('感謝您的訂閱！我們已將專屬優惠碼發送至您的信箱。');">
            <input type="email" class="newsletter-input" placeholder="請輸入電子信箱" required>
            <button type="submit" class="newsletter-submit">訂閱</button>
          </form>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 Aura Steps. All rights reserved. 版權所有 翻印必究.</p>
        <p>台北市大安區忠孝東路三段1號 (台北科技大學旁)</p>
      </div>
    </div>
  `;
}

/* --- SHOPPING CART STATE MANAGEMENT --- */
let cart = [];

function initCart() {
  // Load from LocalStorage
  const savedCart = localStorage.getItem("aura_steps_cart");
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }

  // Inject Cart Drawer HTML
  injectCartDrawer();

  // Setup Event Listeners
  const openCartBtn = document.getElementById("open-cart");
  const closeCartBtn = document.getElementById("close-cart");
  const backdrop = document.getElementById("cart-backdrop");
  const cartDrawer = document.getElementById("cart-drawer");

  if (openCartBtn && cartDrawer && backdrop) {
    openCartBtn.addEventListener("click", () => {
      cartDrawer.classList.add("open");
      backdrop.classList.add("open");
      renderCartItems();
    });
  }

  if (closeCartBtn && cartDrawer && backdrop) {
    closeCartBtn.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      backdrop.classList.remove("open");
    });
  }

  if (backdrop && cartDrawer) {
    backdrop.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      backdrop.classList.remove("open");
    });
  }

  updateCartBadge();
}

function injectCartDrawer() {
  // Check if drawer already exists
  if (document.getElementById("cart-drawer")) return;

  const drawerHTML = `
    <div class="cart-backdrop" id="cart-backdrop"></div>
    <div class="cart-drawer" id="cart-drawer">
      <div class="cart-header">
        <h3>您的購物籃</h3>
        <button class="close-cart" id="close-cart" aria-label="Close Shopping Cart">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="cart-items" id="cart-drawer-items">
        <!-- Cart Items Go Here -->
      </div>
      <div class="cart-footer">
        <div class="cart-summary-row">
          <span>小計:</span>
          <span class="cart-total" id="cart-drawer-total">NT$ 0</span>
        </div>
        <button class="btn btn-primary checkout-btn" id="checkout-btn">前往結帳</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", drawerHTML);

  document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("購物籃是空的！");
      return;
    }
    alert("感謝您的訂購！結帳功能為示範性質，已收到您的訂單模擬。");
    clearCart();
    // Close cart
    document.getElementById("cart-drawer").classList.remove("open");
    document.getElementById("cart-backdrop").classList.remove("open");
  });
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  const count = cart.reduce((total, item) => total + item.qty, 0);
  badge.textContent = count;
}

function renderCartItems() {
  const itemsContainer = document.getElementById("cart-drawer-items");
  const totalContainer = document.getElementById("cart-drawer-total");
  if (!itemsContainer || !totalContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-message">
        <i class="fas fa-shopping-bag"></i>
        <p>購物籃空空如也</p>
        <a href="casual.html" style="display:inline-block; margin-top: 15px; text-decoration: underline; color: var(--color-secondary);">去逛逛產品</a>
      </div>
    `;
    totalContainer.textContent = "NT$ 0";
    return;
  }

  let total = 0;
  itemsContainer.innerHTML = cart.map((item, index) => {
    total += item.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-meta">尺寸: ${item.size}</div>
          <div class="cart-item-price-row">
            <span class="cart-item-price">NT$ ${item.price.toLocaleString()}</span>
            <div class="qty-control">
              <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  totalContainer.textContent = `NT$ ${total.toLocaleString()}`;
}

// Global functions for inline HTML events
window.updateQty = (index, delta) => {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
};

function saveCart() {
  localStorage.setItem("aura_steps_cart", JSON.stringify(cart));
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartBadge();
  renderCartItems();
}

/* --- API TO ADD TO CART --- */
window.addToCart = (id, name, price, image, size) => {
  const existing = cart.find(item => item.id === id && item.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, image, size, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  
  // Show animation or open cart drawer
  const cartDrawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (cartDrawer && backdrop) {
    cartDrawer.classList.add("open");
    backdrop.classList.add("open");
    renderCartItems();
  }
};
