// PERMANENT_FIX_VERIFIED_MARKER_20260925_MAIN_JS
(function () {
  const STORAGE_KEYS = {
    cart: "mv-cart",
    wishlist: "mv-wishlist",
    theme: "mv-theme",
  };

  const categoryLinks = [
    { label: "Electronics", href: "products.html?category=Electronics" },
    { label: "Fashion", href: "products.html?category=Fashion" },
    { label: "Home Decor", href: "products.html?category=Home%20Decor" },
    { label: "Beauty", href: "products.html?category=Beauty" },
    { label: "Sports", href: "products.html?category=Sports" },
    { label: "Grocery", href: "products.html?category=Grocery" },
  ];

  function currentPageName() {
    const page = window.location.pathname.split("/").pop();
    return page || "index.html";
  }

  function activeClass(file) {
    return currentPageName() === file ? "active" : "";
  }

  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name) || "";
  }

  const EcomApp = {
    init() {
      this.renderSharedShell();
      this.initTheme();
      this.bindGlobalEvents();
      this.renderBreadcrumbs();
      this.populateYear();
      this.updateBadges();
      this.initCountdowns();
      this.initRevealObserver();
      this.initPasswordStrength();
      window.addEventListener("storage", () => this.updateBadges());
    },

    renderSharedShell() {
      const headerTarget = document.getElementById("siteHeader");
      const footerTarget = document.getElementById("siteFooter");
      const isAdmin = document.body.dataset.layout === "admin";

      if (headerTarget) {
        headerTarget.innerHTML = isAdmin ? this.renderAdminHeader() : this.renderPublicHeader();
      }

      if (footerTarget) {
        footerTarget.innerHTML = this.renderFooter();
      }

      if (!document.getElementById("toastContainer")) {
        const toastContainer = document.createElement("div");
        toastContainer.id = "toastContainer";
        toastContainer.className = "toast-container toast-container-custom";
        document.body.appendChild(toastContainer);
      }

      if (!document.getElementById("backToTopButton")) {
        const backToTop = document.createElement("button");
        backToTop.id = "backToTopButton";
        backToTop.type = "button";
        backToTop.className = "back-to-top";
        backToTop.setAttribute("aria-label", "Back to top");
        backToTop.setAttribute("data-back-top", "true");
        backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>';
        document.body.appendChild(backToTop);
      }
    },

    renderPublicHeader() {
      const searchValue = getQueryParam("q");
      const categoryMarkup = categoryLinks
        .map((item) => `<li><a class="dropdown-item" href="${item.href}">${item.label}</a></li>`)
        .join("");

      return `
        <div class="topbar py-2">
          <div class="container">
            <div class="row g-2 align-items-center">
              <div class="col-lg-6">
                <div class="d-flex flex-wrap align-items-center gap-3 small">
                  <span><i class="bi bi-telephone me-2"></i>+1 (800) 555-0136</span>
                  <a href="mailto:support@marketverse.com"><i class="bi bi-envelope me-2"></i>support@marketverse.com</a>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="d-flex flex-wrap justify-content-lg-end align-items-center gap-2">
                  <a class="social-link" href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                  <a class="social-link" href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                  <a class="social-link" href="#" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
                  <a class="social-link" href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="site-header-sticky">
          <div class="container">
            <nav class="navbar navbar-expand-xl navbar-light p-0">
              <div class="navbar-shell w-100">
                <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap flex-xl-nowrap">
                  <a class="navbar-brand" href="index.html">
                    <span class="brand-mark"><i class="bi bi-bag-heart-fill"></i></span>
                    <span>MarketVerse</span>
                  </a>
                  <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#siteNavbar" aria-controls="siteNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="siteNavbar">
                    <form class="header-search mx-xl-4 my-3 my-xl-0" data-search-form>
                      <div class="input-group">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</button>
                        <ul class="dropdown-menu dropdown-menu-start">
                          ${categoryMarkup}
                        </ul>
                        <input class="form-control" type="search" name="q" placeholder="Search products, brands, and categories" value="${searchValue}" aria-label="Search">
                        <button class="btn btn-search" type="submit" aria-label="Submit search">
                          <i class="bi bi-search"></i>
                        </button>
                      </div>
                    </form>
                    <ul class="navbar-nav ms-auto me-xl-3 gap-xl-2">
                      <li class="nav-item"><a class="nav-link ${activeClass("index.html")}" href="index.html">Home</a></li>
                      <li class="nav-item"><a class="nav-link ${activeClass("products.html")}" href="products.html">Products</a></li>
                      <li class="nav-item"><a class="nav-link ${activeClass("dashboard.html")}" href="dashboard.html">Dashboard</a></li>
                      <li class="nav-item"><a class="nav-link ${activeClass("orders.html")}" href="orders.html">Orders</a></li>
                      <li class="nav-item"><a class="nav-link ${activeClass("admin-dashboard.html")}" href="admin-dashboard.html">Admin</a></li>
                    </ul>
                    <div class="header-actions">
                      <button class="icon-pill" type="button" data-theme-toggle="true" aria-label="Toggle dark mode">
                        <i class="bi bi-moon-stars-fill"></i>
                      </button>
                      <a class="icon-pill" href="wishlist.html" aria-label="Wishlist">
                        <i class="bi bi-heart"></i>
                        <span class="count-badge" data-wishlist-count>0</span>
                      </a>
                      <a class="icon-pill" href="cart.html" aria-label="Cart">
                        <i class="bi bi-cart3"></i>
                        <span class="count-badge" data-cart-count>0</span>
                      </a>
                      <a class="btn btn-primary" href="login.html">
                        <i class="bi bi-person-circle me-2"></i>Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      `;
    },

    renderAdminHeader() {
      const searchValue = getQueryParam("q");
      return `
        <div class="site-header-sticky admin-navbar">
          <div class="container">
            <nav class="navbar navbar-expand-xl navbar-light p-0">
              <div class="navbar-shell w-100">
                <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap flex-xl-nowrap">
                  <a class="navbar-brand" href="admin-dashboard.html">
                    <span class="brand-mark"><i class="bi bi-speedometer2"></i></span>
                    <span>MarketVerse Admin</span>
                  </a>
                  <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#adminNavbar" aria-controls="adminNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="adminNavbar">
                    <form class="header-search mx-xl-4 my-3 my-xl-0" data-search-form>
                      <div class="input-group">
                        <input class="form-control" type="search" name="q" placeholder="Search storefront inventory" value="${searchValue}" aria-label="Search">
                        <button class="btn btn-search" type="submit" aria-label="Submit search">
                          <i class="bi bi-search"></i>
                        </button>
                      </div>
                    </form>
                    <ul class="navbar-nav ms-auto me-xl-3 gap-xl-2">
                      <li class="nav-item"><a class="nav-link ${activeClass("admin-dashboard.html")}" href="admin-dashboard.html">Overview</a></li>
                      <li class="nav-item"><a class="nav-link ${activeClass("admin-products.html")}" href="admin-products.html">Products</a></li>
                      <li class="nav-item"><a class="nav-link ${activeClass("admin-orders.html")}" href="admin-orders.html">Orders</a></li>
                      <li class="nav-item"><a class="nav-link ${activeClass("admin-customers.html")}" href="admin-customers.html">Customers</a></li>
                      <li class="nav-item"><a class="nav-link ${activeClass("admin-inventory.html")}" href="admin-inventory.html">Inventory</a></li>
                    </ul>
                    <div class="header-actions">
                      <button class="icon-pill" type="button" data-theme-toggle="true" aria-label="Toggle dark mode">
                        <i class="bi bi-moon-stars-fill"></i>
                      </button>
                      <a class="icon-pill" href="index.html" aria-label="View storefront">
                        <i class="bi bi-shop-window"></i>
                      </a>
                      <a class="btn btn-primary" href="profile.html">
                        <i class="bi bi-person-workspace me-2"></i>Admin Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      `;
    },

    renderFooter() {
      return `
        <footer class="site-footer mt-5">
          <div class="container">
            <div class="row g-4 pb-5">
              <div class="col-lg-4">
                <a class="navbar-brand footer-logo mb-3" href="index.html">
                  <span class="brand-mark"><i class="bi bi-bag-heart-fill"></i></span>
                  <span>MarketVerse</span>
                </a>
                <p class="mb-4">A polished multi-page e-commerce frontend template designed for modern shopping experiences across storefront, customer account, and admin workflows.</p>
                <div class="d-flex flex-wrap gap-2">
                  <img src="https://placehold.co/110x36/ffffff/0f172a?text=VISA" alt="Visa">
                  <img src="https://placehold.co/110x36/ffffff/0f172a?text=Mastercard" alt="Mastercard">
                  <img src="https://placehold.co/110x36/ffffff/0f172a?text=PayPal" alt="PayPal">
                </div>
              </div>
              <div class="col-sm-6 col-lg-2">
                <h6 class="footer-title">Shop</h6>
                <ul class="footer-list">
                  <li><a href="products.html">All Products</a></li>
                  <li><a href="wishlist.html">Wishlist</a></li>
                  <li><a href="cart.html">Shopping Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                </ul>
              </div>
              <div class="col-sm-6 col-lg-2">
                <h6 class="footer-title">Account</h6>
                <ul class="footer-list">
                  <li><a href="dashboard.html">Dashboard</a></li>
                  <li><a href="orders.html">Orders</a></li>
                  <li><a href="profile.html">Profile</a></li>
                  <li><a href="login.html">Login</a></li>
                </ul>
              </div>
              <div class="col-sm-6 col-lg-2">
                <h6 class="footer-title">Admin</h6>
                <ul class="footer-list">
                  <li><a href="admin-dashboard.html">Overview</a></li>
                  <li><a href="admin-products.html">Products</a></li>
                  <li><a href="admin-orders.html">Orders</a></li>
                  <li><a href="admin-inventory.html">Inventory</a></li>
                </ul>
              </div>
              <div class="col-sm-6 col-lg-2">
                <h6 class="footer-title">Contact</h6>
                <ul class="footer-list">
                  <li><a href="mailto:support@marketverse.com">support@marketverse.com</a></li>
                  <li><a href="tel:+18005550136">+1 (800) 555-0136</a></li>
                  <li><a href="register.html">Create Account</a></li>
                  <li><a href="forgot-password.html">Forgot Password</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
              <p class="mb-0">© <span data-year></span> MarketVerse. Crafted as a premium frontend-only shopping template.</p>
              <div class="d-flex flex-wrap gap-3">
                <a href="index.html">Home</a>
                <a href="products.html">Catalog</a>
                <a href="dashboard.html">Account</a>
                <a href="admin-dashboard.html">Admin Panel</a>
              </div>
            </div>
          </div>
        </footer>
      `;
    },

    renderBreadcrumbs() {
      const target = document.getElementById("breadcrumbShell");
      if (!target) {
        return;
      }

      const title = document.body.dataset.pageTitle || document.title.replace(" | MarketVerse", "");
      const trail = (document.body.dataset.breadcrumb || "Home|index.html")
        .split(">")
        .filter(Boolean)
        .map((part) => {
          const pieces = part.split("|");
          return { label: pieces[0], href: pieces[1] || "" };
        });

      const crumbs = trail
        .map(
          (item) => `
            <li class="breadcrumb-item">
              <a href="${item.href}">${item.label}</a>
            </li>
          `
        )
        .join("");

      target.innerHTML = `
        <section class="page-banner">
          <div class="container">
            <div class="page-banner-box">
              <div class="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
                <div>
                  <h1 class="h2 mb-2 fw-bold">${title}</h1>
                  <p class="text-muted-custom mb-0">Designed for a clean, modern shopping flow with reusable premium components.</p>
                </div>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb breadcrumb-pill mb-0">
                    ${crumbs}
                    <li class="breadcrumb-item active" aria-current="page">${title}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    bindGlobalEvents() {
      document.body.addEventListener("click", (event) => {
        if (event.target.closest("[data-theme-toggle]")) {
          this.toggleTheme();
        }

        if (event.target.closest("[data-back-top]")) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });

      document.addEventListener("submit", (event) => {
        const form = event.target;

        if (form.matches("[data-search-form]")) {
          event.preventDefault();
          const query = (new FormData(form).get("q") || "").toString().trim();
          const href = query ? `products.html?q=${encodeURIComponent(query)}` : "products.html";
          window.location.href = href;
        }

        if (form.matches("[data-newsletter-form]")) {
          event.preventDefault();
          const email = (new FormData(form).get("email") || "").toString().trim();
          if (!email) {
            this.showToast("Please enter your email to subscribe.", "warning");
            return;
          }
          form.reset();
          this.showToast("Thanks for subscribing. Weekly drops are on the way.", "success");
        }

        if (form.matches("[data-demo-submit]")) {
          event.preventDefault();
          const redirect = form.dataset.redirect || "";
          const successMessage = form.dataset.successMessage || "Demo form submitted successfully.";
          this.showToast(successMessage, "success");
          form.reset();
          if (redirect) {
            window.setTimeout(() => {
              window.location.href = redirect;
            }, 850);
          }
        }

        if (form.matches("[data-static-submit]")) {
          event.preventDefault();
          const message = form.dataset.staticSubmit || "Changes saved successfully.";
          this.showToast(message, "success");
        }
      });

      window.addEventListener("scroll", () => {
        const button = document.getElementById("backToTopButton");
        if (!button) {
          return;
        }
        if (window.scrollY > 500) {
          button.classList.add("show");
        } else {
          button.classList.remove("show");
        }
      });
    },

    initTheme() {
      const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
      if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
      }
      this.syncThemeIcons();
    },

    toggleTheme() {
      document.body.classList.toggle("dark-theme");
      const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
      localStorage.setItem(STORAGE_KEYS.theme, theme);
      this.syncThemeIcons();
    },

    syncThemeIcons() {
      const dark = document.body.classList.contains("dark-theme");
      document.querySelectorAll("[data-theme-toggle] i").forEach((icon) => {
        icon.className = dark ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
      });
    },

    initCountdowns() {
      document.querySelectorAll("[data-countdown]").forEach((element) => {
        const storageKey = `mv-countdown-${element.dataset.countdown}`;
        const savedTarget = localStorage.getItem(storageKey);
        let target = savedTarget
          ? new Date(savedTarget)
          : new Date(Date.now() + 1000 * 60 * 60 * 28);

        if (!savedTarget) {
          localStorage.setItem(storageKey, target.toISOString());
        }

        const renderTime = () => {
          const diff = Math.max(target.getTime() - Date.now(), 0);
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);

          element.querySelector("[data-days]").textContent = String(days).padStart(2, "0");
          element.querySelector("[data-hours]").textContent = String(hours).padStart(2, "0");
          element.querySelector("[data-minutes]").textContent = String(minutes).padStart(2, "0");
          element.querySelector("[data-seconds]").textContent = String(seconds).padStart(2, "0");

          if (diff <= 0) {
            target = new Date(Date.now() + 1000 * 60 * 60 * 28);
            localStorage.setItem(storageKey, target.toISOString());
          }
        };

        renderTime();
        window.setInterval(renderTime, 1000);
      });
    },

    initRevealObserver() {
      const nodes = document.querySelectorAll("[data-reveal]");
      if (!nodes.length) {
        return;
      }

      if (!("IntersectionObserver" in window)) {
        nodes.forEach((node) => node.classList.add("is-visible"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      nodes.forEach((node) => observer.observe(node));
    },

    initPasswordStrength() {
      const passwordInput = document.getElementById("registerPassword");
      const meter = document.getElementById("passwordStrengthMeter");
      const label = document.getElementById("passwordStrengthLabel");

      if (!passwordInput || !meter || !label) {
        return;
      }

      passwordInput.addEventListener("input", () => {
        const value = passwordInput.value.trim();
        let score = 0;

        if (value.length >= 8) score += 1;
        if (/[A-Z]/.test(value)) score += 1;
        if (/[0-9]/.test(value)) score += 1;
        if (/[^A-Za-z0-9]/.test(value)) score += 1;

        const widths = ["0%", "25%", "50%", "75%", "100%"];
        const labels = ["Too weak", "Weak", "Fair", "Strong", "Excellent"];

        meter.style.width = widths[score];
        label.textContent = labels[score];
      });
    },

    populateYear() {
      document.querySelectorAll("[data-year]").forEach((node) => {
        node.textContent = new Date().getFullYear();
      });
    },

    getCart() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || "[]");
      } catch (error) {
        return [];
      }
    },

    saveCart(cart) {
      localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
      this.updateBadges();
      document.dispatchEvent(new CustomEvent("ecom:cart-updated", { detail: cart }));
    },

    getWishlist() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.wishlist) || "[]");
      } catch (error) {
        return [];
      }
    },

    saveWishlist(list) {
      localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(list));
      this.updateBadges();
      document.dispatchEvent(new CustomEvent("ecom:wishlist-updated", { detail: list }));
    },

    updateBadges() {
      const cartCount = this.getCart().reduce((total, item) => total + item.quantity, 0);
      const wishlistCount = this.getWishlist().length;
      document.querySelectorAll("[data-cart-count]").forEach((node) => {
        node.textContent = cartCount;
      });
      document.querySelectorAll("[data-wishlist-count]").forEach((node) => {
        node.textContent = wishlistCount;
      });
    },

    formatCurrency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(Number(value) || 0);
    },

    renderStars(rating) {
      const stars = [];
      for (let i = 1; i <= 5; i += 1) {
        if (rating >= i) {
          stars.push('<i class="bi bi-star-fill"></i>');
        } else if (rating >= i - 0.5) {
          stars.push('<i class="bi bi-star-half"></i>');
        } else {
          stars.push('<i class="bi bi-star"></i>');
        }
      }
      return stars.join("");
    },

    showToast(message, variant = "dark") {
      const container = document.getElementById("toastContainer");
      if (!container) {
        return;
      }

      const bgClassMap = {
        success: "text-bg-success",
        warning: "text-bg-warning",
        danger: "text-bg-danger",
        info: "text-bg-primary",
        dark: "text-bg-dark",
      };

      const toast = document.createElement("div");
      toast.className = `toast align-items-center border-0 ${bgClassMap[variant] || "text-bg-dark"}`;
      toast.role = "alert";
      toast.ariaLive = "assertive";
      toast.ariaAtomic = "true";
      toast.innerHTML = `
        <div class="d-flex">
          <div class="toast-body">${message}</div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      `;

      container.appendChild(toast);

      if (window.bootstrap && bootstrap.Toast) {
        const instance = new bootstrap.Toast(toast, { delay: 2800 });
        instance.show();
        toast.addEventListener("hidden.bs.toast", () => toast.remove());
      } else {
        toast.classList.add("show");
        window.setTimeout(() => toast.remove(), 2800);
      }
    },
  };

  window.EcomApp = EcomApp;
  document.addEventListener("DOMContentLoaded", () => EcomApp.init());
})();
